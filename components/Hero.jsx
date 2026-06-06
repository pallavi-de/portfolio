"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const dots = Array.from({ length: 220 });

  return (
    <section className="relative overflow-hidden bg-[#090b12] text-white">

      {/* Background Glow (smaller on mobile) */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-pink-500/20 blur-[100px]" />
      </div>

      {/* MAIN WRAPPER */}
      <div className="
        relative z-10 mx-auto max-w-7xl flex flex-col lg:flex-row
        items-center lg:items-center lg:justify-between
        justify-start
        min-h-[85vh] sm:min-h-screen
        px-6 lg:px-12
        pt-14 sm:pt-20 lg:pt-0
        pb-10 sm:pb-0
        text-center lg:text-left
      ">

        {/* Left Content */}
        <div className="max-w-2xl">

          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] sm:text-sm"
          >
            Mern Stack Developer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 sm:mt-5 text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight"
          >
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Pallavi Desai
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 sm:mt-5 max-w-xl text-sm sm:text-lg text-gray-400 mx-auto lg:mx-0"
          >
            I craft exceptional digital experiences with code,
            creativity and a passion for innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 sm:px-6 sm:py-3 font-semibold hover:scale-105 transition">
              View Projects →
            </button>

            <a
              href="https://wa.me/919657263601?text=Hi%20Pallavi,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 sm:px-6 sm:py-3 font-semibold backdrop-blur hover:bg-white/20 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Dot Pattern (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block mt-10 lg:mt-0"
        >
          <div className="grid grid-cols-10 lg:grid-cols-15 gap-3 lg:gap-4">
            {dots.map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + (i % 5),
                  repeat: Infinity,
                }}
                className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator (smaller + less intrusive) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-8 w-5 sm:h-10 sm:w-6 justify-center rounded-full border border-white/20">
          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </motion.div>

    </section>
  );
}