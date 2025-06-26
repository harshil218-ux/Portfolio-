import React from 'react';
import { useNavigate } from 'react-router-dom';

function Resume() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600 text-center sm:text-left">
          Harshil Bhavsar's Resume
        </h1>

        <div className="flex flex-wrap justify-center sm:justify-end gap-3">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition text-sm sm:text-base"
          >
            Back to Home
          </button>
          <a
            href="/Harshil-Bhavsar-Resume.pdf"
            download
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm sm:text-base"
          >
            Download PDF
          </a>
        </div>
      </header>

      {/* Resume Embed */}
      <div className="flex-grow h-[calc(100vh-112px)] sm:h-[calc(100vh-80px)]"> {/* Header height responsive */}
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
// This component renders a resume page with a header and an embedded PDF viewer for the resume.
// It includes a button to navigate back to the home page and a button to download the resume