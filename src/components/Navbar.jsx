import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNav = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItem = (onClick, label, isActive = false) => (
    <li>
      <button
        onClick={onClick}
        className={`transition duration-300 px-3 py-2 rounded-md text-sm font-medium 
        hover:text-indigo-600 hover:bg-indigo-100
        ${isActive ? 'text-indigo-600 font-bold bg-indigo-100' : 'text-gray-700'}`}
      >
        {label}
      </button>
    </li>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => navigate('/')}
            className="text-2xl sm:text-3xl font-bold font-mono cursor-pointer bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            &lt;Harshil /&gt;
          </div>



          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-4">
            {navItem(() => navigate('/'), 'Home', location.pathname === '/')}
            {navItem(() => navigate('/about'), 'About', location.pathname === '/about')}
            {navItem(() => navigate('/projects'), 'Projects', location.pathname === '/projects')}
            {navItem(() => handleSectionNav('contact'), 'Contact')}
          </ul>

          {/* Mobile Placeholder */}
          <div className="md:hidden">
            {/* You can implement mobile menu later here (hamburger icon) */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
