import { motion } from "framer-motion";

export const SkillBar = ({ skill, index }) => {
  const containerVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        delay: index * 0.1 + 0.2,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${skill.level}%`,
      transition: {
        duration: 1.2,
        delay: index * 0.1 + 0.3,
        ease: "easeOut",
      },
    },
  };

  const percentageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.8,
      },
    },
  };

  return (
    <motion.div
      className="mb-6 group"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <motion.div
            variants={iconVariants}
            whileHover={{
              rotate: 360,
              transition: { duration: 0.5 },
            }}
          >
            <skill.icon className="w-5 h-5 text-blue-600" />
          </motion.div>
          <motion.span
            className="font-medium text-gray-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
          >
            {skill.name}
          </motion.span>
        </div>
        <motion.span
          className="text-sm font-bold text-gray-600"
          variants={percentageVariants}
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${skill.color} rounded-full relative`}
          variants={progressVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{
              x: "100%",
              transition: {
                duration: 2,
                delay: index * 0.1 + 1,
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
