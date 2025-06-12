'use client'

import { assets } from "@/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div id="projects" className="p-4 m-30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="flex justify-center text-4xl font-bold mb-10 mt-30 text-glow">Projects</h1>
      <p className="text-glow-2 text-2xl font-semibold p-4">Here are some of the projects I have worked on, showcasing my skills in web development and software engineering.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 m-4">
      <div className="group relative w-full aspect-[16/9] lg:aspect-auto lg:h-80 rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-700 shadow-gray-700 shadow-[10px_10px_10px_2px] hover:shadow-blue-500">
          <Image
            src={assets.portfolio}
            alt="Portfolio Website"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-end justify-center px-2 pb-3 sm:px-4 sm:pb-4">
            <button className="bg-blue-950 text-white px-4 py-2 text-sm sm:text-base rounded-full group-hover:scale-110 hover:scale-115 shadow-gray-700 shadow-[10px_10px_10px_2px] hover:shadow-blue-500 hover:shadow-[0px_-10px_10px_5px] transition-all duration-300">
              Portfolio Website
            </button>
          </div>
        </div>
        <div className="group relative w-full aspect-[16/9] lg:aspect-auto lg:h-80 rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-700 shadow-gray-700 shadow-[10px_10px_10px_2px] hover:shadow-blue-500">
          <Image
            src={assets.job_portal}
            alt="Job Portal Website"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-end justify-center px-2 pb-3 sm:px-4 sm:pb-4">
            <button className="bg-blue-950 text-white px-4 py-2 text-sm sm:text-base rounded-full group-hover:scale-110 hover:scale-115 shadow-gray-700 shadow-[10px_10px_10px_2px] hover:shadow-blue-500 hover:shadow-[0px_-10px_10px_5px] transition-all duration-300">
              Job Portal Website
            </button>
          </div>
        </div>
        <div className="group relative w-full aspect-[16/9] lg:aspect-auto lg:h-80 rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-700 shadow-gray-700 shadow-[10px_10px_10px_2px] hover:shadow-blue-500">
          <Image
            src={assets.rock_paper_scissors}
            alt="Rock Paper Scissors Website"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-end justify-center px-2 pb-3 sm:px-4 sm:pb-4">
            <button className="bg-blue-950 text-white px-4 py-2 text-sm sm:text-base rounded-full group-hover:scale-110 hover:scale-115 shadow-gray-700 shadow-[10px_10px_10px_2px] hover:shadow-blue-500 hover:shadow-[0px_-10px_10px_5px] transition-all duration-300">
              Rock Paper Scissors
            </button>
          </div>
        </div>
        <div className="group relative w-full aspect-[16/9] lg:aspect-auto lg:h-80 rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-700 shadow-gray-700 shadow-[10px_10px_10px_2px] hover:shadow-blue-500">
          <Image
            src={assets.cafteria_system}
            alt="Cafeteria System"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-end justify-center px-2 pb-3 sm:px-4 sm:pb-4">
            <button className="bg-blue-950 text-white px-4 py-2 text-sm sm:text-base rounded-full group-hover:scale-110 hover:scale-115 shadow-gray-700 shadow-[10px_10px_10px_2px] hover:shadow-blue-500 hover:shadow-[0px_-10px_10px_5px] transition-all duration-300">
              Loading...
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );                              9
}

export default Projects;