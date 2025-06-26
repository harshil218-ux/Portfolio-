import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-6">
          Contact Me
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-10">
          I'd love to hear from you! Whether it's a project, opportunity, or just a friendly hello.
        </p>

        <div className="space-y-6 text-lg font-medium text-gray-800">
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-indigo-600 text-xl" />
            <a href="mailto:harshilbhavsar66@gmail.com" className="hover:underline">
              harshilbhavsar66@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-indigo-600 text-xl" />
            <a href="tel:+917487829225" className="hover:underline">
              +91 74878 29225
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaLinkedin className="text-indigo-600 text-xl" />
            <a
              href="https://www.linkedin.com/in/harshil-bhavsar-997629259/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
