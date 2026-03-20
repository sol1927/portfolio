'use client'

import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaLayerGroup,
  FaTools,
  FaMicrochip
} from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      icon: <FaCode className="text-blue-400" />,
      items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML & CSS"],
      glow: "hover:shadow-blue-500/20"
    },
    {
      title: "AI & Machine Learning",
      icon: <FaBrain className="text-purple-400" />,
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "Pandas & NumPy"],
      glow: "hover:shadow-purple-500/20"
    },
    {
      title: "Frameworks & Web",
      icon: <FaLayerGroup className="text-emerald-400" />,
      items: ["React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
      glow: "hover:shadow-emerald-500/20"
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools className="text-orange-400" />,
      items: ["OpenAI API", "LangChain", "Git & GitHub", "Postman", "VS Code", "Jupyter Notebook"],
      glow: "hover:shadow-orange-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, translateZ: -100 },
    visible: {
      opacity: 1,
      y: 0,
      translateZ: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="skills" className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto bg-transparent">
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Bridging the gap between robust Full-Stack architectures and advanced AI integration.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 perspective-[1000px]"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              y: -10,
              translateZ: 40,
              rotateY: 5,
              backgroundColor: "rgba(255,255,255,0.08)"
            }}
            className={`group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-500 ${category.glow} flex flex-col`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Category Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-6 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-inner">
              {category.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors">
              {category.title}
            </h3>

            <ul className="space-y-4 flex-grow">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm group/item">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  <span className="group-hover/item:text-white transition-colors duration-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mt-16 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
            <FaMicrochip className="text-3xl text-purple-400 animate-pulse" />
          </div>
          <div className="text-left">
            <h4 className="text-white font-semibold text-lg">Specialized AI Workflows</h4>
            <p className="text-gray-400 text-sm font-mono">Neural Networks • Conversational AI • LLM Integration</p>
          </div>
        </div>
        <div className="hidden lg:flex gap-3">
          {["Prototyping", "ETL Pipelines", "Model Fine-tuning"].map((tag) => (
            <span key={tag} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-blue-400 font-medium tracking-wide">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Skills;