'use client'

import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#header' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contacts', href: '#contacts' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 p-4 md:p-6 ${scrolled ? 'backdrop-blur-md' : ''}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20 bg-black shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img src="/SA.png" alt="logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-2 rounded-full shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden flex justify-center items-center p-3 rounded-full bg-white/10 border border-white/20 text-white hover:scale-110 transition-all shadow-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-screen w-72 z-50 bg-[#0a0a1a]/90 backdrop-blur-2xl border-l border-white/10 p-8 transform transition-transform duration-500 ease-out shadow-[[-20px_0_50px_rgba(0,0,0,0.5)]] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-8 mt-12">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold tracking-tighter text-gray-400 hover:text-indigo-400 transition-colors"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;