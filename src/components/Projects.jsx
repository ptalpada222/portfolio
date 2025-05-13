import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiChevronRight,
  FiCode,
  FiLayers,
  FiCpu,
  FiAlertTriangle,
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "eFood",
    description:
      "A comprehensive restaurant management system with dynamic menu, real-time cart, table booking, and online ordering features.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "WebSocket",
    ],
    image: "/assets/images/project1.jpg",
    github: "https://github.com/ptalpada222/eFood",
    live: "https://your-live-link.com",
    features: [
      "Admin panel for managing menu and orders",
      "Real-time menu updates using WebSocket",
      "Dynamic cart system with persistent storage",
      "Table booking with availability check",
      "Online food ordering with order history and status tracking",
      "Email-based OTP verification for password reset",
      "User and admin login/signup with validation",
    ],
  },
  {
    id: 2,
    title: "ASHIRWAD",
    description:
      "A sleek and elegant frontend for an online jewellery store, showcasing beautiful designs with modern UI and responsive layouts.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/assets/images/project2.jpg",
    github: "https://github.com/ptalpada222/Ashirwaad",
    live: "https://aashirwaad.netlify.app/",
    features: [
      "Home, shop, and contact sections with smooth navigation",
      "Product gallery with filters for categories and price",
      "Detailed product view with add-to-cart visuals",
      "Fully responsive layout for mobile and desktop",
      "Elegant and aesthetic UI using Bootstrap styling",
    ],
  },
  {
    id: 3,
    title: "Prakash.dev",
    description:
      "Personal portfolio website showcasing projects and skills with modern design.",
    tags: ["React", "Framer Motion", "Three.js"],
    image: "/assets/images/project3.jpg",
    github: "https://github.com/ptalpada222/portfolio",
    live: "https://prakashtech.netlify.app/",
    features: [
      "Interactive 3D elements with Three.js",
      "Smooth animations with Framer Motion",
      "Responsive design for all devices",
      "Dark/light mode toggle",
    ],
  },
  {
    id: 4,
    title: "HealthScan",
    description:
      "An AI-powered health assistant that scans food product QR codes or images to determine their compatibility with a user's medical conditions.",
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "OpenCV",
      "Framer Motion",
    ],
    image: "/assets/images/project4.jpg",
    github: "https://github.com/ptalpada222/Food_detection",
    live: "https://your-healthscan-app.com",
    features: [
      "User authentication with disease and medicine input",
      "QR code and image scanning for food products",
      "AI model integration using Python and OpenCV",
      "Product analysis and health compatibility feedback",
      "Voice output and alternative food suggestions",
      "Admin panel for adding and managing food product data",
      "Modern UI with smooth animations and responsive design",
    ],
  },
  {
    id: 5,
    title: "Guard",
    description:
      "A modern and responsive security-themed UI concept built to demonstrate advanced frontend design and layout skills.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/assets/images/project5.jpg",
    github: "https://github.com/ptalpada222/gaurd",
    live: "https://your-live-link.com",
    features: [
      "Clean and professional UI layout for a security platform",
      "Responsive design optimized for all devices",
      "Interactive elements with hover and transition effects",
      "Modular and well-structured HTML/CSS codebase",
      "Modern design principles to showcase frontend expertise",
    ],
  },
  {
    id: 6,
    title: "WebsiteSetup",
    description:
      "A responsive and modern landing page designed to guide users through the process of setting up their own website with ease.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/assets/images/project6.jpg",
    github: "https://github.com/ptalpada222",
    live: "https://your-live-link.com",
    features: [
      "Visually appealing landing page with call-to-action sections",
      "Step-by-step guidance layout for website setup process",
      "Fully responsive design with mobile-first approach",
      "Interactive UI elements for better user engagement",
      "Clean code and structured layout using Bootstrap framework",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [show404, setShow404] = useState(false);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  const techFilters = [
    "all",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Bootstrap",
    "Python",
  ];

  const handleLiveDemoClick = (e, project) => {
    e.preventDefault();
    // Check if this is a demo environment
    if (
      project.live.includes("your-live-link") ||
      project.live.includes("example") ||
      project.live.includes("your-healthscan-app")
    ) {
      setShow404(true);
    } else {
      window.open(project.live, "_blank");
    }
  };

  const close404 = () => {
    setShow404(false);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative"
    >
      {/* 404 Modal */}
      {show404 && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-8 text-center"
          >
            <div className="text-red-500 mb-4 flex justify-center">
              <FiAlertTriangle className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              404 Not Found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This demo is not available in the live preview. Please check the GitHub repository for more details.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={close404}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
              <a
                href="https://github.com/ptalpada222"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
              >
                <FiGithub /> View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      )}

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-50"></div>

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
            <FiLayers className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
            <span className="text-sm font-medium py-1 px-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
              PORTFOLIO SHOWCASE
            </span>
            <FiCpu className="text-purple-600 dark:text-purple-400 text-2xl ml-3" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Development
            </span>{" "}
            Projects
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore my collection of work that demonstrates problem-solving
            skills, technical expertise, and attention to detail. Each project
            represents a unique challenge and solution.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex flex-wrap justify-center gap-2">
            {techFilters.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  filter === tech
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm"
                }`}
              >
                {tech === "all" ? "All Projects" : tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    View Details <FiChevronRight className="ml-1" />
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                    aria-label="View code on GitHub"
                  >
                    <FiGithub /> Code
                  </a>
                  <button
                    onClick={(e) => handleLiveDemoClick(e, project)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    aria-label="View live demo"
                  >
                    <FiExternalLink /> Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/80 dark:bg-gray-700/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-colors backdrop-blur-sm"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5 text-gray-800 dark:text-gray-200" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedProject.description}
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    <FiGithub /> Code
                  </a>
                  <button
                    onClick={(e) => handleLiveDemoClick(e, selectedProject)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <FiExternalLink /> Live Demo
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Project Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1 w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProject.tags.map((tech, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <FiCode className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;