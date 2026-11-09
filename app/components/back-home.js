import Link from "next/link";

export default function BackHome() {
  return (
    <nav className="mb-6 mt-6">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-amber-400 transition-colors duration-150"
      >
        <svg
          className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all duration-150"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <span>Return to Home</span>
      </Link>
    </nav>
  );
}