import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="bg-slate-950 min-h-screen p-4">
            <h1 className="text-3xl font-bold text-sky-100 mb-4">Shopping List</h1>
            <ItemList/>
        </main>
    )

}