import { Award, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export const EducationCard = ({ edu, index, isVisible }) => {
  const [achievementsVisible, setAchievementsVisible] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Animate achievements with stagger
      edu.achievements.forEach((_, i) => {
        setTimeout(() => {
          setAchievementsVisible((prev) => [...prev, i]);
        }, 600 + i * 150);
      });
    }
  }, [isVisible, edu.achievements]);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group ${
        isVisible
          ? "opacity-100 translate-x-0"
          : index % 2 === 0
          ? "opacity-0 -translate-x-10"
          : "opacity-0 translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Floating decoration */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-blue-100 rounded-full opacity-20 transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>

      <div className="flex items-start space-x-4 relative z-10">
        <div
          className={`w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isHovered ? "bg-blue-200 scale-110 rotate-3" : ""
          }`}
        >
          <edu.icon
            className={`w-6 h-6 text-blue-600 transition-all duration-300 ${
              isHovered ? "text-blue-700" : ""
            }`}
          />
        </div>

        <div className="flex-1">
          <h3
            className={`text-xl font-bold text-gray-800 mb-2 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: `${index * 100 + 200}ms` }}
          >
            {edu.degree}
          </h3>

          <p
            className={`text-blue-600 font-medium mb-1 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: `${index * 100 + 300}ms` }}
          >
            {edu.institution}
          </p>

          <div
            className={`flex items-center space-x-1 text-gray-500 mb-3 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: `${index * 100 + 400}ms` }}
          >
            <Calendar
              className={`w-4 h-4 transition-transform duration-300 ${
                isHovered ? "rotate-12" : ""
              }`}
            />
            <span className="text-sm">{edu.period}</span>
          </div>

          <p
            className={`text-gray-600 mb-4 leading-relaxed transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: `${index * 100 + 500}ms` }}
          >
            {edu.description}
          </p>

          <div className="space-y-2">
            {edu.achievements.map((achievement, i) => (
              <div
                key={i}
                className={`flex items-center space-x-2 transition-all duration-500 hover:translate-x-2 ${
                  achievementsVisible.includes(i)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <Award
                  className={`w-4 h-4 text-yellow-500 transition-all duration-300 ${
                    achievementsVisible.includes(i) ? "animate-pulse" : ""
                  }`}
                />
                <span className="text-sm text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ${
          isVisible ? "w-full" : "w-0"
        }`}
        style={{ transitionDelay: `${index * 100 + 800}ms` }}
      ></div>
    </div>
  );
};
