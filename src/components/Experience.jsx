import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      role: 'IoT Intern',
      company: 'Spyderwave Technology',
      period: 'Dec 2023 - May 2024',
      description:
        'Built smart IoT prototypes using Arduino and ESP8266, integrated sensors, and contributed to hardware setup and system integration for automation projects.'
    },
    {
      role: 'Embedded Systems Trainee (Project)',
      company: 'Special Character',
      period: 'Jul 2023',
      description:
        'Explored embedded systems by designing microcontroller-based applications, focusing on sensor interaction and hardware-software integration.'
    },
    {
      role: 'Frontend Developer Intern',
      company: 'The Special Character',
      period: 'Jan 2025 - Feb 2025',
      description:
        'Developed reusable UI components, worked with React and Tailwind CSS, and optimized application performance using virtual DOM and code-splitting.'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-600 text-center mb-14">Experience</h2>

        <div className="space-y-10 relative border-l-4 border-indigo-200 pl-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 relative"
            >
              <span className="absolute -left-3 top-6 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow"></span>

              <div className="flex items-center mb-2">
                <FaBriefcase className="text-indigo-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
              </div>

              <p className="text-sm text-gray-500 font-medium mb-2">
                {exp.company} &nbsp;&mdash;&nbsp; {exp.period}
              </p>

              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
