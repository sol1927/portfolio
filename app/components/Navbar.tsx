'use client'

import { HiOutlineMoon } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import React, { useEffect, useState } from 'react';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const distance = touchStartX - touchEndX;
      const isSmallScreen = window.innerWidth < 768;

      if (isSmallScreen) {
        if (distance > 50 && !menuOpen) {
          setMenuOpen(true);
        }
        if (distance < -50 && menuOpen) {
          setMenuOpen(false);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [menuOpen]);



  return (
    <>
      <header id="navbar" className="fixed top-0 left-0 w-full z-50 p-4 sm:p-6 flex justify-between items-center backdrop-blur-xs bg-blacxk/20 sh">
        <div className='flex items-center justify-center bg-blue-950 aspect-square w-16 sm:w-20 rounded-full shadow-[2px_10px_10px_2px] shadow-gray-700 hover:scale-110 hover:shadow-[0px_0px_15px_15px] hover:shadow-blue-500 hover:animate-bounce transition-all duration-800'>
          <div className='text-cyan-400 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
            Sol
          </div>
        </div>
        <nav className='hidden md:flex md:w-[70%] lg:w-[70%] justify-between items-center bg-gray-300 font-semibold rounded-2xl shadow-gray-600 px-10 py-4 max-w-2xl shadow-[2px_10px_10px_2px] hover:scale-105 hover:shadow-blue-500 transition-all duration-300'>
          <a href="#header" className='hover:text-blue-600'>Home</a>
          <a href="#about" className='hover:text-blue-600'>About</a>
          <a href="#skills" className='hover:text-blue-600'>Skills</a>
          <a href="#projects" className='hover:text-blue-600'>Projects</a>
          <a href="#contacts" className='hover:text-blue-600'>Contacts</a>
        </nav>
        <div className='flex items-center gap-4'>
          <button className='pr-2'>
            <HiOutlineMoon className='w-6 h-6 hover:rotate-720 cursor-pointer hover:scale-150 transition-all duration-300' />
          </button>

          <button className='flex md:hidden justify-center items-center hover:cursor-pointer hover:scale-130 transition-all duration-300  bg-gray-300 rounded-full p-2 shadow-lg shadow-gray-600 hover:shadow-blue-500'
            onClick={() => setMenuOpen(!menuOpen)}>
            <IoMenu className='w-6 h-6' />
          </button>
        </div>
      </header>
      <>
        <div
          className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300
            ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
        ></div>
        <div
          className={`fixed top-0 right-0 h-screen w-64 md:hidden z-50 flex flex-col items-start gap-6 bg-blue-950 text-white p-4 shadow-lg shadow-black transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="w-full text-center border-b border-white pb-4 mb-4">
            <h3 className="text-2xl font-semibold">Portfolio</h3>
          </div>
          <a href="#header" onClick={() => setMenuOpen(false)} className='block w-full px-4 py-2 rounded hover:bg-gray-600 transition-colors'>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className='block w-full px-4 py-2 rounded hover:bg-gray-600 transition-colors'>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className='block w-full px-4 py-2 rounded hover:bg-gray-600 transition-colors'>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className='block w-full px-4 py-2 rounded hover:bg-gray-600 transition-colors'>Projects</a>
          <a href="#contacts" onClick={() => setMenuOpen(false)} className='block w-full px-4 py-2 rounded hover:bg-gray-600 transition-colors'>Contacts</a>
        </div>
      </>
    </>
  )
}

export default Navbar