import { GraduationCap, BookOpen } from "lucide-react";

function UseEducation() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution:
        "Faculty of Computer and Information Science Assiut University",
      period: "2021 - 2025",
      description:
        "Specialized in software development, algorithms, and data structures with a focus on web technologies.",
      achievements: [
        "Relevant coursework in Software Engineering",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Development Technologies",
      ],
      icon: GraduationCap,
      gpa: 3.42,
    },
    {
      degree: "Frontend Development Certification",
      institution: "Self-taught & Online Courses",
      period: "2022 - Present",
      description:
        "Continuous learning through various online platforms and hands-on projects.",
      achievements: [
        "React.js & Next.js Mastery",
        "Modern JavaScript (ES6+)",
        "Responsive Design Principles",
        "Version Control with Git",
      ],
      icon: BookOpen,
    },
  ];
  return { education };
}

export default UseEducation;
