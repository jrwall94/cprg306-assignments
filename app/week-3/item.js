export default function Item({ item }) {
  const { name, quantity, category} = item;
  return (
    <li className="p-3 pr-25 m-2 bg-slate-800 text-white rounded">
      <h2 className="font-bold text-2xl">{name}</h2>
      <p className="text-gray-300">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
