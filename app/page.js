import Link from "next/link";
import Assignment from "./assignment";

export default function Home() {
  return (
    <main>
      <h1 className="title">CPRG 306: Web Development 2 - Assignments</h1>
      <Assignment week={2} />
      <Assignment week={3} />
    </main>
  );
}
