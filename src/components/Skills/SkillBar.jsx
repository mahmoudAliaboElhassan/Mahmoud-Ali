export const SkillBar = ({ skill, delay }) => (
  <div className="mb-6 group" style={{ animationDelay: `${delay}ms` }}>
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center space-x-2">
        <skill.icon className="w-5 h-5 text-blue-600" />
        <span className="font-medium text-gray-700">{skill.name}</span>
      </div>
      <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);
