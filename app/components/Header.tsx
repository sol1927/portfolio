'use client'

import { assets } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const Header = () => {

  const viewResume = () => {
    window.open("/solomon_resume.pdf", "_blank");
  };

  const fullText = "Hi, I am Solomon";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    setTypedText("");
    let i = 0;
    const interval = setInterval(() => {
      const char = fullText[i];
      if (char) {
        setTypedText(prev => prev + char);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);



  return (
    <>
      <div id="header" className='flex flex-col items-center p-4 pt-32'>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        >
          <motion.div className="flex w-24 sm:w-32 md:w-40 aspect-square rounded-full m-4 relative overflow-hidden hover:scale-110 hover:shadow-[0px_0px_15px_15px] hover:shadow-blue-500 shadow-gray-700 shadow-[10px_10px_10px_2px] transition-all duration-300">
            <Image
              src={assets.mypic}
              alt="pic"
              fill
              className="object-cover"
            />
            <div
              className="flex absolute inset-0 rounded-full pointer-events-none"
              style={{ 
                boxShadow: 'inset 18px 15px 20px 5px rgba(0, 0, 0, 0.75)' 
              }}
            />
          </motion.div>
        </motion.div>
        <div className='flex flex-col items-center text-center m-6 gap-6'>
          <h3 className='text-3xl font-semibold text-glow'>
            {typedText}
          </h3>
           
          <motion.h1 className='text-6xl font-bold text-glow'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration : 0.6, delay: 0.4 }}
          >Full-stack web developer based in Ethiopia</motion.h1>
          <motion.p className='font-semibold text-lg text-glow-2'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration : 0.6, delay: 0.6 }}
          >I am software engineering student passionate about building clean, responsive web apps and solve real-world problems with code</motion.p>
          <div className='flex flex-col sm:flex-row m-2 p-4 gap-4 sm:gap-8 md:gap-20 items-center justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration : 0.6, delay: 0.8 }}
            >
              <button className='flex gap-2 items-center justify-center shadow-gray-700 shadow-[10px_10px_10px_2px] bg-black text-white py-3 px-6 rounded-2xl hover:cursor-pointer hover:scale-110 hover:shadow-blue-500 transition-all duration-300' onClick={() => window.location.href = '#contacts'}
              >Contact Me <span><FaArrowRight className='w-5 h-5'/></span></button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration : 0.6, delay: 1 }}
            >
              <button className='flex items-center justify-center gap-2 shadow-gray-700 shadow-[10px_10px_10px_2px] bg-green-600 py-3 px-6 rounded-2xl hover:cursor-pointer hover:scale-110 hover:shadow-blue-600 transition-all duration-300' onClick={viewResume} >View Resume <span><LuDownload className='w-5 h-5' /></span></button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header