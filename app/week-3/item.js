export default function Item({ name, quantity, category }) {
    return (
        <li className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
            <div>
                <p className="font-medium text-slate-800">{name}</p>
                <span className="mt-1 inline-block rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-700">
                    {category}
                </span>
            </div>
            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-sm font-semibold text-slate-600">
                x{quantity}
            </span>
        </li>
    );
}