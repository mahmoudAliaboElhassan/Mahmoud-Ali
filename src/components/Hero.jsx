import { ChevronDown } from "lucide-react";
import mahmoudImg from "../assets/Mahmoud Ali.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src={mahmoudImg}
            alt="Mahmoud Ali"
            className="w-40 h-40 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          Mahmoud Ali
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          FrontEnd Developer specializing in React.js & Next.js
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          I am a Student at The Faculty of Computer and Information Science with
          a passion for creating engaging and visually appealing web
          experiences. My journey in programming has given me a strong
          foundation in modern web technologies and best practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}

export default Hero;
