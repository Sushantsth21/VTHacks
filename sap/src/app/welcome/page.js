"use client";
import React, { useEffect } from "react";
import {
  useUser,
  useRedirectFunctions,
  useLogoutFunction,
} from "@propelauth/nextjs/client";

const WelcomeMessage = () => {
  const { loading, user } = useUser();
  const { redirectToSignupPage, redirectToLoginPage, redirectToAccountPage } =
    useRedirectFunctions();
  const logoutFn = useLogoutFunction();

  // Simulate getUserOrRedirect behavior
  useEffect(() => {
    if (!loading && !user) {
      redirectToLoginPage();
    }
  }, [loading, user, redirectToLoginPage]);

  if (loading) return <div>Loading...</div>;

  // This will only render if the user is logged in
  if (user) {
    return (
      <div>
        <p>Hello {user.firstName}!</p>
        <p>You are logged in as {user.email}</p>
        <button onClick={() => redirectToAccountPage()}>Account</button>
        <button onClick={logoutFn}>Logout</button>
      </div>
    );
  }

  // This part simulates the getUser behavior
  // It will briefly show before redirecting if the user is not logged in
  return (
    <div>
      <p>Please log in to be welcomed</p>
      <button onClick={() => redirectToLoginPage()}>Login</button>
      <button onClick={() => redirectToSignupPage()}>Signup</button>
    </div>
  );
};

export default WelcomeMessage;
