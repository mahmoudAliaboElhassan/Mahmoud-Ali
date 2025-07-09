import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import mahmoudImg from "../assets/Mahmoud Ali.png";

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated image container */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.img
            src={mahmoudImg}
            alt="Mahmoud Ali"
            className="w-40 h-40 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white"
            initial={{
              scale: 0,
              opacity: 0,
              rotate: -180,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              rotate: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              },
            }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>

        {/* Animated title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Mahmoud Ali
        </motion.h1>

        {/* Animated subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Frontend Developer specializing in React.js & Next.js
        </motion.p>

        {/* Academic achievement */}
        <motion.div
          className="mb-8 bg-white/60 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto shadow-lg"
          variants={itemVariants}
        >
          <p className="text-lg text-gray-700 font-medium">
            Graduate • Computer & Information Science
          </p>
          <p className="text-blue-600 font-semibold text-lg">GPA: 3.42</p>
        </motion.div>

        {/* Animated description */}
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          A passionate frontend developer with a strong academic foundation in
          computer science. I transform ideas into dynamic, user-centered web
          applications using modern technologies and industry best practices. My
          expertise lies in crafting responsive, performant, and visually
          compelling digital experiences.
        </motion.p>

        {/* Animated buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.5,
            duration: 0.5,
          },
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
