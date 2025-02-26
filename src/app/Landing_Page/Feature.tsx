"use client";

import { motion } from "framer-motion";
import { FaRobot, FaSearch, FaShieldAlt, FaBrain, FaServer, FaChartBar } from "react-icons/fa";

const textVariant = (delay: number) => ({
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
});

const features = [
  { icon: <FaRobot size={40} />, title: "Autonomous AI Agents", desc: "Self-operating AI handling complex tasks efficiently." },
  { icon: <FaSearch size={40} />, title: "Intelligent Search", desc: "AI-powered search with context-aware results." },
  { icon: <FaShieldAlt size={40} />, title: "Secure & Encrypted AI", desc: "End-to-end encrypted AI for data safety." },
  { icon: <FaBrain size={40} />, title: "Real-Time Decision Making", desc: "AI models processing data in real-time." },
  { icon: <FaServer size={40} />, title: "Scalable AI Infrastructure", desc: "AI that adapts to your business growth." },
  { icon: <FaChartBar size={40} />, title: "AI-Powered Analytics", desc: "Smart AI analytics for better decision-making." },
];

const Feature = () => {
  return (
    <section id="feature" className="feature px-6 md:px-16 py-24 bg-black">
      <div className="content text-center my-14">
        <motion.h1
          className="text-4xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_rgba(0,255,255,1)]"
          variants={textVariant(0.2)}
          initial="hidden"
          animate="visible"
        >
          Enterprise AI Agents
        </motion.h1>
        <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto">
          Discover the powerful capabilities of our AI-driven platform, designed to revolutionize automation and decision-making.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative group p-6 rounded-xl text-white shadow-lg transition-all duration-300 
            bg-black/40 border border-gray-700 backdrop-blur-xl 
            hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.7)]
            before:absolute before:inset-0 before:bg-gradient-to-r from-cyan-400 to-blue-500 before:opacity-10 before:rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="text-cyan-300 text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
