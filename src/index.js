import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Loading from './Component/Navbar/Loading';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY ;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <SignedIn>
        <App />
      </SignedIn>
      <SignedOut>
        <Loading />
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
