// File: src/pages/Resume.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Resume() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-indigo-600">
          Harshil Bhavsar's Resume
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
          >
            Back to Home
          </button>
          <a
            href="/Harshil-Bhavsar-Resume.pdf"
            download
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Download PDF  
          </a>
        </div>
      </header>

      {/* Resume Embed */}
      <div className="flex-grow h-[calc(100vh-80px)]"> {/* 80px ≈ header height */}
        <iframe
          src="/Harshil-Bhavsar-Resume.pdf"
          title="Resume"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
