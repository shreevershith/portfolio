// components/Footer.js
import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-300 py-4">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Shreevershith. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:shreevershith@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/shreevershith-k" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/shreevershith" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FaInstagram />
          </a>
          <a href="https://github.com/shreevershith" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
