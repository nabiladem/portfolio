import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaJava, FaChartBar, FaDatabase, FaCubes, FaEnvelope, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
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

const socialIcons = [
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/nabiladem" },
  { icon: <FaGithub />, link: "https://github.com/nabiladem" },
  { icon: <FaEnvelope />, link: "mailto:adem.nabil00@gmail.com" }
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
    stack: ["Go"],
    github: null,
    link: null
  },
  {
    title: "Git Fit",
    description: "CLI tool and web app to compress your GitHub avatars under the 1MB limit.",
    stack: ["Go", "React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/nabiladem/git-fit",
    link: "https://git-fit-flax.vercel.app"
  },
  {
    title: "nabiladem.com",
    description: "This website.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/nabiladem/portfolio",
    link: "https://nabiladem.com"
  }
];

const experiences = [
  {
    company: "Capgemini",
    role: "Software Developer",
    period: "January 2024 - June 2025",
    description: `• Designed, developed, and deployed enterprise-scale software solutions for Fortune 500 clients, supporting digital transformation and modernization initiatives
                  • Built and optimized Dialogflow CX conversational AI workflows, improving intent recognition accuracy and reducing customer handoff rate to human agents by 55%
                  • Enhanced Agile defect triage process by integrating test cases with user stories, cutting defect resolution time by 40% and boosting QA traceability by 60%
                  • Contributed to API modernization, migrating legacy systems to Spring Boot RESTful microservices, improving response times by 50% and reducing maintenance costs by $120K annually
                  • Implemented Kafka-based event-driven architecture, enabling real-time data streaming and reducing latency in mission-critical operations by 45%
                  • Collaborated with cross-functional Agile teams and utilized CI/CD pipelines, Git, and Docker to deliver secure, scalable backend solutions on AWS and GCP`,
    stack: ["Java", "Spring Boot", "Kafka"],
    color: "sky"
  },
  {
    company: "FedEx",
    role: "IT Analyst Intern",
    period: "January 2023 - April 2023",
    description: `• Developed Microsoft Power BI dashboards for Agile release tracking, improving visibility and compliance across 100+ projects, reducing manual reporting time by 95%
                  • Automated project intake and reporting workflows between Digital.ai Agility and Microfocus PPM, cutting report turnaround time from 48 hours to under 10 minutes
                  • Enhanced Agile release train forecasting accuracy by 25%, supporting data-driven decision-making for resource allocation and program planning`,
    stack: ["Java", "Power BI"],
    color: "orange"
  },
  {
    company: "University of North Carolina at Chapel Hill & Intel",
    role: "Undergraduate Security Research Assistant",
    period: "July 2022 - July 2022",
    description: `• Researched web security and identity protection, developing OpenJar—a Google Chrome extension (HTML, CSS, JavaScript) for anonymous browsing
                  • Collaborated with Intel and UNC researchers to present project outcomes on cybersecurity and data privacy`,
    stack: ["Rust", "JavaScript"],
    color: "sky"
  },
  {
    company: "Rhodes College",
    role: "Computer Science Tutor",
    period: "August 2021 - May 2023",
    description: `• Mentored students in data structures, algorithms, and object-oriented programming in Java, Python, and C
                  • Improved average student performance through one-on-one instruction and code review sessions`,
    stack: ["Python", "Java", "C"],
    color: "red"
  },
  {
    school: "Rhodes College",
    degree: "Bachelor of Science in Computer Science",
    period: "August 2019 - May 2023",
    description: `• COMP 485: Software Engineering
                  • COMP 465: Cybersecurity
                  • COMP 385: Distributed Systems
                  • COMP 380: Parallel Systems
                  • COMP 372: Artificial Intelligence
                  • COMP 355: Advanced Algorithms
                  • COMP 241: Data Structures & Algorithms`,
    honors: ["cum laude", "Upsilon Pi Epsilon"],
    color: "red"
  }
]

