'use client'

import { assets } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaGraduationCap, FaUserAstronaut, FaHeartbeat } from "react-icons/fa";

const About = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "Building the future with code and intelligence.";
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setTypedText(fullText.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 20;
    const y = (e.clientX - rect.left - rect.width / 2) / 20;
    setRotate({ x: -x, y: y });
  };

  return (
    <section id="about" className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto bg-transparent">
      <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotate({ x: 0, y: 0 })}
          animate={{ y: [0, -10, 0] }}
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transformStyle: "preserve-3d"
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            default: { type: "spring", stiffness: 100, damping: 20 }
          }}
          className="relative group w-72 h-72 md:w-96 md:h-96 flex-shrink-0 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 border border-white/5 backdrop-blur-sm"></div>
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-white/5">
            <Image
              src={assets.mypic}
              alt="Solomon"
              fill
              className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent" />
          </div>
        </motion.div>
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Me</span>
            </h2>

            <p className="text-xl font-mono text-purple-400 h-8">
              {typedText}<span className="animate-blink">|</span>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              I am a Full-Stack Developer and AI Engineer specializing in creating functional, impactful applications through modern web technologies and intelligent system integration.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <motion.div
              whileHover={{ y: -5, translateZ: 20, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-start gap-4 transition-all duration-300 shadow-xl"
            >
              <FaGraduationCap className="text-blue-400 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold">Education</h3>
                <p className="text-gray-400 text-sm">BSc Software Engineering<br />Arba Minch University</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, translateZ: 20, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-start gap-4 transition-all duration-300 shadow-xl"
            >
              <FaUserAstronaut className="text-purple-400 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold">Philosophy</h3>
                <p className="text-gray-400 text-sm">Building efficient, scalable, and user-centric digital tools.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, translateZ: 20, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-start gap-4 md:col-span-2 transition-all duration-300 shadow-xl"
            >
              <FaHeartbeat className="text-green-400 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold">Beyond the Screen</h3>
                <p className="text-gray-400 text-sm">If I’m not debugging code, I’m practicing my kicks or serving the community. I find purpose in balancing technical precision with physical mastery in Taekwondo and social welfare.</p>
              </div>
            </motion.div>

          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05, translateZ: 30, boxShadow: "0 0 30px rgba(79, 70, 229, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "#contacts")}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg transition-all"
            >
              Let's Collaborate
            </motion.button>
          </motion.div>
        </div>

      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default About;