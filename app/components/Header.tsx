'use client'

import { assets } from '@/assets'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const Header = () => {

  const viewResume = () => {
    window.open("/Solomon_Aragaw_Resume.pdf", "_blank");
  };

  const fullText = "Hi, I am Solomon Aragaw";
  const [typedText, setTypedText] = useState("");

  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = indexRef.current;

      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="header" className='relative flex flex-col items-center p-4 pt-32 bg-transparent'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        whileHover={{ rotateY: 15, rotateX: 10, translateZ: 50 }}
        className="perspective-[1000px] z-20"
      >
        <motion.div
          className="flex w-28 sm:w-36 md:w-44 aspect-square rounded-full m-4 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-white/10"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={assets.mypic}
            alt="Solomon Aragaw"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#030014]/60 to-transparent" />
        </motion.div>
      </motion.div>

      <div className='flex flex-col items-center text-center m-6 gap-6 z-10'>

        <h3 className='text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-sm'>
          {typedText}
        </h3>

        <motion.h1
          className='text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_20px_rgba(79,70,229,0.4)]'
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Full-Stack & AI Engineer
        </motion.h1>

        <motion.p
          className='font-medium text-lg text-gray-300 max-w-2xl text-center leading-relaxed'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Specializing in building modern web applications and AI-driven solutions.
          I focus on creating high-performance systems that bridge the gap between
          complex intelligence and user-centric design.
        </motion.p>

        <div className='flex flex-col sm:flex-row m-2 p-4 gap-6 items-center justify-center'>

          <motion.button
            whileHover={{ scale: 1.05, translateZ: 20 }}
            whileTap={{ scale: 0.95 }}
            className='flex gap-2 items-center justify-center bg-white/10 backdrop-blur-md text-white py-3 px-8 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300'
            onClick={() => window.location.href = '#contacts'}
          >
            Contact Me <FaArrowRight className="text-blue-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, translateZ: 20 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-2xl shadow-lg shadow-blue-900/20 hover:shadow-blue-500/40 transition-all duration-300'
            onClick={viewResume}
          >
            View Resume <LuDownload />
          </motion.button>

        </div>
      </div>
    </div>
  )
}

export default Header;