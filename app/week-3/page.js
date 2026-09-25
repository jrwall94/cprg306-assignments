import ItemList from "./item-list";
import Home from "../home";

export const metadata = {
  title: "Shopping List",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <section className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-800">
          Shopping List
        </h1>
        <ItemList />
      </section>
      <Home />
    </main>
  );
}
