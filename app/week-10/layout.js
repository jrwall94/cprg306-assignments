import { AuthContextProvider } from "./_utils/auth-context";
// the provider component  just built

export default function Layout({ children }) {

  return <AuthContextProvider>{children}</AuthContextProvider>;
  // wraps every page under week-9 in the auth context, so any of them
  // can call useUserAuth() to check login state
}