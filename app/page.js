import Link from "next/link";
export default function Page() {
  const WeekLinks = [
    { week: 2, description: "My Name and Github Link" },
    { week: 3, description: "Styled Shopping List" },
    { week: 4, description: "Basic Interactive Component" },
    { week: 5, description: "Interactivity with Forms" },
    { week: 6, description: "Sorting and Filtering Lists" },
    {week:7, description: "Managing State"},
    { week: 8, description: "Fetching Data Using an API" },
    { week: 9, description: "Authentication with Firebase" },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
          Web Dev 2 · Weekly work
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          CPRG306 Assignments
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
          Explore the projects and concepts covered throughout the semester.
          Choose a week to view its assignment.
        </p>

        <section
          aria-label="Weekly assignments"
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WeekLinks.map((link) => (
            <Link
              key={link.week}
              href={`/week-${link.week}`}
              className="group rounded-xl border border-indigo-300/15 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/20 transition duration-200 hover:-translate-y-1 hover:border-teal-300/60 hover:bg-slate-800/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-teal-300">
                Week {link.week}
              </span>
              <span className="mt-2 block text-lg font-semibold text-white transition-colors group-hover:text-teal-100">
                {link.description}
              </span>
              <span className="mt-5 inline-block text-sm font-medium text-indigo-200">
                View assignment <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
