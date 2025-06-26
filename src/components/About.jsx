import React from 'react';

function AboutPage() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-600 text-center mb-8 sm:mb-10">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2">
          Hello! I'm <span className="font-semibold text-indigo-500">Harshil Bhavsar</span>, a passionate and curious learner currently pursuing
          <span className="font-semibold text-indigo-500"> B.Tech in Computer Engineering</span> at
          <span className="font-semibold text-indigo-500"> Silver Oak University</span>. I enjoy building digital solutions through
          <span className="font-semibold text-indigo-500"> web development</span> and exploring hardware-software integration with technologies like
          <span className="font-semibold text-indigo-500"> IoT and microcontrollers</span>.
        </p>

        {/* Education Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Diploma */}
          <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6 hover:shadow-lg transition">
            <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-2">🎓 Diploma in Computer Engineering</h3>
            <p className="text-sm text-gray-500 mb-3">Silver Oak University (2021–2024)</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Built strong fundamentals in C++, Data Structures, and Networking</li>
              <li>Learned IoT concepts using Arduino and ESP8266</li>
              <li>Worked with real sensors and basic automation hardware projects</li>
            </ul>
          </div>

          {/* B.Tech */}
          <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6 hover:shadow-lg transition">
            <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-2">🎓 B.Tech in Computer Engineering</h3>
            <p className="text-sm text-gray-500 mb-3">Silver Oak University (2024–Present)</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Learning modern frontend technologies like React and Tailwind</li>
              <li>Exploring full-stack development and backend integration</li>
              <li>Building real-world portfolio projects</li>
            </ul>
          </div>

          {/* 10th Grade */}
          <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6 hover:shadow-lg transition md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-2">🏫 10th Grade</h3>
            <p className="text-sm text-gray-500 mb-3">K.R. Raval School (2020–2021)</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Built a strong academic base and interest in technology</li>
              <li>Introduced to computer fundamentals and logical thinking</li>
              <li>Participated in school-level science and tech activities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
