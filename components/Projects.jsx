export default function Projects() {
  const projects = [
    {
      title: "Farm Fresh",
      desc: "Farmer to customer marketplace",
    },
    {
      title: "Blinkit Clone",
      desc: "Quick commerce application",
    },
    {
      title: "Portfolio Website",
      desc: "Personal branding platform",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}