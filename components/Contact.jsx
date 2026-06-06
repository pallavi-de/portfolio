"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090b12] py-10 sm:py-14 md:py-16 text-white"
    >
      {/* Background Glow (smaller) */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 rounded-full bg-purple-600/10 blur-[100px]" />
      <div className="absolute right-0 bottom-0 h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 rounded-full bg-pink-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 md:p-6 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-xl sm:text-2xl md:text-3xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-4 sm:space-y-5">

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white/5 flex-shrink-0">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>
                </div>

                <div>
                  <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                  <h4 className="text-sm sm:text-lg font-semibold break-words">
                    pallavidesai2222@gmail.com
                  </h4>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white/5 flex-shrink-0">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>

                <div>
                  <p className="text-gray-400 text-xs sm:text-sm">LinkedIn</p>
                  <h4 className="text-sm sm:text-lg font-semibold">
                    Pallavi Desai
                  </h4>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white/5 flex-shrink-0">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-4a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-8 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77 5.44 5.44 0 0 0 2.5 8.39c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18v4" />
                  </svg>
                </div>

                <div>
                  <p className="text-gray-400 text-xs sm:text-sm">GitHub</p>
                  <h4 className="text-sm sm:text-lg font-semibold">
                    PallaviDesai22
                  </h4>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <h4 className="mb-2 text-lg sm:text-xl font-bold">
                Status
              </h4>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                <span className="text-xs sm:text-sm text-gray-300">
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 md:p-6 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-xl sm:text-2xl md:text-3xl font-bold">
              Send Message
            </h3>

            <form className="space-y-3 sm:space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="h-10 sm:h-12 w-full rounded-xl border border-white/10 bg-transparent px-4 text-sm outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="h-10 sm:h-12 w-full rounded-xl border border-white/10 bg-transparent px-4 text-sm outline-none focus:border-purple-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="h-10 sm:h-12 w-full rounded-xl border border-white/10 bg-transparent px-4 text-sm outline-none focus:border-purple-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-transparent p-4 text-sm outline-none focus:border-purple-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 py-3 text-sm sm:text-base font-semibold transition hover:scale-[1.02]"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}