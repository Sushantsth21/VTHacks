"use client";
import React, { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { User, Settings, LogOut, LogIn, Menu as MenuIcon } from "lucide-react";
import { useUser, useRedirectFunctions, useLogoutFunction } from "@propelauth/nextjs/client";

const WelcomeMessage = () => {
  const { loading, user } = useUser();
  const { redirectToSignupPage, redirectToLoginPage, redirectToAccountPage } = useRedirectFunctions();
  const logoutFn = useLogoutFunction();

  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
     <nav
  className={`fixed w-full z-10 top-0 transition-all duration-300 ease-in-out ${
    navbarScrolled ? "bg-black text-white" : "bg-transparent text-black"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    {/* Logo */}
    <a href="#" className="text-2xl font-bold flex-grow text-center md:text-left ml-12">
      MIMS
    </a>

    {/* Navigation links */}
    <div className="hidden md:flex flex-grow justify-center space-x-12 ml-32">
      <a href="#" className="text-lg hover:text-indigo-500">
        Home
      </a>
      <a href="/contact" className="text-lg hover:text-indigo-500">
        Contact
      </a>
      <a href="#" className="text-lg hover:text-indigo-500">
        Services
      </a>
      <a href="#" className="text-lg hover:text-indigo-500">
        About
      </a>
    </div>

    {/* User info or mobile menu */}
    <div className="flex-grow flex justify-end">
      {/* Mobile menu button */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Welcome guest or user info */}
      {loading ? (
        <div>Loading...</div>
      ) : user ? (
        <div className="hidden md:flex items-center space-x-4">
          <p className="text-lg font-semibold">Hello {user.firstName}!</p>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center items-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              <User className="h-5 w-5" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={redirectToAccountPage}
                        className={`${
                          active ? "bg-indigo-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <Settings className="w-5 h-5 mr-2" aria-hidden="true" />
                        Account Settings
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={logoutFn}
                        className={`${
                          active ? "bg-indigo-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <LogOut className="w-5 h-5 mr-2" aria-hidden="true" />
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <div className="hidden md:flex items-center space-x-4">
          <p className="text-lg">Welcome, guest!</p>
          <button
            onClick={redirectToLoginPage}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Login
          </button>
        </div>
      )}
    </div>
  </div>
</nav>

      {/* Hero Section */}

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden">
          <div className="fixed top-0 right-0 w-64 bg-white shadow-lg z-30">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 space-y-2">
              <a href="/" className="block text-lg text-gray-800 hover:text-indigo-600">Home</a>
              <a href="/contact" className="block text-lg text-gray-800 hover:text-indigo-600">Contact</a>
              <a href="/about" className="block text-lg text-gray-800 hover:text-indigo-600">About</a>
              {loading ? (
                <div className="mt-4">Loading...</div>
              ) : user ? (
                <div className="mt-4">
                  <button
                    onClick={redirectToAccountPage}
                    className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                  >
                    <Settings className="w-5 h-5 mr-2 inline" aria-hidden="true" />
                    Account Settings
                  </button>
                  <button
                    onClick={logoutFn}
                    className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 mt-2"
                  >
                    <LogOut className="w-5 h-5 mr-2 inline" aria-hidden="true" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="mt-4">
                  <button
                    onClick={redirectToLoginPage}
                    className="block w-full px-4 py-2 text-left text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <LogIn className="w-5 h-5 mr-2 inline" />
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default WelcomeMessage;
