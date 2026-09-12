import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="title">Shopping List</h1>
      <section className="flex">
        <StudentInfo name="Jonathan Wall" githubUsername="jrwall94" />
      </section>
      <Link href="/" className="hyperlink">
        Go Home
      </Link>
    </main>
  );
}
