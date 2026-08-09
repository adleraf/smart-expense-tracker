import {
  Utensils,
  Car,
  ShoppingBag,
  Receipt,
  Gamepad2,
  CircleDollarSign,
  MoreHorizontal,
} from "lucide-react";

import { motion } from "framer-motion";

import type { Transaction } from "../pages/Dashboard";

type TransactionListProps = {
  transactions: Transaction[];
};

function getCategoryIcon(category: string) {
  switch (category) {
    case "Food":
      return <Utensils size={20} />;

    case "Transport":
      return <Car size={20} />;

    case "Shopping":
      return <ShoppingBag size={20} />;

    case "Bills":
      return <Receipt size={20} />;

    case "Entertainment":
      return <Gamepad2 size={20} />;

    case "Salary":
      return <CircleDollarSign size={20} />;

    default:
      return <MoreHorizontal size={20} />;
  }
}

function TransactionList({
  transactions,
}: TransactionListProps) {
  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Recent Transactions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest income and expenses.
          </p>
        </div>

        <button className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
          View all
        </button>
      </div>

      <div className="mt-6 divide-y divide-slate-100">
        {transactions.map((transaction) => (
          <motion.div
            key={transaction.id}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between py-4"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                {getCategoryIcon(transaction.category)}
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  {transaction.category}
                </p>

                <p className="text-sm text-slate-500">
                  {transaction.description}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {transaction.date}
                </p>
              </div>
            </div>

            <p
              className={`font-semibold ${
                transaction.type === "income"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {transaction.type === "income" ? "+" : "-"}₹
              {transaction.amount.toLocaleString("en-IN")}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TransactionList;