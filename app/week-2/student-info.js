import Link from "next/link";

export default function StudentInfo({ name, githubUsername }) {
  return (
    <div className="inline-block m-2 p-3 bg-gray-300">
      <p>{name}</p>
      <Link href={`https://github.com/${githubUsername}`} className="hyperlink">
        GitHub Link
      </Link>
    </div>
  );
}
