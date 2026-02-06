import React from "react";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-600">
            A snapshot of the products and experiments I&apos;ve built recently.
            Each one highlights a specific focus area—frontend polish, data
            workflows, or full-stack integration.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-slate-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg transition flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              {project.highlights?.length > 0 && (
                <ul className="text-sm text-slate-600 space-y-2 mb-4 list-disc list-inside">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 border border-slate-200 rounded-full text-xs bg-slate-50 text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4 text-sm font-medium">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
