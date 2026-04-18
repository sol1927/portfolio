'use client'

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaCertificate, FaTv, FaMobileAlt, FaBrain, FaHeart } from "react-icons/fa";

const certificates = [
  {
    title: "Programming Fundamentals Nanodegree",
    issuer: "Udacity",
    date: "Dec 19, 2025",
    link: "/certs/Fundamental.pdf",
    type: "Tech",
    icon: <FaCertificate />
  },
  {
    title: "Android Developer Fundamentals",
    issuer: "Udacity",
    date: "Dec 19, 2025",
    link: "/certs/Android.pdf",
    type: "Tech",
    icon: <FaMobileAlt />
  },
  {
    title: "Artificial Intelligence for Social Impact",
    issuer: "ADBI (Bambang Brodjonegoro)",
    date: "Dec 19, 2025",
    link: "/certs/AI.pdf",
    type: "AI",
    icon: <FaBrain className="text-purple-400" />
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto bg-transparent">
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Awards</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          I have earned the following certifications
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 perspective-[1200px]"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, rotateX: 20, translateZ: -100 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                translateZ: 0,
                transition: { delay: index * 0.1, duration: 0.6, type: "spring" }
              }
            }}
            whileHover={{
              y: -15,
              rotateY: 8,
              translateZ: 40,
              backgroundColor: "rgba(255,255,255,0.08)"
            }}
            className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-emerald-500/20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-3xl mb-6 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-lg"
              style={{ transform: "translateZ(30px)" }}
            >
              {cert.icon}
            </div>

            <div className="mb-8" style={{ transform: "translateZ(20px)" }}>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/10">
                {cert.type}
              </span>
              <h3 className="text-xl font-bold text-white mt-4 group-hover:text-emerald-300 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 font-medium">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mt-1 font-mono">{cert.date}</p>
            </div>

            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 px-6 py-3 rounded-full group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-black transition-all duration-300 shadow-xl"
              style={{ transform: "translateZ(40px)" }}
            >
              View Certificate <FaExternalLinkAlt className="text-[10px]" />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificates;