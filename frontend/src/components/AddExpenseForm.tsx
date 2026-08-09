import { useState } from "react";

type AddExpenseFormProps = {
  onAddExpense: (
    description: string,
    amount: number,
    category: string,
    date: string
  ) => void;
};

function AddExpenseForm({ onAddExpense }: AddExpenseFormProps) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!description || !amount || !date) {
      return;
    }

    onAddExpense(
      description,
      Number(amount),
      category,
      date
    );

    setDescription("");
    setAmount("");
    setCategory("Food");
    setDate("");
  };

  return (
    <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Add Expense
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-5 md:grid-cols-2"
      >
        <div>
          <label className="text-sm font-medium text-slate-700">
            Description
          </label>

          <input
            type="text"
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            placeholder="e.g. Lunch"
            className="mt-2 w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-slate-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Amount
          </label>

          <input
            type="number"
            value={amount}
            onChange={(event) =>
              setAmount(event.target.value)
            }
            placeholder="e.g. 450"
            className="mt-2 w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-slate-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Category
          </label>

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
            className="mt-2 w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-slate-500"
          >
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Entertainment</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(event) =>
              setDate(event.target.value)
            }
            className="mt-2 w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-slate-500"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800"
          >
            Add Expense
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddExpenseForm;