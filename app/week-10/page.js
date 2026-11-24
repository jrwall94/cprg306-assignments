"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import BackHome from "../components/back-home";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl shadow-lg p-6 space-y-5">
      <BackHome />
        <div>
          <h1 className="text-2xl font-bold text-slate-100">
            Shopping List App
          </h1>
          <p className="text-xs font-medium text-slate-400 mt-1">
            Week 10 - Shopping List with Firestore
          </p>
        </div>

        {user ? (
          <div className="space-y-5">
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User avatar"}
                  className="w-12 h-12 rounded-full border border-slate-600 shrink-0"
                />
              )}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-100 truncate">
                  Welcome, {user.displayName || "User"}
                </p>
                <p className="text-xs text-slate-400 truncate">{user.email}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <Link
                href="/week-10/shopping-list"
                className="w-full h-11 flex items-center justify-center rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold text-sm shadow-sm transition duration-150"
              >
                Continue to Shopping List
              </Link>

              <button
                type="button"
                onClick={firebaseSignOut}
                className="w-full h-11 rounded-xl bg-slate-800/90 hover:bg-slate-800 active:scale-[0.99] border border-slate-700/80 text-slate-200 font-semibold text-sm transition duration-150"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 pt-1">
            <p className="text-sm text-slate-400 leading-relaxed">
              Sign in with your GitHub account to view and manage your shopping
              list.
            </p>

            {/* Authentic GitHub OAuth Button */}
            <button
              type="button"
              onClick={gitHubSignIn}
              className="w-full h-11 px-4 flex items-center justify-center gap-3 rounded-xl bg-[#24292F] hover:bg-[#2c3239] active:bg-[#1f2429] active:scale-[0.99] text-white font-semibold text-sm border border-slate-700/80 shadow-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <svg
                className="w-5 h-5 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>Sign in with GitHub</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}