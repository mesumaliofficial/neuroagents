"use client";
import { motion } from "framer-motion";
import { FaRobot, FaUserSecret, FaHeadSideVirus, FaShieldAlt } from "react-icons/fa";

const textVariant = (delay: number) => ({
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
});

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const agents = [
  { icon: <FaRobot className="text-cyan-400 text-5xl" />, name: "Automation Agent", desc: "AI-driven automation for business tasks & workflows." },
  { icon: <FaUserSecret className="text-cyan-400 text-5xl" />, name: "Security Agent", desc: "AI-powered threat detection & cybersecurity solutions." },
  { icon: <FaHeadSideVirus className="text-cyan-400 text-5xl" />, name: "Healthcare Agent", desc: "Smart AI assistants for medical diagnostics & support." },
  { icon: <FaShieldAlt className="text-cyan-400 text-5xl" />, name: "Financial Agent", desc: "AI-powered fraud detection & financial insights." },
];

const Agents = () => {
  return (
    <section id="agents" className="px-6 md:px-16 py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_rgba(0,255,255,1)]"
          variants={textVariant(0.2)}
          initial="hidden"
          animate="visible"
        >
          Meet Our AI Agents
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          variants={textVariant(0.4)}
          initial="hidden"
          animate="visible"
        >
          Powerful AI agents designed to transform industries with automation, security, and intelligence.
        </motion.p>
      </div>

      {/* Agents Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            className="p-6 bg-black/50 border border-cyan-400 rounded-lg shadow-lg backdrop-blur-md transition-transform hover:scale-105 text-center relative overflow-hidden"
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-cyan-900 opacity-20 pointer-events-none"></div>

            <div className="relative flex flex-col items-center gap-4 mb-4">
              {agent.icon}
              <h2 className="text-xl font-bold text-white">{agent.name}</h2>
            </div>
            <p className="text-gray-300 relative">{agent.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Agents;
