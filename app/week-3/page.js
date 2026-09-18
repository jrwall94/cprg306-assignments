import ItemList from "./item-list";
import Home from "../home";

export const metadata = {
  title: "Shopping List",
};

export default function Page() {
  return (
    <main>
      <section className="flex flex-col items-center bg-black">
        <h1 className="text-4xl text-amber-800 font-bold">Shopping List</h1>
        <ItemList />
        <Home />
      </section>
    </main>
  );
}
