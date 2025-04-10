import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiAward } from "react-icons/fi";

const Resume = () => {
  return (
    <section id="resume" className="pt-20 pb-10 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-50"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10 dark:opacity-5"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-10 dark:opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <FiFileText className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
            <span className="text-sm font-medium py-1 px-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
              PROFESSIONAL PROFILE
            </span>
            <FiAward className="text-purple-600 dark:text-purple-400 text-2xl ml-3" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Resume</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A detailed overview of my academic background, professional experience, 
            and technical competencies that showcase my growth as a developer.
          </motion.p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto"
        >
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Prakash Talpada
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  MERN Stack Developer
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/assets/resume.pdf"
                  download="Prakash_Resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                >
                  <FiDownload className="w-5 h-5 mr-2" />
                  Download Resume
                </motion.a>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Education
              </h4>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h5 className="font-medium text-gray-800 dark:text-white">
                    B.E in Information Technology
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    Gujrat Technological University • 2022 - Present
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    CGPA: 8.48
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <h5 className="font-medium text-gray-800 dark:text-white">
                    Higher Secondary Education
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    The Undel HighSchol Undel • 2020 - 2022
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Percentage: 74.5%
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <h5 className="font-medium text-gray-800 dark:text-white">
                    GATE 2025 Qualified – Computer Science
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    Score: 33.47 • AIR: 15,665
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Qualified in 45 days of preparation during 3rd year of B.E IT
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Work Experience
              </h4>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h5 className="font-medium text-gray-800 dark:text-white">
                    Freelance Developer
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    Self-employed • 2024 - Present
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                    <li>
                      Built custom websites and web applications for clients
                    </li>
                    <li>
                      Worked with various technologies including MERN stack and
                      Firebase
                    </li>
                    <li>
                      Provided maintenance and support for existing projects
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Skills
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-white mb-2">
                    Technical Skills
                  </h5>
                  <ul className="space-y-2">
                    <li className="text-gray-600 dark:text-gray-300">
                      JavaScript (ES6+)
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      React.js
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      Node.js & Express.js
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      MongoDB & MySQL
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      RESTful API Design
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-white mb-2">
                    Soft Skills
                  </h5>
                  <ul className="space-y-2">
                    <li className="text-gray-600 dark:text-gray-300">
                      Problem Solving
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      Team Collaboration
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      Time Management
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      Communication
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      Adaptability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;