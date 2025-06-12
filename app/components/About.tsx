'use client'

import { assets } from "@/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div id="about" className="pt-8 p-4 m-30"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
    >
      <h1 className="flex justify-center mb-8 mt-25 text-4xl font-bold text-glow">About me</h1>
      <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
        <div className="m-4 flex-shrink-0 w-3/5 max-w-xs sm:w-48 md:w-56">
          <div className="relative w-full pb-[150%] rounded-[50%] overflow-hidden shadow-[10px_10px_10px_2px] shadow-gray-700 hover:scale-110 hover:shadow-blue-500 hover:shadow-[0px_0px_15px_15px] transition-all duration-300"

          >
            <Image
              src={assets.mypic}
              alt="pic"
              fill
              className="object-cover rounded-[50%]"
            />
            <div
              className="absolute inset-0 rounded-[50%] pointer-events-none"
              style={{
                boxShadow: 'inset 20px 20px 30px 30px rgba(0, 0, 0, 0.70)',
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-1">
          <p className="font-semibold text-lg text-glow-2">
            I'm Solomon, a software engineering student and full-stack web developer based in Ethiopia. I enjoy turning complex problems into elegant, functional solutions through clean, responsive code. I'm passionate about learning new technologies and building tools that make a real difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
            <div className="w-full bg-blue-950 text-white p-6 rounded-lg shadow-[5px_10px_10px_5px] shadow-gray-900 hover:cursor-pointer hover:scale-110 hover:shadow-blue-500 transition-all duration-300">
              <h2 className="text-2xl flex justify-center">Education</h2>
              <ul className="list-disc pl-2">
                <li>
                  Bachelor of Science in Software Engineering, University of Arbaminch, Ethiopia
                </li>
              </ul>
            </div>
            <div className="w-full bg-blue-950 text-white p-6 rounded-lg shadow-[5px_10px_10px_5px] shadow-gray-900 hover:cursor-pointer hover:scale-110 hover:shadow-blue-500 transition-all duration-300">
              <h2 className="text-2xl flex justify-center">Skills</h2>
              <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS (Tailwind)</li>
                <li>JavaScript (React, Next.js)</li>
                <li>Node.js</li>
                <li>C++</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="w-full bg-blue-950 text-white p-6 rounded-lg shadow-[5px_10px_10px_5px] shadow-gray-900 hover:cursor-pointer hover:scale-110 hover:shadow-blue-500 transition-all duration-300">
              <h2 className="text-2xl flex justify-center">Projects</h2>
              <ul className="list-disc pl-2">
                <li>Loading...</li>
                <li>Rock-Paper-Scissors Game</li>
                <li>Personal Portfolio Website</li>
                <li>Job Portal Website</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center mt-8">
        <p className="text-glow-2 font-semibold text-lg">Wants to know more? Feel free to contact me 😊</p>
        <button className="shadow-gray-700 shadow-[10px_10px_10px_2px] bg-lime-800 border border-gray-700 text-white py-3 px-6 rounded-2xl hover:cursor-pointer hover:scale-110 hover:shadow-blue-500 transition-all duration-300" onClick={() => window.location.href = '#contacts'}>Contact me</button>
      </div>
    </motion.div>
  );
};

export default About;
