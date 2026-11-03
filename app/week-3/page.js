import ItemList from "./item-list"
import BackHome from "../components/backhome";

export const metadata = {
  title: "Shopping List",
};

export default function Page() {
  return (
    <main className="bg-slate-950 p-6 flex flex-col items-center">
      <h1  className="text-amber-500 text-4xl font-bold">Shopping List</h1>
      <ItemList />
      <BackHome />
    </main>
  );
}
