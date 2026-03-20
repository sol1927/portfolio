'use client'

import React from "react";
import { LuGithub, LuYoutube } from "react-icons/lu";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {

  const socials = [
    {
      icon: <LuYoutube />,
      link: "https://www.youtube.com/@solomon8507",
      color: "hover:text-red-500"
    },
    {
      icon: <LuGithub />,
      link: "https://github.com/sol1927",
      color: "hover:text-gray-300"
    },
    {
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/sol1927/",
      color: "hover:text-blue-500"
    },
    {
      icon: <FiInstagram />,
      link: "https://www.instagram.com/sol19271/",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <footer className="relative mt-16 px-4 max-w-7xl mx-auto">
      <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full bottom-0 left-1/2 -translate-x-1/2 animate-pulse"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        <p className="text-sm text-gray-300 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Solomon Aragaw. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {socials.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotateX: 5,
                rotateY: -5
              }}
              whileTap={{ scale: 0.9 }}
              className={`text-white text-xl transition ${item.color}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;