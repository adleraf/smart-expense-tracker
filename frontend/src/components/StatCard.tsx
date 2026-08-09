type StatCardProps = {
  title: string;
  amount: string;
};

function StatCard({ title, amount }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        {amount}
      </h2>
    </div>
  );
}

export default StatCard;