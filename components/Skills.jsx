"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 95 },
  { name: "Next.js", percentage: 90 },
  { name: "Node.js", percentage: 80 },
  { name: "MongoDB", percentage: 80 },
  { name: "Git", percentage: 85 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#090b12] py-12 sm:py-16 md:py-24"
    >
      {/* Softer background glow for mobile */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-40 w-40 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-blue-600/10 blur-[80px] md:blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-40 w-40 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-purple-600/10 blur-[80px] md:blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 sm:mb-14 md:mb-20 text-center"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            My Skills
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 sm:w-28 md:w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
              }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{
                y: 0, // disable lift on mobile-like devices
                scale: 1.01,
              }}
              className="rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 md:p-8 backdrop-blur-xl"
            >
              <h3 className="mb-4 sm:mb-6 text-center text-lg sm:text-2xl md:text-3xl font-semibold text-white">
                {skill.name}
              </h3>

              <div className="mb-2 sm:mb-3 h-2.5 sm:h-3 md:h-4 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"
                />
              </div>

              <div className="text-right text-sm sm:text-lg md:text-xl font-medium text-gray-400">
                {skill.percentage}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}