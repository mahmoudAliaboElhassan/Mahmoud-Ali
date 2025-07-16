import { useState, useEffect, useRef } from "react";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import ContactForm from "./ContactForm";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleContacts, setVisibleContacts] = useState([]);
  const [visibleSocials, setVisibleSocials] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger contact info animations
          setTimeout(() => setVisibleContacts([0]), 300);
          setTimeout(() => setVisibleContacts([0, 1]), 500);
          setTimeout(() => setVisibleContacts([0, 1, 2]), 700);
          // Stagger social links animations
          setTimeout(() => setVisibleSocials([0]), 900);
          setTimeout(() => setVisibleSocials([0, 1]), 1000);
          setTimeout(() => setVisibleSocials([0, 1, 2]), 1100);
          setTimeout(() => setVisibleSocials([0, 1, 2, 3]), 1200);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ml6893254@gmail.com",
      link: "mailto:ml6893254@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+20 115 282 1902",
      link: "tel:+201152821902",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Egypt",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mahmoudAliaboElhassan",
      color: "hover:bg-gray-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mahmoudali-webdev/",
      color: "hover:bg-blue-600",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/MahmoudCodeSphere",
      color: "hover:bg-blue-700",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@sphere_of_mahmoud",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gray-900 text-white overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500 rounded-full opacity-5 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-400 rounded-full opacity-5 animate-ping"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Get In Touch
          </h2>
          <div
            className={`w-20 h-1 bg-blue-500 mx-auto mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out if you have any questions, want to
              collaborate on a project, or just want to say hello. I'd love to
              hear from you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 group cursor-pointer transition-all duration-500 hover:translate-x-2 ${
                    visibleContacts.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <contact.icon className="w-6 h-6 group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-blue-400 transition-colors duration-300">
                      {contact.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center ${
                    social.color
                  } transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                    visibleSocials.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
