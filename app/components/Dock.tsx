"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, Clock, Buildings } from "@phosphor-icons/react";

const menuItems = [
  { name: "About", icon: BookOpen },
  { name: "Internship", icon: Briefcase },
  { name: "Part-Time", icon: Clock },
  { name: "Full-Time", icon: Buildings },
];

const Dock = () => {
  const [active, setActive] = useState("about"); // Default to "About"
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 px-8 py-3 
      bg-white/40 dark:bg-gradient-to-r from-gray-950/70 to-gray-800/50 
      dark:bg-opacity-60 backdrop-blur-md dark:backdrop-blur-xl shadow-lg 
      rounded-xl flex items-center space-x-8 
      border border-gray-300 dark:border-gray-700/80 
      dark:shadow-[0_4px_20px_rgba(0,255,255,0.2)] z-50">
      
      <nav 
        className="flex space-x-8 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActive("about"); // Reset to "About" when not hovering
        }}
      >
        {menuItems.map((item, index) => {
          const isActive = active === item.name.toLowerCase();
          const IconComponent = item.icon;

          return (
            <Link
              key={index}
              href={`/${item.name.toLowerCase()}`}
              className="group relative flex flex-col items-center 
                text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 
                transition font-medium"
              onMouseEnter={() => setActive(item.name.toLowerCase())} // Change active item on hover
            >
              {/* Animated Icon */}
              <motion.span
                className={`transition-transform ${
                  isActive ? "text-teal-500 dark:text-teal-400" : "group-hover:text-teal-500 dark:group-hover:text-teal-400"
                }`}
                animate={{ y: isActive ? [-2, 2, -2] : 0, scale: isActive ? 1.2 : 1 }}
                transition={{ repeat: isActive ? Infinity : 0, duration: 0.6 }}
              >
                <IconComponent size={28} weight="duotone" />
              </motion.span>

              {/* Text Label */}
              <span className={`text-xs mt-1 ${isActive ? "font-semibold text-teal-500 dark:text-teal-400" : "opacity-80"}`}>
                {item.name}
              </span>

              {/* Underline Animation */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 dark:bg-teal-400 transition-all shadow-md ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Dock;
