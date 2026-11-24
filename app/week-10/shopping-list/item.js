export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;
  return (
    <li className="m-4 flex items-center justify-between rounded-xl border border-indigo-300/15 bg-slate-900/60 p-4 shadow-lg shadow-slate-950/20 transition hover:border-teal-300/50"
    onClick={onSelect}>
      <div>
        <h2 className="font-bold text-2xl capitalize">{name}</h2>
        <p className="text-md capitalize text-slate-300">Category: {category}</p>
      </div>
      <p className="rounded-lg border border-indigo-300/20 bg-slate-950/60 p-1 text-lg text-teal-200">x {quantity}</p>
    </li>
  );
}
