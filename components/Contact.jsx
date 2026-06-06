"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090b12] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[180px]" />
      <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-pink-600/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-bold md:text-7xl">
            Get In Touch
          </h2>

          <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <h3 className="mb-10 text-4xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                  <svg
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <h4 className="text-2xl font-semibold">
                    pallavidesai2222@gmail.com
                  </h4>
                </div>
              </div>

              {/* Linkedin */}
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                  <svg
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>

                <div>
                  <p className="text-gray-400">LinkedIn</p>
                  <h4 className="text-xl font-semibold">
                   Pallavi Desai
                  </h4>
                </div>
              </div>

              {/* Github */}
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                  <svg
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-4a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-8 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77 5.44 5.44 0 0 0 2.5 8.39c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18v4" />
                  </svg>
                </div>

                <div>
                  <p className="text-gray-400">GitHub</p>
                  <h4 className="text-xl font-semibold">
                  PallaviDesai22
                  </h4>
                </div>
              </div>
            </div>

            <div className="my-10 h-px bg-white/10" />

            {/* Status */}
            <div>
              <h4 className="mb-6 text-3xl font-bold">
                Current Status
              </h4>

              <div className="flex items-center gap-4">
                <div className="h-4 w-4 rounded-full bg-green-500" />

                <span className="text-xl text-gray-300">
                  Available for freelance work and full-time opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <h3 className="mb-10 text-4xl font-bold">
              Send Me a Message
            </h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="h-16 w-full rounded-xl border border-white/10 bg-transparent px-5 outline-none transition focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="h-16 w-full rounded-xl border border-white/10 bg-transparent px-5 outline-none transition focus:border-purple-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="h-16 w-full rounded-xl border border-white/10 bg-transparent px-5 outline-none transition focus:border-purple-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-transparent p-5 outline-none transition focus:border-purple-500"
              />

              <button
                type="submit"
                className="group flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-lg font-semibold transition hover:scale-[1.02]"
              >
                Send Message

                <svg
                  className="h-5 w-5 transition group-hover:translate-x-1"
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