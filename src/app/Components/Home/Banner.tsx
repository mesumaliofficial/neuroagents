"use client";

import { motion } from "framer-motion";
import bannerBg from "./images/svg-animation-stroke.svg";

const textVariant = (delay: number) => ({
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay } }
});

export default function Banner() {
  return (
    <header
      id="home"
      className="relative bg-black text-white h-screen flex flex-col items-center justify-center text-center px-4 bg-fixed"
      style={{
        backgroundImage: `url(${bannerBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold py-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-300 drop-shadow-md"
          variants={textVariant(0.2)}
          initial="hidden"
          animate="visible"
        >
          Enterprise AI Agents
        </motion.h1>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-200 drop-shadow-md"
          variants={textVariant(0.5)}
          initial="hidden"
          animate="visible"
        >
          for the Future
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl mb-6 text-gray-300 drop-shadow-md"
          variants={textVariant(0.8)}
          initial="hidden"
          animate="visible"
        >
          Discover AI agents designed to automate and revolutionize industries.
        </motion.p>

        {/* Glowing Button */}
        <motion.button
          className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          variants={textVariant(1)}
          initial="hidden"
          animate="visible"
        >
          Explore AI Agents
        </motion.button>

        {/* Subtext with Glow */}
        <p className="mt-6 text-base text-gray-400 flex items-center justify-center space-x-2">
          <span className="text-blue-400 font-semibold">🚀</span>
          <span className="hover:text-white transition duration-300">
            Powered by <span className="font-bold text-blue-300">Panaversity</span>
          </span>
        </p>
      </div>
    </header>
  );
}
