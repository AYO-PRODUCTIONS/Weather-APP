import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-semibold">🌤 Weather App</div>

        <div className="flex gap-6 items-center text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/forecast" className="hover:underline">Forecast</Link>
          <Link to="/about" className="hover:underline">About</Link>
          {/* GitHub external link */}
          <a
            href="https://github.com/AYO-PRODUCTIONS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>

        <div className="text-xs text-white/80">
          &copy; {new Date().getFullYear()} Weather App
        </div>
      </div>
    </footer>
  );
};

export default Footer;
