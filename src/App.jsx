import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialIcons = [
  { icon: <FaGithub />, link: "https://github.com/nabiladem" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/nabiladem" }
];

function App() {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover="hovered"
        className="text-center space-y-4 p-8 w-80 max-w-md liquid-glass relative overflow-hidden"
      >
        <motion.h1
          whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-4xl font-bold text-gray-800 cursor-default"
        >
          Nabil Adem
        </motion.h1>

        <p className="text-lg text-gray-500">Software Developer</p>

        <motion.div
          className="flex justify-center gap-6 pt-4"
          variants={{
            hovered: {},
          }}
        >
          {socialIcons.map((icon, i) => (
            <motion.a
              key={i}
              href="#"
              variants={iconVariants}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="text-gray-500 hover:text-white text-2xl transition-colors"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.header>
    </div>
  );
}

export default App;
