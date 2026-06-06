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
      className="relative overflow-hidden bg-[#090b12] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-bold text-white md:text-6xl">
            My Skills
          </h2>

          <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <h3 className="mb-8 text-center text-3xl font-semibold text-white">
                {skill.name}
              </h3>

              <div className="mb-4 h-4 overflow-hidden rounded-full bg-white/10">
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

              <div className="text-right text-2xl font-medium text-gray-400">
                {skill.percentage}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}