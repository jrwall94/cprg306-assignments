import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>Wallace Ip</h1>
      <Link
        href="https://github.com/wallaceip/cprg306-assignments"
        className="hover:text-amber-400 text-amber-200"
      >
        GitHub Repo
      </Link>
    </main>
  );
}
