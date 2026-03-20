'use client'

import { assets } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCode, FaRobot, FaServer, FaStickyNote, FaCheckCircle } from "react-icons/fa";

const Projects = () => {

  const projects = [
    {
      title: "Social Media Sentiment AI",
      image: assets.SMS,
      link: "https://socialmeadiasentiment.streamlit.app/",
      icon: <FaRobot className="text-purple-400" />,
      description: "Big data sentiment analysis and classification using advanced NLP."
    },
    {
      title: "GibiGebeta",
      image: assets.logo,
      link: "https://gibigebeta.vercel.app/",
      icon: <FaServer className="text-blue-400" />,
      description: "Comprehensive university cafeteria management system."
    },
    {
      title: "Personal Portfolio",
      image: assets.portfolio,
      link: "https://solomonaragaw.vercel.app/",
      icon: <FaCode className="text-emerald-400" />,
      description: "Immersive 3D animated portfolio showcasing engineering skills."
    },
    {
      title: "Note App",
      image: assets.portfolio,
      link: "#",
      icon: <FaStickyNote className="text-yellow-400" />,
      description: "Persistent full-stack note-taking application with real-time sync."
    },
    {
      title: "To-Do App",
      image: assets.portfolio,
      link: "#",
      icon: <FaCheckCircle className="text-green-400" />,
      description: "Task management system with robust backend integration."
    },
    {
      title: "Rock Paper Scissors",
      image: assets.rock_paper_scissors,
      link: "#",
      icon: <FaCode className="text-orange-400" />,
      description: "Interactive game logic with modern UI enhancements."
    }
  ];

  return (
    <section id="projects" className="relative pt-24 pb-20 px-6 max-w-6xl mx-auto bg-transparent">
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Works</span>
        </motion.h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto font-medium">
          Showcasing specialized Full-Stack development and AI-driven solutions.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 perspective-[1000px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 50, rotateX: 10 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { delay: idx * 0.1, duration: 0.6, type: "spring" }
              }
            }}
            whileHover={{
              y: -12,
              rotateY: 5,
              translateZ: 30,
              backgroundColor: "rgba(255,255,255,0.08)"
            }}
            className="group relative rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-blue-500/20 flex flex-col"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40 group-hover:bg-black/20 transition-colors">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out"
                style={{ transform: "translateZ(20px)" }}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow" style={{ transform: "translateZ(40px)" }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 shadow-inner group-hover:bg-white/10 transition-colors">
                  {project.icon}
                </span>
                <h3 className="text-lg font-bold text-white truncate tracking-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-medium">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                {project.link !== "#" ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="text-xs font-bold text-white flex items-center gap-2 hover:text-blue-400 transition-colors px-4 py-2 rounded-full bg-white/5 border border-white/10"
                  >
                    Launch <FaExternalLinkAlt size={10} />
                  </motion.a>
                ) : (
                  <span className="text-xs text-gray-500 font-mono tracking-tighter">PROJECT_IN_DEV</span>
                )}

                <motion.a
                  href="https://github.com/SolomonAragaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-gray-400 hover:text-white transition-all p-2 bg-white/5 rounded-full border border-white/10"
                >
                  <FaGithub size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Projects;