//Week8/page.js
"use client"
import Header from "@/components/header";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleSignIn() {
    gitHubSignIn();
  };
  
  function handleSignOut() {
    firebaseSignOut();
  };

  return (
    <main>
      <Header/>
      <div>
        {!user ? (
          <button onClick={handleSignIn}>Login with GitHub</button>
        ) : (
          <>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleSignOut}>Logout</button>
            <Link href="./week-8/shopping-list"><button>Go to Shopping List</button></Link>
          </>
        )}
      </div>
    </main>
  );
};


