export default function Item({ item, onSelect, onDelete, isSelected = false }) {
  const { name, quantity, category } = item;

  return (
    <li
      onClick={() => onSelect?.(item)}
      className={`group flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all duration-150 cursor-pointer active:scale-[0.99] ${
        isSelected
          ? "bg-amber-500/10 border-amber-500 shadow-sm shadow-amber-500/5"
          : "bg-slate-900/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/60"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Active vertical indicator bar */}
        <div
          className={`w-1 h-8 rounded-full transition-colors ${
            isSelected
              ? "bg-amber-500"
              : "bg-transparent group-hover:bg-amber-500/40"
          }`}
        />
        <div>
          <h2
            className={`font-semibold text-base capitalize transition-colors ${
              isSelected
                ? "text-amber-400"
                : "text-slate-100 group-hover:text-amber-400"
            }`}
          >
            {name}
          </h2>
          <p className="text-xs font-medium text-slate-400 capitalize mt-0.5">
            {category}
          </p>
        </div>
      </div>

      {/* Quantity Badge and Delete Button */}
      <div className="flex items-center gap-2">
        <div
          className={`flex items-center justify-center min-w-10 h-9 px-3 border rounded-lg text-sm font-bold transition-colors ${
            isSelected
              ? "bg-amber-500 border-amber-400 text-slate-950 shadow-sm"
              : "bg-slate-800/90 border-slate-700/80 text-amber-400 group-hover:border-amber-500/30"
          }`}
        >
          x{quantity}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete?.(item.id);
          }}
          className={`flex items-center justify-center w-9 h-9 rounded-lg border text-sm font-bold transition-all duration-150 opacity-0 group-hover:opacity-100 focus:opacity-100 active:scale-95 ${
            isSelected
              ? "border-amber-400/30 bg-amber-500/10 text-amber-400 hover:bg-red-500/15 hover:border-red-400/40 hover:text-red-400"
              : "border-slate-700/80 bg-slate-800/90 text-slate-500 hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400"
          }`}
          title="Delete item"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </li>
  );
}