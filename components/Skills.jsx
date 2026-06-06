const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Flutter",
  "PHP",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white p-4 rounded-lg shadow text-center font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}