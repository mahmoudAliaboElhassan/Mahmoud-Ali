import { Star } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Passionate Frontend Developer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a computer science student, I've developed a deep understanding
              of programming fundamentals and modern web technologies. My
              academic journey has exposed me to algorithms, data structures,
              software development principles, and database management.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I specialize in creating responsive, user-friendly web
              applications using React.js and Next.js. My goal is to bridge the
              gap between design and functionality, creating digital experiences
              that are both beautiful and performant.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-700">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-700">Responsive Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-700">Modern Technologies</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Quick Facts</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span>Egypt</span>
                </div>
                <div className="flex justify-between">
                  <span>Education:</span>
                  <span style={{ textAlign: "right" }}>
                    Computer Science Graduate
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Focus:</span>
                  <span>Frontend Development</span>
                </div>
                <div className="flex justify-between">
                  <span>Languages:</span>
                  <span>Arabic, English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
