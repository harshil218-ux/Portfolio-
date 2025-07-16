import React from 'react';
import ProjectCard from './ProjectCard'; // 👈 make sure this import path is correct

const projectData = [
  {
    title: 'Age Calculator',
    description: 'A React app that calculates precise age.',
    image: './images/age calculator.png',
    github: 'https://github.com/harshil218-ux/Age-Calculator.git',
    tech: ['React', 'JavaScript', 'CSS']
  },
  {
    title: 'Stone Paper Scissors Game',
    description: 'A Python CLI game.',
    image: './images/Stone-Paper-Scissors-Game-python.png',
    github: 'https://github.com/harshil218-ux/Stone-Paper-Scissors-Game.git',
    tech: ['Python']
  },
  {
    title: 'Counter App',
    description: 'React + Tailwind counter.',
    image: './images/Counter app.png',
    github: 'https://github.com/harshil218-ux/Counter-app.git',
    tech: ['React', 'Tailwind CSS']
  },
  {
    title: 'Todo App',
    description: 'Todo app with Framer Motion.',
    image: './images/Todo app.png',
    github: 'https://github.com/harshil218-ux/Todo-app.git',
    tech: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Student Management System',
    description: 'C++ console app with file handling.',
    image: './images/StudentManagementSystem.png',
    github: 'https://github.com/harshil218-ux/Student-management-system.git',
    tech: ['C++', 'File Handling']
  },
  {
    title: 'Memory Game',
    description: 'Fun memory game using React.',
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
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">My Projects</h2>
        <p className="text-gray-500 mb-10">
          Here are some of the projects I've built recently.
        </p>

        {/* ✅ Grid Layout with Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
