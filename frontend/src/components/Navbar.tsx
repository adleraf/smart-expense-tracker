import {
  LayoutDashboard,
  Receipt,
  WalletCards,
  Settings,
  Bell,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
            ₹
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              SmartSpend
            </h1>

            <p className="text-xs text-slate-500">
              Personal finance
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <button className="flex items-center gap-2 text-sm font-medium text-slate-900">
            <LayoutDashboard size={17} />
            Dashboard
          </button>

          <button className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900">
            <Receipt size={17} />
            Expenses
          </button>

          <button className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900">
            <WalletCards size={17} />
            Budgets
          </button>

          <button className="text-slate-500 transition hover:text-slate-900">
            <Settings size={19} />
          </button>

          <button className="relative text-slate-500 transition hover:text-slate-900">
            <Bell size={19} />

            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            A
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;