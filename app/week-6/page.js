import ItemList from "./item-list";
import BackHome from "../components/backhome";

export const metadata = {
  title: "Shopping List",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-md space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-extrabold text-amber-500 tracking-tight">
            Shopping List
          </h1>
        </header>

        <ItemList />

        <div className="flex justify-center pt-2">
          <BackHome />
        </div>
      </div>
    </main>
  );
}