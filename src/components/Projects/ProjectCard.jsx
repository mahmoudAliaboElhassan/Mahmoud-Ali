import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      rotateY: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const overlayVariants = {
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const techVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const linkVariants = {
    hover: {
      color: "#2563eb",
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          variants={imageVariants}
          whileHover="hover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
          variants={overlayVariants}
          whileHover="hover"
        />
      </div>

      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-gray-800 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-gray-600 mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              variants={techVariants}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#dbeafe",
                transition: { duration: 0.2 },
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            variants={linkVariants}
            whileHover="hover"
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            variants={linkVariants}
            whileHover="hover"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Demo</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};
