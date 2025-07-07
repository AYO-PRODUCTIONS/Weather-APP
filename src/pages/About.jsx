import React from 'react';
import { FaGithub } from 'react-icons/fa';


const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 py-12 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">About This App</h1>
        <p className="text-lg text-gray-700">
          Your go-to tool for real-time weather updates and forecasts.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Why We Built It</h2>
        <p className="mb-6 leading-relaxed">
          This weather app was created to provide a fast and simple way to check weather updates across the globe. Whether you're planning a trip or just curious about the temperature outside, our app delivers accurate data in a beautiful interface.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>React.js</strong> - For building the user interface</li>
          <li><strong>Tailwind CSS</strong> - For modern, responsive styling</li>
          <li><strong>OpenWeatherMap API</strong> - For fetching weather data</li>
          <li><strong>React Router</strong> - For seamless navigation between pages</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Who's Behind This?</h2>
        <p className="leading-relaxed">
          This project is built by a passionate developer who enjoys turning ideas into reality with code. It's a part of a learning journey and a showcase of practical React and API integration skills.
        </p>
        <h2 className="text-2xl font-semibold mb-2 mt-8">Check Out the Code</h2>
        <a
        href="https://github.com/AYO-PRODUCTIONS"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sky-700 hover:underline">
        <FaGithub size={20} /> github.com/AYO-PRODUCTIONS
        </a>

      </div>

    </div>
  );
};

export default About;
