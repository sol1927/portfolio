'use client'

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div id="skills" className="pt-8 p-4 m-30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="flex justify-center text-4xl font-bold mb-10 mt-25 text-glow">Skills</h1>
      <p className="text-glow-2 text-2xl font-semibold p-4">I am always learning and expand my skillset - here are the technologies i currently work with.</p>
      <div className="grid cols-1 md:grid-cols-3 justify-center m-6 p-4 gap-20">
        <div className="bg-blue-950 text-white p-6 rounded-lg shadow-[5px_10px_10px_5px] shadow-gray-900 hover:cursor-pointer hover:scale-110 hover:shadow-blue-500 transition-all duration-300">
          <h2 className="text-2xl flex justify-center">Languages & Databases</h2>
          <ul className="list-disc pl-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>Java</li>
            <li>MySql</li>
          </ul>
        </div>
        <div className="bg-blue-950 text-white p-6 rounded-lg shadow-[5px_10px_10px_5px] shadow-gray-900 hover:cursor-pointer hover:scale-110 hover:shadow-blue-500 transition-all duration-300">
          <h2 className="text-2xl flex justify-center">Frameworks & libraries</h2>
          <ul className="list-disc pl-2">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="bg-blue-950 text-white p-6 rounded-lg shadow-[5px_10px_10px_5px] shadow-gray-900 hover:cursor-pointer hover:scale-110 hover:shadow-blue-500 transition-all duration-300">
          <h2 className="text-2xl flex justify-center">Tools & Technologies</h2>
          <ul className="list-disc pl-2">
            <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
             <li>Node.js</li>
            <li>Figma</li>
          </ul>
        </div>       
      </div>
    </motion.div>
  );
};

export default Skills;