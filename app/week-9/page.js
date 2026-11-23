"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import Home from "../components/home";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
          Week 9
        </p>
        <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Authentication with Firebase
        </h1>

        <section className="mt-10 rounded-xl border border-indigo-300/15 bg-slate-900/60 p-8 text-center shadow-lg shadow-slate-950/20">
        {user ? (
          <>
            <p className="text-lg text-slate-300">Welcome,</p>
            <h2 className="mt-1 text-2xl font-bold text-white">
              {user.displayName || user.email}
            </h2>
            <p className="mt-3 text-slate-300">
              You are signed in and can access your shopping list.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/week-9/shopping-list"
                className="rounded-lg bg-teal-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
              >
                Continue to Shopping List
              </Link>
              <button
                type="button"
                onClick={firebaseSignOut}
                className="rounded-lg border border-indigo-300/20 bg-slate-800 px-5 py-2 font-semibold text-slate-200 transition hover:border-teal-300/50 hover:bg-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
              >
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-slate-300">
              Sign in with GitHub to continue to the shopping list.
            </p>
            <button
              type="button"
              onClick={gitHubSignIn}
              className="mt-6 rounded-lg bg-teal-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
            >
              Sign In with GitHub
            </button>
          </>
        )}
        </section>

        <Home />
      </div>
    </main>
  );
}
