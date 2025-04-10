import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaChevronRight,
} from "react-icons/fa";

const skills = [
  { name: "React Js", level: 85, color: "bg-blue-500" },
  { name: "Node js", level: 80, color: "bg-green-500" },
  { name: "Express Js", level: 80, color: "bg-gray-500" },
  { name: "Next Js", level: 40, color: "bg-orange-500" },
  { name: "MongoDB", level: 90, color: "bg-green-600" },
  { name: "JavaScript", level: 85, color: "bg-yellow-500" },
  { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
  { name: "Tailwind CSS", level: 85, color: "bg-blue-400" },
  { name: "Git/Github", level: 70, color: "bg-red-500" },
  { name: "SQL", level: 90, color: "bg-blue-400" },
];

const experiences = [
  {
    year: "2024 - Present",
    title: "Freelance Developer",
    company: "Self-employed",
    description:
      "Built custom websites and web applications for clients. Worked with various technologies including MERN stack and Firebase.",
  },
];

const education = [
  {
    year: "2022 - present",
    degree: "B.E in Information Technology",
    institution: "Gujrat Technological University",
    description:
      "Specialized in web development and database systems. Completed coursework in algorithms, data structures, and software engineering.",
  },
  {
    year: "2020 - 2022",
    degree: "Higher Secondary",
    institution: "The Undel Highschool, Khambhat",
    description:
      "Focus on science and mathematics. Participated in coding competitions and tech workshops.",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="pt-20 pb-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-px bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-sm font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase">
              My Journey
            </span>
            <span className="w-12 h-px bg-blue-600 dark:bg-blue-400"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Digital Experiences
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I combine technical expertise with creative vision to build
            immersive web applications. With a passion for clean code and
            intuitive design, I transform ideas into impactful digital
            solutions.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <motion.div
              whileHover={{ y: -2 }}
              className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"
            />
            <motion.div
              whileHover={{ y: -2 }}
              className="w-3 h-3 rounded-full bg-purple-600 dark:bg-purple-400"
            />
            <motion.div
              whileHover={{ y: -2 }}
              className="w-3 h-3 rounded-full bg-pink-600 dark:bg-pink-400"
            />
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  PT
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Prakash Talpada
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    web Developer
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Passionate about creating elegant solutions to complex problems.
                I specialize in building responsive, user-friendly web
                applications with modern technologies.
              </p>

              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300">
                    <FaCode className="text-sm" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    1+ Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-300">
                    <FaBriefcase className="text-sm" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    5+ Projects Completed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            {/* Tab Navigation */}
            <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === "skills"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <FaCode /> Skills
                </button>
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === "experience"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <FaBriefcase /> Experience
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === "education"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <FaGraduationCap /> Education
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
              {activeTab === "skills" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                    >
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full mb-2 overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative pl-8 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg p-4 transition-all"
                    >
                      <div className="absolute left-0 top-5 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <span className="text-sm font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full w-fit">
                          {exp.year}
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h4>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          @ {exp.company}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-300 pl-2">
                        {exp.description}
                      </p>
                      <FaChevronRight className="absolute right-4 top-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative pl-8 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg p-4 transition-all"
                    >
                      <div className="absolute left-0 top-5 w-3 h-3 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <span className="text-sm font-medium px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full w-fit">
                          {edu.year}
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          @ {edu.institution}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-300 pl-2">
                        {edu.description}
                      </p>
                      <FaChevronRight className="absolute right-4 top-6 text-gray-400 group-hover:text-purple-500 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
