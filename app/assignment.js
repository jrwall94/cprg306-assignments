import Link from "next/link";

export default function Assignment({ week }) {
  return (
    <div>
      <Link href={`./week-${week}`} className="text-blue-600 hover:underline">
        Week {week} Assignment
      </Link>
    </div>
  );
}
