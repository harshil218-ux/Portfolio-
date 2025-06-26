import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white text-center py-24 sm:py-32 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <img
          src="./Harshil_image.jpg"
          alt="Harshil Bhavsar"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto shadow-2xl border-4 border-white mb-6 object-cover"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-yellow-300">Harshil Bhavsar</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-white/90 max-w-xl mx-auto leading-relaxed px-2">
          A passionate developer crafting dynamic and responsive websites using
          <span className="font-semibold text-white"> HTML</span>,
          <span className="font-semibold text-white"> Tailwind CSS</span>, and
          <span className="font-semibold text-white"> React.js</span>.
        </p>

        <a
          href="/resume"
          className="mt-8 sm:mt-10 inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition transform hover:scale-105"
        >
          View My Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Home;
