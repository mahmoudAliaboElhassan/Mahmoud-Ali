import { Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedFacts, setAnimatedFacts] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger the facts animation
          setTimeout(() => setAnimatedFacts([0]), 200);
          setTimeout(() => setAnimatedFacts([0, 1]), 400);
          setTimeout(() => setAnimatedFacts([0, 1, 2]), 600);
          setTimeout(() => setAnimatedFacts([0, 1, 2, 3]), 800);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-20 h-1 bg-blue-600 mx-auto mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Passionate Frontend Developer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a computer science student, I've developed a deep understanding
              of programming fundamentals and modern web technologies. My
              academic journey has exposed me to algorithms, data structures,
              software development principles, and database management.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I specialize in creating responsive, user-friendly web
              applications using React.js and Next.js. My goal is to bridge the
              gap between design and functionality, creating digital experiences
              that are both beautiful and performant.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Star, text: "Clean Code", delay: "delay-500" },
                { icon: Star, text: "Responsive Design", delay: "delay-700" },
                { icon: Star, text: "Modern Technologies", delay: "delay-900" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 transition-all duration-700 hover:scale-105 ${
                    item.delay
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <item.icon className="w-5 h-5 text-yellow-500 fill-current animate-pulse" />
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-50 animate-bounce"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-ping"></div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  {[
                    { label: "Location:", value: "Egypt" },
                    { label: "Education:", value: "Computer Science Graduate" },
                    { label: "Focus:", value: "Frontend Development" },
                    { label: "Languages:", value: "Arabic, English" },
                  ].map((fact, index) => (
                    <div
                      key={index}
                      className={`flex justify-between transition-all duration-500 hover:translate-x-2 ${
                        animatedFacts.includes(index)
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3"
                      }`}
                    >
                      <span>{fact.label}</span>
                      <span
                        className={
                          fact.label === "Education:" ? "text-right" : ""
                        }
                      >
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
