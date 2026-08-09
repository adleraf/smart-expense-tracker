import AddExpenseForm from "../components/AddExpenseForm";
import TransactionList from "../components/TransactionList";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

function Dashboard() {
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
              amount="₹45,000"
            />

            <StatCard
              title="Total Expenses"
              amount="₹28,400"
            />

            <StatCard
              title="Balance"
              amount="₹16,600"
            />
          </div>
         <TransactionList />
     <AddExpenseForm />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;