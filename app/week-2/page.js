import StudentInfo from "./student-info";
import BackHome from "../components/backhome";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl text-amber-500">Shopping List</h1>
      <StudentInfo />
      <BackHome />
    </main>
  );
}