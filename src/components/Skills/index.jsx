import React from "react";
import { SkillBar } from "./SkillBar";
import UseSkills from "../../hooks/use-skills";

function Skills() {
  const { skills } = UseSkills();
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing
            web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
