import { SignedIn, SignedOut, SignInButton, UserButton, useUser, useClerk } from "@clerk/clerk-react";
import React from "react";

const Topbar = () => {
  const { signOut } = useClerk();
  const { user } = useUser();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Allo Health</h1>
      <nav className="flex items-center">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center space-x-4">
            <div>Welcome, {user?.firstName} {user?.lastName}!</div>
            <UserButton />
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
        </SignedIn>
      </nav>
    </header>
  );
};

export default Topbar;