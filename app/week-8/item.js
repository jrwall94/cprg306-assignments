export default function Item({ item, onSelect, isSelected = false }) {
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

      {/* Quantity Badge - Inverts to solid amber when selected */}
      <div
        className={`flex items-center justify-center min-w-10 h-9 px-3 border rounded-lg text-sm font-bold transition-colors ${
          isSelected
            ? "bg-amber-500 border-amber-400 text-slate-950 shadow-sm"
            : "bg-slate-800/90 border-slate-700/80 text-amber-400 group-hover:border-amber-500/30"
        }`}
      >
        x{quantity}
      </div>
    </li>
  );
}