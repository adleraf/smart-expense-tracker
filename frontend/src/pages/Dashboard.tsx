import { useState } from "react";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import TransactionList from "../components/TransactionList";
import AddExpenseForm from "../components/AddExpenseForm";
import SpendingChart from "../components/SpendingChart";

export type Transaction = {
  id: number;
  category: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  date: string;
};

function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      category: "Food",
      description: "Lunch",
      amount: 450,
      type: "expense",
      date: "2026-08-10",
    },
    {
      id: 2,
      category: "Transport",
      description: "Taxi",
      amount: 320,
      type: "expense",
      date: "2026-08-09",
    },
    {
      id: 3,
      category: "Salary",
      description: "Monthly salary",
      amount: 45000,
      type: "income",
      date: "2026-08-01",
    },
    {
      id: 4,
      category: "Shopping",
      description: "New clothes",
      amount: 2100,
      type: "expense",
      date: "2026-08-08",
    },
  ]);

  const addExpense = (
    description: string,
    amount: number,
    category: string,
    date: string
  ) => {
    const newExpense: Transaction = {
      id: Date.now(),
      description,
      amount,
      category,
      type: "expense",
      date,
    };

    setTransactions((currentTransactions) => [
      newExpense,
      ...currentTransactions,
    ]);
  };

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  const spendingByCategory = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce<Record<string, number>>((result, transaction) => {
      result[transaction.category] =
        (result[transaction.category] || 0) + transaction.amount;

      return result;
    }, {});

  const chartData = Object.entries(spendingByCategory).map(
    ([category, amount]) => ({
      category,
      amount,
    })
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-slate-900">
            Smart Expense Tracker
          </h1>

          <p className="mt-2 text-slate-600">
            Here's your financial overview.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <StatCard
              title="Total Income"
              amount={`₹${totalIncome.toLocaleString("en-IN")}`}
            />

            <StatCard
              title="Total Expenses"
              amount={`₹${totalExpenses.toLocaleString("en-IN")}`}
            />

            <StatCard
              title="Balance"
              amount={`₹${balance.toLocaleString("en-IN")}`}
            />
          </div>

          <div className="mt-8">
            <SpendingChart data={chartData} />
          </div>

          <TransactionList transactions={transactions} />

          <AddExpenseForm onAddExpense={addExpense} />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;