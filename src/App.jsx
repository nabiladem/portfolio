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
    <div className="flex flex-col items-start justify-center min-h-screen py-20 px-12 bg-slate-950">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover="hovered"
          className="text-left space-y-6 p-8 w-full max-w-2xl liquid-glass relative overflow-hidden"
        >
          <motion.img 
            src="/images/headshot.jpg"
            alt="Nabil Adem"
            className="w-48 h-48 rounded-full object-cover mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h1
            whileHover={{ scale: 1.05, filter: "brightness(1.2)", originX: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-4xl font-bold font-brand text-slate-100 cursor-default text-center"
          >
            Nabil Adem
          </motion.h1>

          <h2 className="text-2xl font-semibold text-slate-300 text-center">Software Developer</h2>

          <div>
            <p className="text-xl text-slate-500 text-center">
              <span className="block text-3xl text-center">👋🏾🌍</span>
              I am passionate about creating innovative solutions to real-world challenges.
              I enjoy building user-focused applications, learning new technologies, collaborating with others,
              and strengthening my skills through hands-on projects.
              I am motivated by the satisfaction of overcoming challenges and turning ideas into effective solutions.
              Through my curiosity, I am a reliable contributor who delivers meaningful impact to any team, whether
              by implementing scalable systems or improving user experiences at startups or large organizations.
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 mt-6 text-sm text-slate-400 liquid-glass p-4 px-10 w-fit mx-auto">
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

        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-slate-100">My Skills</h2>
          
          <div className="flex flex-col gap-3 text-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
            {['Java', 'Python', 'Go', 'C', 'C#', 'JavaScript', 'TypeScript', 'Swift', 'Kotlin', 'Rust'].map((skill) => (
              <span key={skill} className="liquid-glass rounded-full px-4 py-1.5 text-sm text-slate-100 whitespace-nowrap">
                {skill}
              </span>
            ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
            {['Spring Boot', 'Node.JS', 'React', '.NET', 'Pandas', 'NumPy'].map((skill) => (
              <span key={skill} className="liquid-glass rounded-full px-4 py-1.5 text-sm text-slate-100 whitespace-nowrap">
                {skill}
              </span>
            ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-3 text-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
            {['Amazon Web Services', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Kafka', 'Git', 'Jenkins', 'GitHub Actions', 'REST APIs', 'Microservices'].map((skill) => (
              <span key={skill} className="liquid-glass rounded-full px-4 py-1.5 text-sm text-slate-100 whitespace-nowrap">
                {skill}
              </span>
            ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Data & Databases</h3>
            <div className="flex flex-wrap gap-2">
            {['SQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'H2'].map((skill) => (
              <span key={skill} className="liquid-glass rounded-full px-4 py-1.5 text-sm text-slate-100 whitespace-nowrap">
                {skill}
              </span>
            ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Analytics & Reporting</h3>
            <div className="flex flex-wrap gap-2">
            {['Power BI', 'JupyterHub'].map((skill) => (
              <span key={skill} className="liquid-glass rounded-full px-4 py-1.5 text-sm text-slate-100 whitespace-nowrap">
                {skill}
              </span>
            ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Methodologies</h3>
            <div className="flex flex-wrap gap-2">
            {['Agile', 'Scrum', 'Test-Driven Development', 'Continuous Integration', 'Continuous Deployment','Software Architecture'].map((skill) => (
              <span key={skill} className="liquid-glass rounded-full px-4 py-1.5 text-sm text-slate-100 whitespace-nowrap">
                {skill}
              </span>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
