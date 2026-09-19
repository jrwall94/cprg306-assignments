export default function Item({name, quantity, category}) {
    return (
        <li className= "bg-slate-800 p-3 mb-3 rounded-md max-w-md">
            <p className="text-lg font-bold text-sky-100">{name}</p>
            <p className="text-sky-300">
                Buy {quantity} in {category}
            </p>
        </li>
    );
}