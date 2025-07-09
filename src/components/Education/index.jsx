import { useEffect, useRef, useState } from "react";
import UseEducation from "../../hooks/use-education";
import { EducationCard } from "./EducationCard";

export default function Education() {
  const { education, certificates, communityEngagement, allEducation } =
    UseEducation();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger card animations
          allEducation.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [allEducation]);

  const getFilteredEducation = () => {
    switch (activeTab) {
      case "education":
        return education;
      case "certificates":
        return certificates;
      case "community":
        return communityEngagement;
      default:
        return allEducation;
    }
  };

  const filteredEducation = getFilteredEducation();

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20 bg-gray-50 overflow-hidden"
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
            Education & Certifications
          </h2>
          <div
            className={`w-20 h-1 bg-blue-600 mx-auto mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`text-gray-600 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            My educational journey, professional certifications, and continuous
            learning achievements in computer science and web development.
          </p>

          {/* Filter Tabs */}
          <div
            className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            {[
              { key: "all", label: "All", count: allEducation.length },
              { key: "education", label: "Education", count: education.length },
              {
                key: "certificates",
                label: "Certificates",
                count: certificates.length,
              },
              {
                key: "community",
                label: "Community",
                count: communityEngagement.length,
              },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {filteredEducation.map((edu, index) => (
            <EducationCard
              key={`${activeTab}-${index}`}
              edu={edu}
              index={index}
              isVisible={visibleCards.includes(index)}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {education.length}
            </div>
            <div className="text-gray-600">Academic Degrees</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {certificates.length}
            </div>
            <div className="text-gray-600">Professional Certificates</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {communityEngagement.length}
            </div>
            <div className="text-gray-600">Community Contributions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
