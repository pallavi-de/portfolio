"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const dots = Array.from({ length: 220 });

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090b12] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6 lg:px-12">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
          >
            Mern Stack Developer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 text-6xl font-bold leading-tight md:text-8xl"
          >
            Hi, I m <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Pallavi Desai
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-lg text-gray-400"
          >
            I craft exceptional digital experiences with code,
            creativity and a passion for innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex gap-4"
          >
            <button className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold transition hover:scale-105">
              View Projects →
            </button>

           <a
  href="https://wa.me/919876543210?text=Hello%20Pallavi,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
>
  Contact Me
</a>
          </motion.div>

          {/* Social Icons */}
          <div className="mt-12 flex gap-4">
            {["github", "linkedin", "mail"].map((item, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5 }}
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur"
              >
                {item === "github" && (
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-4a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-8 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77 5.44 5.44 0 0 0 2.5 8.39c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18v4" />
                  </svg>
                )}

                {item === "linkedin" && (
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )}

                {item === "twitter" && (
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 4s-.7 2-2 3c0 0-1 15-16 15-3 0-4-1-4-1s4 0 6-2c-3-1-4-3-4-5 1 0 2 0 2 0-3-2-3-5-2-7 3 3 6 4 9 4 0 0-1-4 2-6 3-2 6 1 6 1s1 0 3-1c0 0 0 2-2 3z" />
                  </svg>
                )}

                {item === "mail" && (
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Dot Pattern */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:block"
        >
          <div className="grid grid-cols-15 gap-4">
            {dots.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3 + (i % 5),
                  repeat: Infinity,
                }}
                className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">
          <div className="mt-2 h-3 w-3 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}