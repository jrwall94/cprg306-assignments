export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-amber-500 w-75 mt-5">
      <p className="text-2xl capitalize">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
