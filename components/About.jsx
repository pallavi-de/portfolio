"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#090b12] py-10 sm:py-14 md:py-16 text-white"
    >
      {/* Background Glow (smaller) */}
      <div className="absolute left-10 top-10 h-40 w-40 sm:h-60 sm:w-60 rounded-full bg-purple-600/20 blur-[90px]" />
      <div className="absolute right-10 bottom-10 h-40 w-40 sm:h-60 sm:w-60 rounded-full bg-pink-500/20 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Heading (compact) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 text-center"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            About <span className="text-white">Me</span>
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        {/* Cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">

              <div className="relative h-[260px] sm:h-[340px] md:h-full w-full">
                <Image
                  src="/pal.jpg.jpeg"
                  alt="Profile"
                  width={700}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 md:p-7 backdrop-blur-xl"
          >
            <div>

              <p className="mb-4 text-sm sm:text-base leading-6 sm:leading-7 text-gray-300">
                I am a passionate software engineer building modern web apps using React and Next.js.
              </p>

              <p className="mb-4 text-sm sm:text-base leading-6 sm:leading-7 text-gray-300">
                I specialize in frontend development and backend systems, focusing on scalable solutions.
              </p>

              <p className="mb-6 text-sm sm:text-base leading-6 sm:leading-7 text-gray-300">
                I enjoy learning new technologies and contributing to real-world projects.
              </p>

              {/* Details */}
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Name</p>
                  <h4 className="text-base sm:text-lg font-semibold">Pallavi Desai</h4>
                </div>

                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Email</p>
                  <h4 className="text-base sm:text-lg font-semibold break-words">
                    pallavidesai2222@gmail.com
                  </h4>
                </div>

                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Location</p>
                  <h4 className="text-base sm:text-lg font-semibold">
                    Pune, Maharashtra
                  </h4>
                </div>

                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Status</p>
                  <h4 className="text-base sm:text-lg font-semibold text-green-400">
                    Open to Work
                  </h4>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6">
              <a
                href="https://drive.google.com/uc?export=download&id=1vrHIGbUEH9ip1CZy3ebEWYwYO-hLA6Uv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 px-5 sm:px-7 py-3 font-semibold transition hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}