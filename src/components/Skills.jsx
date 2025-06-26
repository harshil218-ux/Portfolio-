import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // ✔️ Now we will use it

function Skills() {
  const skills = [
    'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React JS', 'Next JS',
    'Database Connectivity', 'Node.js with MongoDB', 'Python', 'Internet of Things', 'Git & GitHub'
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-white to-gray-100 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-600 mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex items-center justify-start space-x-4 border border-indigo-100 hover:border-indigo-300 transition-all duration-300"
            >
              <FaCheckCircle className="text-indigo-500 text-xl" /> {/* ✔️ Icon used here */}
              <p className="text-lg font-medium text-gray-800">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
