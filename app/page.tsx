'use cleint';

import Header from "./components/Header";
import Dock from "./components/Dock";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Navbar */}
      <Header />

      {/* Hero Section - Left Aligned */}
      <Hero />

      {/* Bottom Navigation with Sliding Underline & Box Shadow */}

      <Dock />

    </div>
  );
}




