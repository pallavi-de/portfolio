const projects = [
  {
    title: "Farm Fresh",
    description: "Online platform connecting farmers and customers."
  },
  {
    title: "Blinkit Clone",
    description: "Quick commerce grocery delivery application."
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}