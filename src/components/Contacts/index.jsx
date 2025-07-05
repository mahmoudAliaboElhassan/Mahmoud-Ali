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

function Contacts() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out if you have any questions, want to
              collaborate on a project, or just want to say hello. I'd love to
              hear from you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-300">ml6893254@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-300">+20 115 282 1902</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-300">Egypt</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href="https://github.com/mahmoudAliaboElhassan"
                target="_blank"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahmoudfrontenddeveloper/"
                target="_blank"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/MahmoudCodeSphere"
                target="_blank"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@sphere_of_mahmoud"
                target="_blank"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
