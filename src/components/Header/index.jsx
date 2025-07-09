import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NavItem } from "./NavItem";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const sections = [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "contact",
  ];

  const cvConfig = {
    googleDriveId: "1_gydfpWBb9NmYXQAvAhNlLGvhRSR-Asa",
    downloadFileName: "Mahmoud_Ali_Frontend_Developer_CV.pdf",
    fallbackUrl:
      "https://drive.google.com/file/d/1_gydfpWBb9NmYXQAvAhNlLGvhRSR-Asa/view",
  };

  const handleCVDownload = () => {
    try {
      let downloadUrl;
      if (cvConfig.filePath) {
        downloadUrl = cvConfig.filePath;
      } else if (cvConfig.googleDriveId) {
        downloadUrl = `https://drive.google.com/uc?export=download&id=${cvConfig.googleDriveId}`;
      } else if (cvConfig.externalUrl) {
        downloadUrl = cvConfig.externalUrl;
      } else {
        console.error("No CV download URL configured");
        return;
      }

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = cvConfig.downloadFileName;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (typeof gtag !== "undefined") {
        gtag("event", "download", {
          event_category: "CV",
          event_label: "Header Download Button",
        });
      }
    } catch (error) {
      console.error("Download failed:", error);
      const fallbackUrl = cvConfig.fallbackUrl || cvConfig.filePath;
      if (fallbackUrl) {
        window.open(fallbackUrl, "_blank", "noopener,noreferrer");
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if screen is between tablet and desktop (768px to 1024px)
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 12,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="home">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="font-bold text-xl text-gray-800 transition-all duration-300 hover:text-blue-600 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mahmoud Ali
            </motion.div>

            {/* Desktop Navigation - Hidden on medium screens */}
            <div className="hidden lg:flex items-center space-x-4">
              {sections.map((section, index) => (
                <motion.div
                  key={section}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <NavItem
                    isActive={activeSection === section}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </NavItem>
                </motion.div>
              ))}

              <motion.div
                custom={sections.length}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <motion.button
                  onClick={handleCVDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div variants={iconVariants}>
                    <Download className="w-4 h-4" />
                  </motion.div>
                  Download CV
                </motion.button>
              </motion.div>
            </div>

            {/* Medium Screen Navigation - Compact version */}
            <div className="hidden md:flex lg:hidden items-center space-x-2">
              {sections.map((section, index) => (
                <motion.div
                  key={section}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`px-2 py-1 text-sm rounded-md font-medium transition-all duration-300 ${
                      activeSection === section
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.div>
              ))}

              <motion.div
                custom={sections.length}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <motion.button
                  onClick={handleCVDownload}
                  className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div variants={iconVariants}>
                    <Download className="w-3 h-3" />
                  </motion.div>
                  CV
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6">
                <motion.div
                  animate={{
                    rotate: isMenuOpen ? 90 : 0,
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: isMenuOpen ? 0 : -90,
                    opacity: isMenuOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <X className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50">
                <div className="px-4 py-2 space-y-2">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={mobileItemVariants}
                    >
                      <motion.button
                        onClick={() => scrollToSection(section)}
                        className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
                        whileHover={{ x: 8, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </motion.button>
                    </motion.div>
                  ))}

                  <motion.div
                    custom={sections.length}
                    initial="hidden"
                    animate="visible"
                    variants={mobileItemVariants}
                  >
                    <motion.button
                      onClick={handleCVDownload}
                      className="flex items-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg mt-3"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <motion.div variants={iconVariants}>
                        <Download className="w-4 h-4" />
                      </motion.div>
                      Download CV
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </section>
  );
}

export default Header;
