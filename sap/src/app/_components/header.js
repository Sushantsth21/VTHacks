"use client";
import React, { useState } from "react";
import {
  useUser,
  useRedirectFunctions,
  useLogoutFunction,
} from "@propelauth/nextjs/client";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loading, user } = useUser();
  const { redirectToSignupPage, redirectToLoginPage, redirectToAccountPage } =
    useRedirectFunctions();
  const logoutFn = useLogoutFunction();

  const menuItems = ["Home", "About", "Services", "Contact"];

  const AuthButtons = () => (
    <>
      {user ? (
        <>
          <button
            onClick={() => redirectToAccountPage()}
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Account
          </button>
          <button
            onClick={logoutFn}
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => redirectToLoginPage()}
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Login
          </button>
          <button
            onClick={() => redirectToSignupPage()}
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Sign Up
          </button>
        </>
      )}
    </>
  );

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Logo</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-200 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <AuthButtons />
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block py-2 hover:bg-blue-700 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="flex flex-col space-y-2">
                <AuthButtons />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
