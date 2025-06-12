'use client'

import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiArrowUpCircle } from "react-icons/fi";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Contacts = () => {

  const [result, setResult] = useState('');

 const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "5fe9d7a1-e6e3-42c2-9030-8938f84d8170");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Successfully Sent");
      form.reset();
      setTimeout(() => setResult(""), 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  };

  return (
    <motion.div id="contacts" className="max-w-4xl mx-auto p-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      >
      <h1 className="flex justify-center text-4xl font-bold mt-30 text-glow">Contact me</h1>
      <p className="text-glow-2 text-2xl font-semibold p-4">
        Got a question, idea, or just want to connect? Drop me a message – I am always happy to chat!
      </p>
      <form onSubmit={onSubmit}>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            name="name"
            className="border p-2 rounded w-full bg-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            className="border p-2 rounded w-full bg-white"
          />
        </div>
        <textarea
          placeholder="Your Message"
          required
          name="message"
          className="mt-2 border p-2 rounded resize-none w-full bg-white h-32 mb-4"
        ></textarea>
        <div className="flex flex-col justify-center items-center mb-4 mt-6">
          <p className="pb-2">{result}</p>
          <button
            type="submit"
            disabled={result === "Sending...."}
            className={`shadow-gray-700 shadow-[10px_10px_10px_2px] bg-black text-white py-3 px-6 rounded-2xl transition-all duration-300 ${
              result === "Sending...."
                ? "opacity-50 cursor-not-allowed"
                : "hover:cursor-pointer hover:scale-110 hover:shadow-blue-500"
            }`}
          >
            {result === "Sending...." ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      <div className="flex justify-end relative">
        <a href="#header" className="relative group hover:cursor-pointer hover:scale-120 transition-all duration-300">
          <FiArrowUpCircle className="w-10 h-10" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Scroll to Top
          </span>
        </a>
      </div>
      <div className="border-b flex justify-center items-center mt-6 gap-1">
      <MdOutlineMail className="w-5 h-5" />
      <p>solomonaragaw691@gmail.com</p>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contacts;
