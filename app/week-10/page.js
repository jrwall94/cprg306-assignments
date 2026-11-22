"use client";
// needs "use client" — calls the useUserAuth hook and handles button clicks,
// both client-only

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
// Next.js's own Link component — for client-side navigation to the shopping list page

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  // pulls the shared login state + the two functions out of the context
  // we wired up in layout.js

  return (
    <main className="p-8">
      {user ? (
        // logged in: show welcome message, logout button, link to shopping list
        <div>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={firebaseSignOut}
            className="px-4 py-2 bg-gray-200 rounded mr-4"
          >
            Log Out
          </button>
          <Link href="/week-10/shopping-list" className="text-blue-600 underline">
            Go to Shopping List
          </Link>
        </div>
      ) : (
        // logged out: show the login button only
        <button
          onClick={gitHubSignIn}
          className="px-4 py-2 bg-gray-900 text-white rounded"
        >
          Sign in with GitHub
        </button>
      )}
    </main>
  );
}