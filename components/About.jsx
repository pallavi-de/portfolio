"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#090b12] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold md:text-6xl">
            About <span className="text-white">Me</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src="/pal.jpg.jpeg"
                alt="Profile"
                width={700}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <p className="mb-8 text-lg leading-9 text-gray-300">
              I m a passionate software engineer with experience building
              modern web applications and digital products. I specialize in
              frontend development using React and Next.js while also working
              extensively on backend systems and cloud infrastructure.
            </p>

            <p className="mb-8 text-lg leading-9 text-gray-300">
              My journey in technology began with a deep curiosity about how
              software works. Since then, I ve built scalable applications,
              collaborated with teams, and delivered high-performance digital
              solutions across multiple industries.
            </p>

            <p className="mb-10 text-lg leading-9 text-gray-300">
              Beyond coding, I enjoy exploring emerging technologies,
              contributing to open-source projects, and continuously learning
              new skills to stay ahead in the ever-changing tech landscape.
            </p>

            {/* Details Grid */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-gray-500">Name</p>
                <h4 className="text-xl font-semibold">Your Name</h4>
              </div>

              <div>
                <p className="mb-2 text-gray-500">Email</p>
                <h4 className="text-xl font-semibold">
                  pallavidesai2222@gmail.com
                </h4>
              </div>

              <div>
                <p className="mb-2 text-gray-500">Location</p>
                <h4 className="text-xl font-semibold">
                  Pune, Maharashtra, India
                </h4>
              </div>

              <div>
                <p className="mb-2 text-gray-500">Availability</p>
                <h4 className="text-xl font-semibold text-green-400">
                  Open to Opportunities
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}