function App() {
  const [formStatus, setFormStatus] = useState("INITIAL");

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const TechBadge = ({ tech }) => (
    <span className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)] rounded-full px-4 py-1.5 text-sm text-slate-100 whitespace-nowrap">
      {skillIcons[tech] && (
        <span className="text-lg">{skillIcons[tech]}</span>
      )}
      {tech}
    </span>
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("SENDING");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/meeljdqy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("SUCCESS");
        e.target.reset();
      } else {
        setFormStatus("ERROR");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("ERROR");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-8 md:pt-10 px-6 md:px-12 bg-slate-950 overflow-x-hidden">
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
        <motion.div variants={cardVariants} className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">My Projects</h2>
          <div className="h-[1px] flex-grow bg-slate-800"></div>
        </motion.div>

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
                {project.stack?.map((s) => (
                  <TechBadge key={s} tech={s} />
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4 border-white/5 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                  >
                    <FaCode className="text-xl" title="View Repo" />
                  </a>
                )}
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

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-800">
          <div className="w-full relative flex items-center justify-center py-12">
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <div className="z-10 bg-slate-950 px-4 flex gap-2 items-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeInOut"
                    }}
                    className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                  />
                ))}
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="z-10 bg-slate-950 px-4 text-xs font-bold text-slate-500 tracking-[0.4em] uppercase whitespace-nowrap mr-[-0.4em]"
              >
                2026
              </motion.span>
            </div>
          </div>
          {experiences.map((experience, i) => {
            const currYear = experience.period.match(/\d{4}/)?.[0];
            const nextYear = i < experiences.length - 1 ? experiences[i + 1].period.match(/\d{4}/)?.[0] : null;
            const isYearEnding = currYear !== nextYear;

            const colors = {
              sky: {
                bg: "bg-sky-500",
                text: "text-sky-400",
                hover: "group-hover:text-cyan-400",
                bullet: "bg-sky-400",
                shadow: "shadow-sky-500/50",
                bulletShadow: "shadow-sky-400/60"
              },
              orange: {
                bg: "bg-orange-500",
                text: "text-orange-500",
                hover: "group-hover:text-purple-400",
                bullet: "bg-orange-400",
                shadow: "shadow-orange-500/50",
                bulletShadow: "shadow-orange-400/60"
              },
              red: {
                bg: "bg-red-500",
                text: "text-red-400",
                hover: "group-hover:text-zinc-400",
                bullet: "bg-red-400",
                shadow: "shadow-red-500/50",
                bulletShadow: "shadow-red-400/60"
              }
            };
            const theme = colors[experience.color] || colors.sky;

            return (
              <React.Fragment key={i} >
                <motion.div
                  variants={cardVariants}
                  className={`relative flex items-center justify-between md:justify-normal ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} group pb-12`}
                >
                  <div className={`flex items-center justify-center w-4 h-4 rounded-full ${theme.bg} border-4 border-slate-950 shadow-[0_0_10px] ${theme.shadow} z-10 md:order-1 ${i % 2 !== 0 ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'} ml-[12px] md:ml-0`}></div>
                  <div className="liquid-glass p-8 flex flex-col gap-4 group w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)]">
                    <div>
                      <h3 className={`text-2xl font-bold text-slate-100 ${theme.hover} transition-colors`}>
                        {experience.role || experience.degree}
                      </h3>
                      <p className={`${theme.text} font-medium text-lg`}>
                        {experience.company || experience.school}
                      </p>
                    </div>
                    <div className="w-fit text-slate-500 font-medium bg-slate-900/50 px-4 py-1 rounded-full border border-slate-800 text-sm">{experience.period}</div>

                    {experience.description && (
                      <div className={`space-y-3 ${experience.school ? 'grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 space-y-0' : ''}`}>
                        {experience.description.split('\n').filter(l => l.trim()).map((line, idx) => {
                          const trimmed = line.trim();
                          if (trimmed.startsWith('•')) {
                            return (
                              <div key={idx} className="flex gap-3 text-slate-400 leading-relaxed text-[15px]">
                                <span className={`mt-[9px] shrink-0 w-1 h-1 rounded-full ${theme.bullet} shadow-[0_0_10px] ${theme.bulletShadow}`}></span>
                                <span className="flex-1">{trimmed.replace('•', '').trim()}</span>
                              </div>
                            );
                          }
                          return <p key={idx} className="text-slate-400 leading-relaxed text-[15px]">{trimmed}</p>;
                        })}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {(experience.stack || experience.honors)?.map((s) => (
                        <TechBadge key={s} tech={s} />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {
                  isYearEnding && (
                    <div className="w-full relative flex items-center justify-center py-12">
                      <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="z-10 bg-slate-950 px-4 text-xs font-bold text-slate-500 tracking-[0.4em] uppercase whitespace-nowrap mr-[-0.4em]"
                        >
                          {currYear}
                        </motion.span>
                      </div>
                    </div>
                  )
                }
              </React.Fragment>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1400px] monitor:max-w-[1800px] mt-24 md:mt-32 px-4 pb-10"
      >
        <motion.div variants={cardVariants} className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">Let's Connect!</h2>
          <div className="h-[1px] flex-grow bg-slate-800"></div>
        </motion.div>
        <div className="flex justify-center items-center py-12">
          <motion.div
            variants={cardVariants}
            className="liquid-glass p-10 md:p-16 max-w-2xl w-full text-center relative overflow-hidden group"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-700"></div>
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {formStatus === "SUCCESS" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="py-12 space-y-6 flex flex-col items-center justify-center text-center"
                  >
                    <div className="relative w-20 h-20 rounded-full bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="48"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          className="text-emerald-500/20"
                          initial={{ pathLength: 0, rotate: -90 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                        />
                      </svg>

                      <svg className="w-10 h-10 text-emerald-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-100">Thank you for reaching out!</h3>
                      <p className="text-slate-400 text-lg leading-relaxed">
                        I have received your message and will get back to you as soon as possible.
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormStatus("INITIAL")}
                      className="liquid-glass px-6 py-3 rounded-lg font-bold text-slate-100 hover:text-blue-400 transition-colors duration-300"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-100">Ready to build something together?</h3>
                      <p className="text-slate-400 text-lg leading-relaxed">
                        I am open for new full-time as well as freelance opportunities.
                        My inbox is open whether you have a question or want to chat!
                      </p>
                    </div>

                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-4 text-left"
                    >
                      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="contact_name" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1 cursor-pointer">Your Name</label>
                          <input
                            id="contact_name"
                            type="text"
                            name="name"
                            required
                            className="w-full bg-slate-950/20 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all placeholder:text-slate-600 cursor-text"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="contact_email" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1 cursor-pointer">Email</label>
                          <input
                            id="contact_email"
                            type="email"
                            name="email"
                            required
                            className="w-full bg-slate-950/20 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all placeholder:text-slate-600 cursor-text"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="contact_message" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1 cursor-pointer">Message</label>
                        <textarea
                          id="contact_message"
                          name="message"
                          required
                          rows="4"
                          className="w-full bg-slate-950/20 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all placeholder:text-slate-600 resize-none cursor-text"
                          placeholder="What would like to talk about?"
                        ></textarea>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={formStatus === "SENDING"}
                        whileTap={{ scale: 0.98 }}
                        className="w-full liquid-glass border-white/10 shadow-none text-slate-100 font-bold py-4 transition-all flex items-center justify-center gap-2 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                      >
                        {formStatus === "SENDING" ? "Sending..." : "Send"}
                      </motion.button>

                      {formStatus === "ERROR" && (
                        <p className="text-red-400 text-xs text-center mt-2 animate-pulse">
                          Something went wrong. Please try again or email me directly.
                        </p>
                      )}
                    </motion.form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <footer className="w-full pt-12 pb-10 text-center text-slate-500 border-t border-white/5 space-y-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8"
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
          <motion.a
            href="https://github.com/nabiladem/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            transition={{ delay: socialIcons.length * 0.1, type: "spring", stiffness: 300, damping: 20 }}
            className="text-gray-500 hover:text-white text-2xl transition-colors"
            title="This Site's Repo"
          >
            <FaCode />
          </motion.a>
        </motion.div>
        <p className="text-xs opacity-50 transition-opacity cursor-default uppercase tracking-wider">
          © {new Date().getFullYear()} Nabil Adem. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
