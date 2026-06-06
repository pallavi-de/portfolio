"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // optional icons

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto"
        >
          <nav className="flex items-center justify-between gap-6 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            
            {/* Logo */}
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-purple-500">Pallavi</span>
              <span className="text-white">Desai</span>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#experience" className="hover:text-white">Experience</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>

            {/* Resume Button (desktop) */}
            <a
              href="/Pal.pdf.pdf"
              className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition"
            >
              Resume
            </a>

            {/* Hamburger Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 10 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden mt-3 rounded-2xl bg-black/90 backdrop-blur-xl p-6 flex flex-col items-center gap-6 text-white"
              >
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

                <a
                  href="/Pal.pdf.pdf"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold"
                >
                  Resume
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}