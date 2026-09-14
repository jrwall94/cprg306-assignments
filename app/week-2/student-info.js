import Link from "next/link";

export default function StudentInfo({ firstName, lastName, githubUsername }) {
    return (
        <main>
            <p>{firstName} {lastName}</p>
            <Link href={`https://github.com/${githubUsername}`}>
                {`https://github.com/${githubUsername}`}
            </Link>
        </main>
    );
}