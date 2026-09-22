import Link from "next/link";

export default function StudentInfo({ name, githubUsername }) {
  return (
    <div className="id-card">
      <p>{name}</p>
      <Link href={`https://github.com/${githubUsername}`} className="hyperlink">
        GitHub Link
      </Link>
    </div>
  );
}
