import { Github, ExternalLink } from "lucide-react";
export const ProjectCard = ({ project, index }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>Code</span>
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </div>
);
