"use client";
import { useState } from "react";
import Link from "next/link";

const Dock = () => {
  const [active, setActive] = useState("about"); // Default active link

  const menuItems = ["About", "Internship", "Part-Time", "Full-Time"];

  return (
    <span className="bg-gray-200 w-fit px-8 py-3 flex justify-center space-x-10 text-gray-600 border-t shadow-md rounded-2xl fixed bottom-5 left-1/2 transform -translate-x-1/2">
      <nav
        className="flex space-x-10 relative"
        onMouseLeave={() => setActive("about")} // Reset to "About" when mouse leaves
      >
        {menuItems.map((item, index) => {
          const isActive = active === item.toLowerCase(); // Check if the link is active
          return (
            <Link
              key={index}
              href={`/${item.toLowerCase()}`}
              className="group relative inline-block text-gray-600 hover:text-gray-900 transition font-medium"
              onMouseEnter={() => setActive(item.toLowerCase())} // Change active on hover
            >
              {item}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-teal-500 shadow-md transition-transform origin-left ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          );
        })}
      </nav>
    </span>
  );
};

export default Dock;
