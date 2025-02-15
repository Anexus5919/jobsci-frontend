"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-6 py-3 flex justify-between items-center shadow-md border-b border-gray-300 h-16 fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="Jobsci Logo" 
          width={140} 
          height={70} 
          className="drop-shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6 text-gray-800 dark:text-gray-300 font-medium items-center">
        <Link href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition">Recruiters</Link>
        <Link href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition">Certificates</Link>
        <Link href="#" className="text-yellow-600 dark:text-yellow-400 font-semibold transition">★ Premium</Link>
      </nav>

      {/* Theme Toggle Button */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {theme === "dark" ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          )}
        </button>
      )}

      {/* Sign In Button */}
      <Link
        href="/login"
        className="px-4 py-1.5 rounded-md font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-500 shadow-md 
        hover:shadow-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1"
      >
        Sign In
      </Link>
    </header>
  );
};

export default Header;
