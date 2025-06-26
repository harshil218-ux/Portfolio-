import React from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 text-center mt-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-2xl mb-6">
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
        <p className="text-base sm:text-lg text-gray-300 flex flex-wrap justify-center items-center gap-2 px-4 text-center">
          &copy; {new Date().getFullYear()} — Designed & coded with
          <FaHeart className="text-red-500 inline" />
          <span className="font-semibold text-indigo-400">Harshil Bhavsar</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
