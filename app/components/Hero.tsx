"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import animationData from "@/public/animations/your-animation.json"; // Ensure the correct path

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Hero = () => (
  <main className="relative flex-1 flex flex-col justify-center px-24 bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
    {/* Subtle Background Elements */}
    <div className="absolute inset-0">
      {/* Soft Blurred Overlays for Depth */}
      <div className="absolute inset-0 bg-white opacity-70 dark:bg-gray-900 dark:opacity-50"></div>

      {/* Faint Abstract Shapes for Modern Touch */}
      <div className="absolute top-32 left-10 w-48 h-48 bg-gradient-to-r from-blue-300 to-teal-300 opacity-20 rounded-full filter blur-3xl dark:bg-gradient-to-r dark:from-blue-500 dark:to-teal-500 dark:opacity-15"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-yellow-300 to-pink-400 opacity-15 rounded-full filter blur-3xl dark:bg-gradient-to-r dark:from-yellow-400 dark:to-pink-500 dark:opacity-15"></div>
    </div>

    <div className="relative z-10 flex items-center justify-between">
      {/* Left Side - Text & Button */}
      <div className="w-1/2 space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-800 dark:text-gray-100">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
            Swipe Right
          </span>{" "}
          on Your Dream Internship!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
          Discover top internships and career opportunities tailored just for you.
        </p>
        <Link
          href="/register"
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white w-36 py-3 rounded-lg font-semibold text-lg shadow-md 
          hover:scale-105 hover:shadow-lg transition-all duration-300 flex justify-center items-center"
        >
          Register 🚀
        </Link>
      </div>

      {/* Right Side - Lottie Animation */}
      <div className="w-1/2 flex justify-center">
        <div className="p-6 bg-gradient-to-r from-white/20 to-cyan-400/30 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl">
          {/* Glassmorphism Effect with White and Cyan Gradient */}
          <Lottie animationData={animationData} loop={true} className="w-full max-w-[500px] h-auto drop-shadow-md" />
        </div>
      </div>
    </div>
  </main>
);

export default Hero;
