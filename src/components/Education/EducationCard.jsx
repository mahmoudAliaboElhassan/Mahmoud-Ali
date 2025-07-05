import { Calendar, Award } from "lucide-react";

export const EducationCard = ({ edu, index }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <edu.icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
        <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
        <div className="flex items-center space-x-1 text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{edu.period}</span>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>
        <div className="space-y-2">
          {edu.achievements.map((achievement, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-gray-700">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
