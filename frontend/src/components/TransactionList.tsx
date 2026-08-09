type Transaction = {
  id: number;
  category: string;
  description: string;
  amount: number;
  type: "income" | "expense";
};

const transactions: Transaction[] = [
  {
    id: 1,
    category: "Food",
    description: "Lunch",
    amount: 450,
    type: "expense",
  },
  {
    id: 2,
    category: "Transport",
    description: "Taxi",
    amount: 320,
    type: "expense",
  },
  {
    id: 3,
    category: "Salary",
    description: "Monthly salary",
    amount: 45000,
    type: "income",
  },
  {
    id: 4,
    category: "Shopping",
    description: "New clothes",
    amount: 2100,
    type: "expense",
  },
];

function TransactionList() {
  return (
    <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">
          Recent Transactions
        </h2>

        <button className="text-sm font-medium text-slate-600 hover:text-slate-900">
          View all
        </button>
      </div>

      <div className="mt-6 divide-y divide-slate-100">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between py-4"
          >
            <div>
              <p className="font-medium text-slate-900">
                {transaction.category}
              </p>

              <p className="text-sm text-slate-500">
                {transaction.description}
              </p>
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default TransactionList;