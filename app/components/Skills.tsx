'use client'

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="pt-8 p-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="flex justify-center pt-24 text-3xl sm:text-4xl font-bold mb-10 mt-10 text-glow">
        Skills
      </h1>

      <p className="text-glow-2 text-base sm:text-2xl font-semibold p-4 text-center">
        I am always learning and expanding my skillset — here are the technologies I currently work with.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center m-4 sm:m-6 p-4 gap-6 sm:gap-10 md:gap-20">
        <div className="bg-blue-950 text-white p-4 sm:p-6 rounded-lg shadow-[5px_10px_10px_5px] shadow-gray-900 hover:cursor-pointer hover:scale-105 hover:shadow-blue-500 transition-all duration-300">
          <h2 className="text-lg sm:text-2xl flex justify-center mb-2">
            Languages & Databases
          </h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="bg-blue-950 text-white p-4 sm:p-6 rounded-lg shadow-[5px_10px_10px_5px] shadow-gray-900 hover:cursor-pointer hover:scale-105 hover:shadow-blue-500 transition-all duration-300">
          <h2 className="text-lg sm:text-2xl flex justify-center mb-2">
            Frameworks & Libraries
          </h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="bg-blue-950 text-white p-4 sm:p-6 rounded-lg shadow-[5px_10px_10px_5px] shadow-gray-900 hover:cursor-pointer hover:scale-105 hover:shadow-blue-500 transition-all duration-300">
          <h2 className="text-lg sm:text-2xl flex justify-center mb-2">
            Tools & Technologies
          </h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
