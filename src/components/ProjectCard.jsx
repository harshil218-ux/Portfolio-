import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({ project }) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * -10);
    rotateY.set(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full h-full">
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden group"
      >
        <div className="h-48 md:h-56 lg:h-64 flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain transition-transform duration-300"
          />
        </div>

        <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              {project.description}
            </p>
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
      </motion.article>
    </div>
  );
};

export default ProjectCard;
