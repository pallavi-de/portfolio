"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#090b12] py-24 text-white"
    >
      {/* Background glow */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-pink-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold md:text-6xl">
            Experience
          </h2>

          <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
        >
          {/* Top Row */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold text-white">
                MERN Stack Developer
              </h3>

              <a
                href="https://qmipl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xl font-semibold text-purple-400 hover:text-pink-400"
              >
                Quantox Technologies Pvt. Ltd. ↗
              </a>
            </div>

            {/* Right Button */}
            <a
              href="https://qmipl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-center bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition"
            >
              Visit Company
            </a>
          </div>

          {/* Description */}
          <div className="mt-8 space-y-4 text-gray-300">
            <p>
              • Developed responsive web applications using
              MongoDB, Express.js, React.js, and Node.js.
            </p>

            <p>
              • Built scalable REST APIs and integrated
              third-party services for enterprise applications.
            </p>

            <p>
              • Collaborated with designers and backend teams
              to deliver high-performance user experiences.
            </p>

            <p>
              • Optimized application performance, security,
              and database operations.
            </p>

            <p>
              • Participated in full software development
              lifecycle including development, testing,
              deployment, and maintenance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}