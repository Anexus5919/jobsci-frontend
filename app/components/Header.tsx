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
    <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-8 z-50 
      bg-gradient-to-r from-gray-100/30 to-gray-200/40 dark:from-gray-900/60 dark:to-gray-800/80 
      backdrop-blur-xl border border-gray-300 dark:border-gray-700 
      rounded-b-[12px] shadow-xl transition-all duration-300">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Jobsci Logo"
          width={140}
          height={70}
          className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Center: Navigation */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10 text-gray-800 dark:text-gray-200 font-semibold text-lg">
        <Link href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition duration-300">
          Recruiters
        </Link>
        <Link href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition duration-300">
          Certificates
        </Link>
        <Link href="#" className="text-yellow-500 dark:text-yellow-400 font-bold transition">
          ★ Premium
        </Link>
      </nav>

      {/* Right: Theme Toggle & Sign In */}
      <div className="flex items-center space-x-5">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-300/60 dark:bg-gray-800/80 
            hover:bg-gray-400/80 dark:hover:bg-gray-700 transition shadow-md"
          >
            {theme === "dark" ? (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        )}

        <Link
          href="/login"
          className="px-6 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 
          shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 
          dark:from-purple-600 dark:to-indigo-500 dark:hover:from-purple-700 dark:hover:to-indigo-600"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
