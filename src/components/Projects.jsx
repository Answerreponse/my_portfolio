import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-950 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;