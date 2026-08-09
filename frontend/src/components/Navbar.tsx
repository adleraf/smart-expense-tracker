function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <h1 className="text-xl font-bold text-slate-900">
          SmartSpend
        </h1>

        <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Dashboard
          </button>

          <button className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Expenses
          </button>

          <button className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Budgets
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