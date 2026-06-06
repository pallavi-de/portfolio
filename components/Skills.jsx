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
      className="relative overflow-hidden bg-[#090b12] py-16 md:py-24"
    >
      {/* Background Glow (reduced for mobile) */}
      <div className="absolute left-1/4 top-1/4 h-52 w-52 md:h-96 md:w-96 rounded-full bg-blue-600/10 blur-[100px] md:blur-[150px]" />
      <div className="absolute right-1/4 bottom-1/4 h-52 w-52 md:h-96 md:w-96 rounded-full bg-purple-600/10 blur-[100px] md:blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            My Skills
          </h2>

          <div className="mx-auto mt-3 md:mt-4 h-1 w-24 md:w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8 backdrop-blur-xl"
            >
              <h3 className="mb-5 md:mb-8 text-center text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                {skill.name}
              </h3>

              <div className="mb-3 md:mb-4 h-3 md:h-4 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"
                />
              </div>

              <div className="text-right text-lg sm:text-xl md:text-2xl font-medium text-gray-400">
                {skill.percentage}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}