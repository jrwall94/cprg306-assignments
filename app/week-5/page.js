import NewItem from "./new-item";
import BackHome from "../components/backhome";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 flex flex-col items-center">
      <div className="w-full max-w-md flex flex-col items-center space-y-6">
        <NewItem />
        <BackHome />
      </div>
    </main>
  );
}