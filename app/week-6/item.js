export default function Item({ item }) {
  const { name, quantity, category } = item;

  return (
    <li className="flex items-center justify-between p-4 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-slate-700 transition">
      <div>
        <h2 className="font-semibold text-lg text-slate-100 capitalize">
          {name}
        </h2>
        <p className="text-sm text-slate-400 capitalize">
          Category: {category}
        </p>
      </div>

      <div className="flex items-center justify-center min-w-10 h-10 px-3 bg-slate-800 border border-slate-700 rounded-lg text-sm font-bold text-amber-400">
        x{quantity}
      </div>
    </li>
  );
}