import ItemList from "./item-list";

export const metadata= {
    title: "Shopping List",
};

export default function Page() {
    return (
        <main className="bg-slate-950 min-h-screen p-4">
            <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-sky-100 mb-4">Shopping List</h1>
            <ItemList/>
            </div>
        </main>
    )

}