import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaJava, FaChartBar, FaDatabase, FaCubes } from 'react-icons/fa';
import {
  SiPython, SiGo, SiC, SiJavascript, SiTypescript,
  SiSwift, SiKotlin, SiRust, SiSpringboot, SiNodedotjs, SiReact,
  SiDotnet, SiPandas, SiNumpy, SiAmazonwebservices, SiGooglecloud,
  SiDocker, SiKubernetes, SiApachekafka, SiGit, SiJenkins, SiGithubactions,
  SiPostgresql, SiMongodb, SiAmazondynamodb, SiJupyter,
  SiMysql, SiScrumalliance, SiTailwindcss
} from 'react-icons/si';
import { TbBrandCSharp, TbApi, TbRefresh, TbTestPipe, TbInfinity, TbHierarchy } from 'react-icons/tb';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

const socialIcons = [
  { icon: <FaGithub />, link: "https://github.com/nabiladem" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/nabiladem" }
];

const skillIcons = {
  Java: <FaJava className="text-[#007396]" />,
  Python: <SiPython className="text-[#3776AB]" />,
  Go: <SiGo className="text-[#00ADD8]" />,
  C: <SiC className="text-[#A8B9CC]" />,
  'C#': <TbBrandCSharp className="text-[#239120]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  Swift: <SiSwift className="text-[#F05138]" />,
  Kotlin: <SiKotlin className="text-[#7F52FF]" />,
  Rust: <SiRust className="text-white" />,

  'Spring Boot': <SiSpringboot className="text-[#6DB33F]" />,
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  React: <SiReact className="text-[#61DAFB]" />,
  '.NET': <SiDotnet className="text-[#6885E1]" />,
  Pandas: <SiPandas className="text-white" />,
  NumPy: <SiNumpy className="text-[#4DABCF]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,

  'Amazon Web Services': <SiAmazonwebservices className="text-[#FF9900]" />,
  'Google Cloud Platform': <SiGooglecloud className="text-[#4285F4]" />,
  Docker: <SiDocker className="text-[#2496ED]" />,
  Kubernetes: <SiKubernetes className="text-[#326CE5]" />,
  Kafka: <SiApachekafka className="text-white" />,
  Git: <SiGit className="text-[#F05032]" />,
  Jenkins: <SiJenkins className="text-[#D24939]" />,
  'GitHub Actions': <SiGithubactions className="text-white" />,
  SQL: <SiMysql className="text-[#4479A1]" />,
  PostgreSQL: <SiPostgresql className="text-[#4169E1]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  DynamoDB: <SiAmazondynamodb className="text-[#4053D6]" />,
  'Power BI': <FaChartBar className="text-[#F2C811]" />,
  'JupyterHub': <SiJupyter className="text-[#F37626]" />,
  H2: <FaDatabase className="text-[#0079c1]" />,
  'REST APIs': <TbApi className="text-[#009688]" />,
  'Microservices': <FaCubes className="text-[#607D8B]" />,

  Agile: <TbRefresh className="text-[#81C784]" />,
  Scrum: <SiScrumalliance className="text-[#F5F5F5]" />,
  'Test-Driven Development': <TbTestPipe className="text-[#FF9800]" />,
  'Continuous Integration': <TbInfinity className="text-[#2196F3]" />,
  'Continuous Deployment': <TbInfinity className="text-[#00BCD4]" />,
  'Software Architecture': <TbHierarchy className="text-[#9C27B0]" />,
};

const projects = [
  {
    title: "Raft",
    description: "Distributed Consensus Algorithm implementation in Go.",
    tech: ["Go"],
    github: "https://github.com/nabiladem",
    link: null
  },
  {
    title: "Git Fit",
    description: "CLI tool and web app to compress your GitHub avatars under the 1MB limit.",
    tech: ["Go", "React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/nabiladem/git-fit",
    link: "https://git-fit-flax.vercel.app"
  },
  {
    title: "nabiladem.com",
    description: "This website.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/nabiladem/portfolio",
    link: "https://portfolio-gilt-two-36.vercel.app"
  },
];

const experiences = [
  {
    company: "Capgemini",
    role: "Software Developer",
    period: "January 2024 - June 2025",
    description: "",
    tech: ["Java", "Spring Boot", "Kafka"],
  },
  {
    company: "FedEx",
    role: "IT Analyst Intern",
    period: "January 2023 - April 2023",
    description: "",
    tech: ["Java", "Power BI"],
  },
  {
    company: "University of North Carolina at Chapel Hill & Intel",
    role: "Undergraduate Security Research Assistant",
    period: "July 2022 - July 2022",
    description: "",
    tech: ["Rust", "JavaScript"],
  },
  {
    company: "Rhodes College",
    role: "Computer Science Tutor",
    period: "August 2021 - May 2023",
    description: "",
    tech: ["Python", "Java", "C"],
  },
]

function App() {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const SkillSection = ({ title, skills }) => (
    <div className="flex flex-col gap-3 text-slate-200">
      <div className="border-l border-slate-800 pl-4 py-1 h-fit">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="flex items-center gap-2 pill-glass rounded-full px-4 py-1.5 text-sm text-slate-100 whitespace-nowrap">
              {skillIcons[skill] && (
                <span className="text-lg">{skillIcons[skill]}</span>
              )}
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.15,
      duration: 1.2,
      wheelMultiplier: 1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-8 md:py-10 px-6 md:px-12 bg-slate-950 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-12 lg:gap-20 xl:gap-24 monitor:gap-32 max-w-[1400px] monitor:max-w-[1800px] w-full mx-auto py-4 md:py-0">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover="hovered"
          className="text-left space-y-6 p-8 w-full max-w-2xl monitor:max-w-3xl liquid-glass relative overflow-hidden"
        >
          <motion.img
            src="/images/headshot.jpg"
            alt="Nabil Adem"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto shadow-xl"
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
            <p className="text-base md:text-xl text-slate-500 text-center leading-relaxed">
              <span className="block text-2xl md:text-3xl text-center mb-2">👋🏾🌍</span>
              I am passionate about creating innovative solutions to real-world challenges.
              I enjoy building user-focused applications, learning new technologies, collaborating with others,
              and strengthening my skills through hands-on projects.
              I am motivated by the satisfaction of overcoming challenges and turning ideas into effective solutions.
              Through my curiosity, I am a reliable contributor who delivers meaningful impact to any team, whether
              by implementing scalable systems or improving user experiences at startups or large organizations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-6 text-sm text-slate-400 liquid-glass p-4 px-6 md:px-10 w-full sm:w-fit mx-auto">
            <span>📍 Phoenix, AZ & Nashville, TN</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-200 font-medium text-center">Open to relocation</span>
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

          <div className="grid grid-cols-1 monitor:grid-cols-2 gap-x-16 gap-y-8 monitor:gap-y-32">
            <SkillSection
              title="Programming Languages"
              skills={['Java', 'Python', 'Go', 'C', 'C#', 'JavaScript', 'TypeScript', 'Swift', 'Kotlin', 'Rust']}
            />

            <SkillSection
              title="Frameworks & Libraries"
              skills={['Spring Boot', 'Node.js', 'React', '.NET', 'Pandas', 'NumPy', 'Tailwind CSS']}
            />

            <SkillSection
              title="Cloud & DevOps"
              skills={['Amazon Web Services', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Kafka', 'Git', 'Jenkins', 'GitHub Actions', 'REST APIs', 'Microservices']}
            />

            <SkillSection
              title="Data & Databases"
              skills={['SQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'H2']}
            />

            <SkillSection
              title="Analytics & Reporting"
              skills={['Power BI', 'JupyterHub']}
            />

            <SkillSection
              title="Methodologies"
              skills={['Agile', 'Scrum', 'Test-Driven Development', 'Continuous Integration', 'Continuous Deployment', 'Software Architecture']}
            />
          </div>
        </div>
      </div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1400px] monitor:max-w-[1800px] mt-24 md:mt-32 px-4 pb-20"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">My Projects</h2>
          <div className="h-[1px] flex-grow bg-slate-800"></div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) =>
          (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="liquid-glass p-8 flex flex-col gap-6 group"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-blue-400/30 underline-offset-8">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex-grow"></div>

              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t) => (
                  <span key={t} className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)] rounded-full px-4 py-1.5 text-sm text-slate-100 whitespace-nowrap">
                    {skillIcons[t] && (
                      <span className="text-lg">
                        {skillIcons[t]}
                      </span>
                    )}
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4 border-white/5 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                >
                  <FaGithub className="text-xl" /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1400px] monitor:max-w-[1800px] mt-24 md:mt-32 px-4 pb-20"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">My Experiences</h2>
          <div className="h-[1px] flex-grow bg-slate-800"></div>
        </div>

        <div className="relative border-l border-slate-800 ml-4 pl-8 space-y-12">
          {experiences.map((experience, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative"
            >
              
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default App;
