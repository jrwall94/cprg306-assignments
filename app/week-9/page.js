"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSubmit = async () => {
    if (user) {
      await firebaseSignOut();
    } else {
      await gitHubSignIn();
    }
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className="border-2 p-2 m-5 hover:bg-slate-200  hover:underline active:bg-slate-400"
      >
        {!user && <p>Login</p>}
        {user && <p>Logout</p>}
      </button>
      {user && (
        <div className="ml-5">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <Link
            href={"/week-9/shopping-list"}
            className="text-blue-600 hover:underline"
          >
            View your shopping list
          </Link>
          <img
            src={user.photoURL}
            alt="GitHub profile picture"
            height={100}
            width={100}
            className="mt-5 border-2"
          />
        </div>
      )}
    </div>
  );
}
