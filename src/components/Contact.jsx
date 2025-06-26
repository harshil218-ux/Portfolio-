import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-4 sm:mb-6">
          Contact Me
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10">
          I'd love to hear from you! Whether it's a project, opportunity, or just a friendly hello.
        </p>

        <div className="space-y-6 text-base sm:text-lg font-medium text-gray-800">
          {/* Email */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
            <FaEnvelope className="text-indigo-600 text-xl shrink-0" />
            <a href="mailto:harshilbhavsar66@gmail.com" className="hover:underline break-all">
              harshilbhavsar66@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <FaPhoneAlt className="text-indigo-600 text-xl shrink-0" />
            <a href="tel:+917487829225" className="hover:underline">
              +91 74878 29225
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <FaLinkedin className="text-indigo-600 text-xl shrink-0" />
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
