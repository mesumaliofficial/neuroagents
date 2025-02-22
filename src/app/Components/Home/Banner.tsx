'use client';

import Image from 'next/image';
import bannerBg from './images/svg-animation-stroke.svg';

export default function Banner() {
  return (
    <header
      className="relative bg-black text-white h-screen flex flex-col items-center justify-center text-center px-4 bg-fixed"
      style={{
        backgroundImage: `url(${bannerBg.src})`, // Using the imported SVG as the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 py-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-200 drop-shadow-[3px_0px_3px_rgba(255,255,255,0.7)]">
          Welcome to Agentic World
        </h1>
        <p className="text-lg max-w-2xl mb-6 text-gray-300 drop-shadow-[3px_0px_3px_rgba(255,255,255,0.7)]">
          Discover next-gen AI agents designed to automate and revolutionize industries.
        </p>
        
        {/* Glowing Button */}
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:shadow-[0_0_25px_rgba(255,255,255,1)] hover:scale-105 transition-transform duration-300">
          Explore AI Agents
        </button>

        {/* Subtext with Glow */}
        <p className="mt-6 text-sm text-gray-400 flex items-center justify-center space-x-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          <span className="text-blue-400 font-semibold">🚀</span>
          <span className="hover:text-white transition-colors duration-300">Powered by <span className="font-bold text-blue-300">Panaversity</span></span>
        </p>
      </div>
    </header>
  );
}
