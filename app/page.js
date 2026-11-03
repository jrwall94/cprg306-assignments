"use client";
import Link from "next/link";

export default function Page() {
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const currentWeek = 8;

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-xl font-medium tracking-tight text-neutral-100">
          CPRG 306 <span className="text-neutral-600">/</span>{" "}
          <span className="text-amber-500">Web Development 2</span>
        </h1>
        <p className="mt-1 text-xs text-neutral-500 uppercase tracking-widest font-mono">
          Weekly Assignments
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {weeks.map((week) => {
          const isAvailable = week <= currentWeek;

          if (!isAvailable) {
            return (
              <div
                key={week}
                className="flex items-center justify-between px-4 py-3 rounded-lg border border-neutral-900 bg-neutral-950/40 text-neutral-600 cursor-not-allowed select-none"
              >
                <span className="text-sm">Week {week} Assignment</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-600">
                  Locked
                </span>
              </div>
            );
          }

          return (
            <Link
              key={week}
              href={`/week-${week}`}
              className="group flex items-center justify-between px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:text-white hover:border-amber-500/40 hover:bg-neutral-900 transition-all duration-150"
            >
              <span className="text-sm font-medium">Week {week} Assignment</span>
              <svg
                className="w-4 h-4 text-neutral-500 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          );
        })}
      </div>
    </main>
  );
}