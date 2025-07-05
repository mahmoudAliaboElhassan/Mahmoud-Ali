import { Github, Code, Palette, Smartphone } from "lucide-react";
function UseSkills() {
  const skills = [
    { name: "HTML5", level: 95, icon: Code, color: "bg-orange-500" },
    { name: "CSS3", level: 90, icon: Palette, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, icon: Code, color: "bg-yellow-500" },
    { name: "React.js", level: 80, icon: Code, color: "bg-cyan-500" },
    { name: "Next.js", level: 75, icon: Code, color: "bg-black" },
    { name: "Node.js", level: 75, icon: Code, color: "bg-black" },
    {
      name: "Responsive Design",
      level: 95,
      icon: Smartphone,
      color: "bg-green-500",
    },
    { name: "Git & GitHub", level: 85, icon: Github, color: "bg-gray-700" },
  ];
  return { skills };
}

export default UseSkills;
