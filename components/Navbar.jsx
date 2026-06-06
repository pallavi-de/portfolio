"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  // 🔥 Show navbar only after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
        >
          <nav className="flex items-center gap-8 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            
            {/* Logo */}
            <div className="text-3xl font-bold">
              <span className="text-purple-500">Pallavi</span>
              <span className="text-white">Desai</span>
            </div>

            {/* Links */}
            <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-white transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#experience" className="hover:text-white transition">
                  Experience
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>

            {/* Resume Button */}
            <a
              href="/Pal.pdf.pdf"
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition"
            >
              Resume
            </a>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}