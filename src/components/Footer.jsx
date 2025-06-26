import React from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 text-center mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center space-x-8 text-2xl mb-6">
          <a
            href="https://github.com/harshil218-ux"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harshil-bhavsar-997629259/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="tel:+917487829225"
            aria-label="Phone"
            className="hover:text-indigo-400 transition duration-300"
          >
            <FaPhoneAlt />
          </a>
          <a
            href="mailto:harshilbhavsar66@gmail.com"
            aria-label="Email"
            className="hover:text-indigo-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Credit Text */}
        <p className="text-lg text-gray-300 flex justify-center items-center gap-2">
          &copy; {new Date().getFullYear()} — Designed & coded with 
          <FaHeart className="text-red-500 inline ml-1" />
          <span className="font-semibold text-indigo-400">Harshil Bhavsar</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
