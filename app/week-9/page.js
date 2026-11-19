"use client";
// Import the useUserAuth hook
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import Home from "../components/home";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


  <p>
    Welcome, {user.displayName} ({user.email})
  </p>;

}
