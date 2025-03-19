"use client";

import { useState, useEffect } from "react";
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
  const [active, setActive] = useState("about");
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;
      const index = Math.min(
        Math.floor(scrollPosition / sectionHeight),
        menuItems.length - 1
      );

      setScrollIndex(index);
      setActive(menuItems[index].name.toLowerCase());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-white/40 dark:bg-gray-900/50 backdrop-blur-md shadow-lg rounded-xl flex items-center space-x-8 border border-gray-300 dark:border-gray-700 z-50">
      
      <nav className="flex space-x-8 relative" onMouseLeave={() => setActive("about")}>
        {menuItems.map((item, index) => {
          const isActive = active === item.name.toLowerCase();
          const IconComponent = item.icon;

          return (
            <motion.div
              key={index}
              animate={{ x: scrollIndex * -50 }} // Scroll-based swipe effect
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Link
                href={`/${item.name.toLowerCase()}`}
                className="group relative flex flex-col items-center text-gray-700 dark:text-gray-300 
                hover:text-teal-500 transition font-medium"
                onMouseEnter={() => setActive(item.name.toLowerCase())}
              >
                <motion.span
                  className={`transition-transform ${
                    isActive ? "text-teal-500" : "group-hover:text-teal-500"
                  }`}
                  animate={{ y: isActive ? [-2, 2, -2] : 0 }}
                  transition={{ repeat: isActive ? Infinity : 0, duration: 0.6, ease: "easeInOut" }}
                >
                  <IconComponent size={28} weight="duotone" />
                </motion.span>

                <span className="text-xs mt-1 transition-all">{item.name}</span>

                {isActive && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 shadow-md"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ></motion.span>
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </div>
  );
};

export default Dock;
