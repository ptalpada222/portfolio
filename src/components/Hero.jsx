import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

const Typewriter = ({ roles, delay = 100, pause = 1000 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(delay);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      if (isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypingSpeed(delay / 2);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypingSpeed(delay);
      }

      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        setTypingSpeed(delay);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentRoleIndex,
    roles,
    delay,
    pause,
    typingSpeed,
  ]);

  return (
    <span className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Background = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark mode background */}
      <motion.div
        className="hidden dark:block w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Canvas>
          <ambientLight intensity={0.1} />
          <Stars radius={80} count={6000} factor={4} fade speed={2} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </motion.div>

      {/* Light mode animated blobs background */}
      <motion.div
        className="block dark:hidden absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-70 animate-blob"
            animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl opacity-70 animate-blob"
            animate={{ scale: [1, 1.05, 1], x: [0, -20, 0], y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 12 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300 rounded-full filter blur-3xl opacity-70 animate-blob"
            animate={{ scale: [1, 1.08, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 14 }}
          />
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white/80 to-white dark:from-gray-900/80 dark:to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      />
    </div>
  );
};

const Hero = () => {
  const roles = [
    "MERN Stack Developer",
    "UI/UX Designer",
    "Web Developer",
    "Tech Enthusiast",
    "Full-Stack Web Developer",
  ];

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <Background />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-800 mx-auto mb-6 overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="/assets/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Prakash
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-12 flex items-center justify-center">
            <Typewriter roles={roles} delay={100} pause={1500} />
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Final year IT Engineering student passionate about building modern
            web applications with the MERN stack.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
