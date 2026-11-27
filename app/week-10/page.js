"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import Home from "../home";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Sign in failed:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Sign out failed:", error);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
            <section className="mx-auto flex max-w-md flex-col items-center gap-6 rounded-xl bg-white p-8 shadow">
                <h1 className="text-center text-3xl font-bold tracking-tight text-slate-800">
                    Shopping List App
                </h1>

                {user ? (
                    <>
                        <p className="text-center text-slate-700">
                            Welcome, {user.displayName} ({user.email})
                        </p>
                        <Link
                            href="/week-10/shopping-list"
                            className="text-blue-600 hover:underline"
                        >
                            Continue to your Shopping List
                        </Link>
                        <button
                            onClick={handleSignOut}
                            className="rounded-lg bg-slate-200 px-4 py-2 font-medium text-slate-800 hover:bg-slate-300"
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleSignIn}
                        className="rounded-lg bg-slate-800 px-4 py-2 font-medium text-white hover:bg-slate-700"
                    >
                        Login with GitHub
                    </button>
                )}

                <Home />
            </section>
        </main>
    );
}
