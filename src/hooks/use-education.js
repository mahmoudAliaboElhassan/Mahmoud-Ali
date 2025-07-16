import {
  GraduationCap,
  Award,
  BookOpen,
  Code,
  Globe,
  Palette,
} from "lucide-react";

const UseEducation = () => {
  const education = [
    {
      degree: "Bachelor of Computer and Information Sciences",
      institution:
        "Faculty of Computer and Information Science, Assiut University",
      period: "2021 - 2025",
      gpa: "3.47/4.0 (Very Good)",
      description:
        "Comprehensive study in computer science fundamentals, software engineering, data structures, algorithms, and web development technologies.",
      achievements: [
        "Maintained Very Good academic standing",
        "Completed advanced coursework in web development",
        "Developed multiple full-stack projects",
        "Active participation in programming competitions",
      ],
      icon: GraduationCap,
    },
  ];

  const certificates = [
    {
      degree: "MERN Stack Development",
      institution: "Information Technology Institute (ITI)",
      period: "July 2024 - August 2024",
      description:
        "Intensive hands-on training program covering MongoDB, Express.js, React.js, and Node.js. Gained practical experience in full-stack development with modern JavaScript technologies.",
      achievements: [
        "Built complete MERN stack applications",
        "Mastered MongoDB database operations",
        "Implemented RESTful API development",
        "Developed responsive React.js interfaces",
      ],
      icon: Code,
      certificateLink:
        "https://drive.google.com/file/d/11Nl8NjcFfO3ysFwGQMx9SnuXlzzbfOFs/view?usp=sharing", // Add your certificate link here
      badgeColor: "from-green-500 to-emerald-500",
    },
    {
      degree: "Web Masters Front-End Development Training Program",
      institution: "Web Masters",
      period: "February 2025 - July 2025",
      description:
        "Comprehensive 3-month front-end development training program focusing on modern web technologies, responsive design, and advanced JavaScript frameworks with practical project implementation.",
      achievements: [
        "Completed intensive front-end development curriculum",
        "Mastered modern JavaScript frameworks and libraries",
        "Developed responsive and interactive web applications",
        "Applied best practices in web development",
      ],
      icon: Code,
      certificateLink:
        "https://drive.google.com/file/d/1r0_BzRwdNrc-xjcwyJtkpf7YaEPXWQ4o/view?usp=drive_link", // Add your certificate link here
      badgeColor: "from-blue-600 to-indigo-600",
    },
    {
      degree: "React Basics Certification",
      institution: "Meta (Facebook)",
      period: "May 2023 - July 2023",
      description:
        "Comprehensive React fundamentals course covering component lifecycle, state management, props, hooks, and modern React patterns and best practices.",
      achievements: [
        "Mastered React component architecture",
        "Implemented state management with hooks",
        "Built interactive user interfaces",
        "Applied React best practices and patterns",
      ],
      icon: BookOpen,
      certificateLink:
        "https://drive.google.com/file/d/1dTC2emw9gmDWGL6qAfq8o7hKJ6KrHG0t/view?usp=sharing", // Add your certificate link here
      badgeColor: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Responsive Web Design",
      institution: "freeCodeCamp",
      period: "January 2023 - February 2023",
      description:
        "Complete course on HTML5, CSS3, and responsive design principles. Learned to create mobile-first, accessible web applications with modern styling techniques.",
      achievements: [
        "Mastered HTML5 semantic elements",
        "Implemented advanced CSS3 features",
        "Created responsive layouts with Flexbox and Grid",
        "Applied accessibility best practices",
      ],
      icon: Palette,
      certificateLink:
        "https://drive.google.com/file/d/1rTxGhHqyxmJxzK99r8Tqc-CEb1M-xqPg/view?usp=drive_link", // Add your certificate link here
      badgeColor: "from-purple-500 to-pink-500",
    },
    {
      degree: "CS50's Introduction to Programming with Python",
      institution: "Harvard University",
      period: "2023",
      description:
        "Comprehensive Python programming course covering fundamental concepts, data structures, algorithms, and software engineering principles. Completed nine problem sets and one final project.",
      achievements: [
        "Mastered Python programming fundamentals",
        "Implemented data structures and algorithms",
        "Completed practical programming projects",
        "Applied software engineering best practices",
      ],
      icon: Code,
      certificateLink:
        "https://drive.google.com/file/d/1kbpcCOf8B9_ylgn4OsDtT23W6w-Tz4Hj/view?usp=drive_link",
      badgeColor: "from-red-500 to-orange-500",
    },
    {
      degree: "Entrepreneurship Certification",
      institution: "Certified Program",
      period: "2023",
      description:
        "Comprehensive entrepreneurship program covering business fundamentals, startup development, and innovative thinking for technology ventures.",
      achievements: [
        "Learned business development strategies",
        "Studied startup methodologies",
        "Developed entrepreneurial mindset",
        "Applied innovation principles",
      ],
      icon: Award,
      certificateLink:
        "https://drive.google.com/file/d/1X1ks9SeSMRtXked6PmkxBXRqKikpVjMV/view?usp=drive_link", // Add your certificate link here if available
      badgeColor: "from-yellow-500 to-amber-500",
    },
  ];

  // Community engagement as additional achievement
  const communityEngagement = [
    {
      degree: "Code Sphere - Web Development Content Creator",
      institution: "Facebook Page Creator & Manager",
      period: "Ongoing",
      description:
        "Launched and manage an educational Facebook page sharing web development insights, programming concepts, and best practices with the developer community.",
      achievements: [
        "Created educational content for developers",
        "Shared programming concepts and tutorials",
        "Built engaged community of learners",
        "Provided practical coding examples",
      ],
      icon: Globe,
      certificateLink: "https://www.facebook.com/profile.php?id=61573550532089",
      badgeColor: "from-orange-500 to-red-500",
      isOngoing: true,
      isPage: true,
    },
  ];

  return {
    education,
    certificates,
    communityEngagement,
    // Combined for easy iteration
    allEducation: [...education, ...certificates, ...communityEngagement],
  };
};

export default UseEducation;
