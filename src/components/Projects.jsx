import React from 'react';

const projectData = [
  {
    title: 'Age Calculator',
    description: 'A React app that calculates precise age in years, months, and days.',
    image: './images/age calculator.png',
    github: 'https://github.com/harshil218-ux/Age-Calculator.git',
    tech: ['React', 'JavaScript', 'CSS']
  },
  {
    title: 'Stone Paper Scissors Game',
    description: 'A command-line Python game to play against the computer.',
    image: './images/Stone-Paper-Scissors-Game-python.png',
    github: 'https://github.com/harshil218-ux/Stone-Paper-Scissors-Game.git',
    tech: ['Python']
  },
  {
    title: 'Counter App',
    description: 'An interactive React counter app styled with Tailwind CSS.',
    image: './images/Counter app.png',
    github: 'https://github.com/harshil218-ux/Counter-app.git',
    tech: ['React', 'Tailwind CSS']
  },
  {
    title: 'Todo App',
    description: 'A responsive React Todo app with smooth Framer Motion animations.',
    image: './images/Todo app.png',
    github: 'https://github.com/harshil218-ux/Todo-app.git',
    tech: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Student Management System',
    description: 'A console-based C++ app for managing student data with file handling.',
    image: './images/StudentManagementSystem.png',
    github: 'https://github.com/harshil218-ux/Student-management-system.git',
    tech: ['C++', 'File Handling']
  },
  {
    title: 'Memory Game',
    description: 'A fun and interactive memory game built with React, testing your memory skills.',
    image: './images/Memory Game.png',
    github: 'https://github.com/harshil218-ux/Memory-Game.git',
    tech: ['React', 'JavaScript', 'CSS']
  },
  {
  title: 'Simple Bank Management',
  description: 'A simple Java Swing GUI application for basic banking operations like deposit, withdraw, and balance check.',
  image: './images/Simple Bank System.png',
  github: 'https://github.com/harshil218-ux/Simple-Banking-System.git',
  tech: ['Java', 'Swing', 'OOP']
}

];

function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-4">My Projects</h2>
        <p className="text-gray-500 text-base sm:text-lg mb-10">
          Here are some of the projects I've built recently
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden group"
            >
              <div className="h-48 sm:h-56 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-indigo-600 text-white text-sm sm:text-base py-2 px-4 rounded-xl text-center hover:bg-indigo-700 transition"
                >
                  View Code
                </a>
              </div>
                        
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
