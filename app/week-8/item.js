export default function Item({ item }) {
  const { name, quantity, category } = item;

  return (
    <li className="flex items-center justify-between px-4 py-3.5 bg-slate-900/90 border border-slate-800 rounded-xl hover:border-slate-700 transition">
      <div>
        <h2 className="font-semibold text-base text-slate-100 capitalize">
          {name}
        </h2>
        <p className="text-xs font-medium text-slate-400 capitalize mt-0.5">
          {category}
        </p>
      </div>

      <div className="flex items-center justify-center min-w-10 h-9 px-3 bg-slate-800/90 border border-slate-700/80 rounded-lg text-sm font-bold text-amber-400">
        x{quantity}
      </div>
    </li>
  );
}