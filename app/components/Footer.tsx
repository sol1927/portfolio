import React from "react";
import { LuGithub, LuYoutube } from "react-icons/lu";
import { FiLinkedin, FiInstagram } from "react-icons/fi";


const Footer = () => {
  return (
    <footer className="">
      <div className="flex justify-between items-center max-w-4xl mx-auto p-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Solomon Aragaw. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://www.youtube.com/@solomon8507"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuYoutube className="w-5 h-5 hover:text-red-500 hover:scale-110" />
          </a>
          <a
            href="https://github.com/sol1927"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuGithub className="w-5 h-5 hover:text-red-500 hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/sol1927/"
            target="_blank"
            rel="noopener noreferrer"
          >

            <FiLinkedin className="w-5 h-5 hover:text-red-500 hover:scale-110" />
          </a>
          <a
            href="https://www.instagram.com/sol19271/"
            target="_blank"
            rel="noopener noreferrer"
            >
           <FiInstagram className="w-5 h-5 hover:text-red-500 hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;