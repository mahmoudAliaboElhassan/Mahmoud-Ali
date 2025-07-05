import { Github, ExternalLink } from "lucide-react";
import UseProjects from "../../hooks/use-projects";
import { ProjectCard } from "./ProjectCard";

function Projects() {
  const { projects } = UseProjects();
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills
            and passion for web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <a
            href="https://github.com/mahmoudAliaboElhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
