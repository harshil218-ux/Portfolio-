import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Pages
import Resume from './pages/Resume';

function App() {
  const location = useLocation();

  // Check if we are on the resume page
  const isResumePage = location.pathname === '/resume';

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Only show Navbar and Footer if NOT on resume page */}
      {!isResumePage && <Navbar />}

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Skills />
                <Experience />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {!isResumePage && <Footer />}
    </div>
  );
}

export default App;
