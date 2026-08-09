import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type SpendingData = {
  category: string;
  amount: number;
};

type SpendingChartProps = {
  data: SpendingData[];
};

function SpendingChart({ data }: SpendingChartProps) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Spending by Category
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        See where your money is going.
      </p>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="category" />

            <YAxis />

            <Tooltip
              formatter={(value) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                "Spent",
              ]}
            />

            <Bar
              dataKey="amount"
              fill="#0f172a"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default SpendingChart;