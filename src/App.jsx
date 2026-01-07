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
    <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-slate-950">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover="hovered"
        className="text-center space-y-12 p-18 w-full max-w-6xl liquid-glass relative overflow-hidden"
      >
        <motion.img
          src="/images/headshot.jpg"
          alt="Nabil Adem"
          className="w-64 h-64 rounded-full object-cover mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.h1
          whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-4xl font-bold font-brand text-slate-100 cursor-default"
        >
          Nabil Adem
        </motion.h1>

        <h2 className="text-2xl font-semibold text-slate-300 mt-2">Software Developer</h2>

        <p className="text-lg text-slate-500 mt-2">
          <span className="block">👋🏾🌍</span>
          I am Nabil Adem, a software developer with a passion for creating innovative solutions.
        </p>

        <div className="flex items-center justify-center gap-5 mt-6 text-sm text-slate-400 liquid-glass p-4">
          <span>📍 Based in Phoenix, AZ & Nashville, TN</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-200 font-medium">Open to relocation</span>
        </div>

        <motion.div
          className="flex justify-center gap-6 pt-4"
          variants={{
            hovered: {},
          }}
        >
          {socialIcons.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="text-gray-500 hover:text-white text-2xl transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.header>
    </div>
  );
}

export default App;
