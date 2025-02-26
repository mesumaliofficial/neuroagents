"use client";
import { motion } from "framer-motion";
import { FaBrain, FaCodeBranch, FaMicrochip, FaCloud } from "react-icons/fa";

const textVariant = (delay: number) => ({
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
});

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const technologies = [
  { icon: <FaBrain className="text-cyan-400 text-5xl" />, title: "Neural Networks", desc: "Deep learning models for advanced AI capabilities." },
  { icon: <FaCodeBranch className="text-cyan-400 text-5xl" />, title: "AI Algorithms", desc: "Optimized AI frameworks ensuring high performance." },
  { icon: <FaMicrochip className="text-cyan-400 text-5xl" />, title: "Edge AI Processing", desc: "Faster computations with low latency at the edge." },
  { icon: <FaCloud className="text-cyan-400 text-5xl" />, title: "Cloud AI", desc: "AI-powered cloud solutions for scalable deployments." },
];

const Technology = () => {
  return (
    <section id="technology" className="px-6 md:px-16 py-24 bg-black relative overflow-hidden">
      {/* Subtle Animated Background Effect */}
      <div className="absolute inset-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_rgba(0,255,255,1)]"
          variants={textVariant(0.2)}
          initial="hidden"
          animate="visible"
        >
          Powered by Advanced AI
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          variants={textVariant(0.4)}
          initial="hidden"
          animate="visible"
        >
          Built on cutting-edge neural architectures and optimized AI frameworks.
        </motion.p>
      </div>

      {/* Technology Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="p-6 bg-black/50 border border-cyan-400 rounded-lg shadow-lg backdrop-blur-md transition-transform hover:scale-105 text-center"
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            <div className="mb-4">{tech.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{tech.title}</h2>
            <p className="text-gray-300">{tech.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
