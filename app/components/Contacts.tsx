'use client'

import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiArrowUpCircle, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Contacts = () => {
  const [result, setResult] = useState('');
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    setIsError(false);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      formData.append("access_key", "5fe9d7a1-e6e3-42c2-9030-8938f84d8170");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        form.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        setIsError(true);
        setResult(data.message);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setResult("Check your internet connection.");
    }
  };

  return (
    <section id="contacts" className="relative pt-32 pb-12 px-6 max-w-7xl mx-auto bg-transparent">
      <div className="text-center mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-extrabold text-white"
        >
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ rotateY: 1, rotateX: -1, translateZ: 10 }}
        className="max-w-xl mx-auto p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative z-10"
        style={{ transformStyle: "preserve-3d" }}
      >
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-blue-400 uppercase ml-1 tracking-widest">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Solomon Aragaw"
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-blue-400 uppercase ml-1 tracking-widest">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="example@gmail.com"
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-blue-400 uppercase ml-1 tracking-widest">Message</label>
            <textarea
              name="message"
              required
              placeholder="Your project details..."
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 resize-none h-28 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
            />
          </div>

          <div className="flex flex-col items-center gap-3 mt-2">
            <AnimatePresence>
              {result && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-xs font-bold ${isError ? "text-red-400" : "text-emerald-400"}`}
                >
                  {result}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={result === "Sending...."}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold shadow-lg transition-all disabled:opacity-50"
            >
              {result === "Sending...." ? "Sending..." : "Send Message"}
              <FiSend className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </form>
      </motion.div>
      <div className="mt-10 flex flex-col items-center gap-6 relative z-10">
        <div className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 backdrop-blur-md">
          <MdOutlineMail className="text-purple-400 text-lg" />
          <span className="text-[11px] font-mono font-semibold uppercase">solomonaragaw691@gmail.com</span>
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -3 }}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-all group"
        >
          <FiArrowUpCircle className="w-8 h-8" />
          <span className="text-[9px] font-black uppercase tracking-widest">Top</span>
        </motion.button>
      </div>

    </section>
  );
};

export default Contacts;