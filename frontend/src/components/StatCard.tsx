import { Wallet } from "lucide-react";
import { motion } from "framer-motion";

type StatCardProps = {
  title: string;
  amount: string;
};

function StatCard({ title, amount }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
          <Wallet size={20} className="text-slate-700" />
        </div>
      </div>

      <h2 className="mt-4 text-3xl font-bold text-slate-900">
        {amount}
      </h2>
    </motion.div>
  );
}

export default StatCard;