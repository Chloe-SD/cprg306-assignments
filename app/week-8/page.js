"use Client"

import { useUserAuth } from './_utils/auth-context';


export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleSignIn() {
    gitHubSignIn();
  };
  
  function handleSignOut() {
    firebaseSignOut();
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleSignIn}>Login with GitHub</button>
      ) : (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Logout</button>
          //<Link to="/shopping-list">Go to Shopping List</Link>
        </>
      )}
    </div>
  );
};


