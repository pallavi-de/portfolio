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
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-40 w-40 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-blue-600/10 blur-[80px] md:blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-40 w-40 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-purple-600/10 blur-[80px] md:blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 md:mb-20 text-center"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            My Skills
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 sm:w-28 md:w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-3 sm:gap-5 md:gap-8 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.03,
              }}
              viewport={{ once: true }}
              className="rounded-lg sm:rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-5 md:p-8 backdrop-blur-xl"
            >
              {/* Skill Name */}
              <h3 className="mb-2 sm:mb-4 text-center text-[10px] sm:text-xl md:text-3xl font-semibold text-white">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="h-1 sm:h-2 md:h-4 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"
                />
              </div>

              {/* Percentage */}
              <div className="mt-1 sm:mt-2 text-center text-[10px] sm:text-sm md:text-xl text-gray-400">
                {skill.percentage}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}