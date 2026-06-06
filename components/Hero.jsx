"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const dots = Array.from({ length: 220 });

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090b12] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-pink-500/20 blur-[120px]" />
      </div>

      {/* MAIN WRAPPER */}
      <div className="
        relative z-10 mx-auto max-w-7xl flex flex-col lg:flex-row 
        items-center lg:items-center lg:justify-between
        justify-start
        min-h-screen
        px-6 lg:px-12
        pt-20 sm:pt-24 lg:pt-0
        text-center lg:text-left
      ">

        {/* Left Content */}
        <div className="max-w-2xl">

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs md:text-sm"
          >
            Mern Stack Developer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight"
          >
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Pallavi Desai
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 sm:mt-5 md:mt-6 max-w-xl text-sm md:text-lg text-gray-400 mx-auto lg:mx-0"
          >
            I craft exceptional digital experiences with code,
            creativity and a passion for innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold hover:scale-105 transition">
              View Projects →
            </button>

            <a
              href="https://wa.me/919657263601?text=Hi%20Pallavi,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur hover:bg-white/20 transition"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <div className="mt-8 sm:mt-10 flex justify-center lg:justify-start gap-4">
            {["github", "linkedin", "mail"].map((item, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5 }}
                href="#"
                className="flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur"
              />
            ))}
          </div>
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

      {/* Scroll Indicator (reduce visual weight on mobile) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 sm:h-12 sm:w-7 justify-center rounded-full border border-white/20">
          <div className="mt-2 h-2 w-2 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}