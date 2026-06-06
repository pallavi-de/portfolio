"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090b12] py-16 sm:py-20 md:py-24 text-white"
    >
      {/* Background Glow (reduced on mobile) */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-60 w-60 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-purple-600/10 blur-[120px] md:blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-60 w-60 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-pink-600/10 blur-[120px] md:blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold">
            Get In Touch
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 sm:w-28 md:w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8 backdrop-blur-xl"
          >
            <h3 className="mb-8 text-2xl sm:text-3xl md:text-4xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-6 sm:space-y-8">

              {/* Email */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/5 flex-shrink-0">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-gray-400 text-sm sm:text-base">Email</p>
                  <h4 className="text-base sm:text-xl md:text-2xl font-semibold break-words">
                    pallavidesai2222@gmail.com
                  </h4>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/5 flex-shrink-0">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>

                <div>
                  <p className="text-gray-400 text-sm sm:text-base">LinkedIn</p>
                  <h4 className="text-base sm:text-xl font-semibold">
                    Pallavi Desai
                  </h4>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/5 flex-shrink-0">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-4a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-8 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77 5.44 5.44 0 0 0 2.5 8.39c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18v4" />
                  </svg>
                </div>

                <div>
                  <p className="text-gray-400 text-sm sm:text-base">GitHub</p>
                  <h4 className="text-base sm:text-xl font-semibold">
                    PallaviDesai22
                  </h4>
                </div>
              </div>
            </div>

            <div className="my-8 h-px bg-white/10" />

            {/* Status */}
            <div>
              <h4 className="mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
                Current Status
              </h4>

              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-500 mt-1 sm:mt-0" />

                <span className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  Available for freelance work and full-time opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8 backdrop-blur-xl"
          >
            <h3 className="mb-8 text-2xl sm:text-3xl md:text-4xl font-bold">
              Send Me a Message
            </h3>

            <form className="space-y-4 sm:space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="h-12 sm:h-14 md:h-16 w-full rounded-xl border border-white/10 bg-transparent px-4 sm:px-5 text-sm sm:text-base outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="h-12 sm:h-14 md:h-16 w-full rounded-xl border border-white/10 bg-transparent px-4 sm:px-5 text-sm sm:text-base outline-none focus:border-purple-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="h-12 sm:h-14 md:h-16 w-full rounded-xl border border-white/10 bg-transparent px-4 sm:px-5 text-sm sm:text-base outline-none focus:border-purple-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-transparent p-4 sm:p-5 text-sm sm:text-base outline-none focus:border-purple-500"
              />

              <button
                type="submit"
                className="group flex h-12 sm:h-14 md:h-16 w-full items-center justify-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-base sm:text-lg font-semibold transition hover:scale-[1.02]"
              >
                Send Message

                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 transition group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}