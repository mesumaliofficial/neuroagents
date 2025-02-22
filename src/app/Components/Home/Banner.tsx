'use client';

import Image from 'next/image';
import banner_1 from './images/banner_1.webp'

export default function Banner() {
  return (
    <header className="relative bg-black text-white h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={banner_1}
          alt="AI Futuristic Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-600 text-transparent bg-clip-text animate-pulse">
          Welcome to Agentic World
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mt-4 text-gray-300">
          AI-driven automation for the next generation. Build, deploy, and scale intelligent agents with ease.
        </p>
        
        {/* CTA Button */}
        <button className="mt-6 px-8 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-orange-600 text-black rounded-xl shadow-lg hover:from-yellow-600 hover:to-orange-700 hover:scale-105 transition-transform duration-300">
          Explore AI Agents
        </button>
      </div>
    </header>
  );
}
