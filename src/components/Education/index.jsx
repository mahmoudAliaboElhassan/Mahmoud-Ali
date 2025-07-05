import UseEducation from "../../hooks/use-education";
import { EducationCard } from "./EducationCard";
function Education() {
  const { education } = UseEducation();
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            My educational journey and continuous learning path in computer
            science and web development.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
