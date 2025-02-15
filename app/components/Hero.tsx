"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import animationData from "@/public/animations/your-animation.json"; // Ensure the correct path

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Hero = () => (
  <main className="relative flex-1 flex flex-col justify-center px-24 
    bg-gradient-to-br  from-blue-100 via-gray-50 to-teal-200 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900 
    text-gray-900 dark:text-gray-100 overflow-hidden">
    
    {/* Animated Background Particles */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-32 left-10 w-56 h-56 bg-gradient-to-r from-blue-400 to-teal-300 opacity-30 rounded-full filter blur-3xl dark:opacity-15 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-yellow-300 to-pink-400 opacity-25 rounded-full filter blur-3xl dark:opacity-10 animate-pulse"></div>
    </div>

    <div className="relative z-10 flex items-center justify-between">
      {/* Left Side - Text & CTA */}
      <motion.div 
        className="w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-extrabold leading-tight text-gray-800 dark:text-gray-100">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Find Your Perfect Internship
          </span>{" "}
          with Ease!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md">
          Connect with top companies and land your dream job effortlessly.
        </p>
        <Link
          href="/register"
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white w-40 py-3 rounded-xl font-semibold text-lg shadow-lg 
          hover:scale-110 hover:shadow-2xl transition-all duration-300 flex justify-center items-center"
        >
          Get Started 🚀
        </Link>
      </motion.div>

      {/* Right Side - Lottie Animation */}
      <motion.div 
        className="w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-6 bg-gradient-to-br from-white/40 to-teal-400/30 backdrop-blur-xl border border-gray-300 dark:border-gray-700 rounded-2xl shadow-2xl">
          <Lottie animationData={animationData} loop={true} className="w-full max-w-[500px] h-auto drop-shadow-md" />
        </div>
      </motion.div>
    </div>
  </main>
);

export default Hero;
