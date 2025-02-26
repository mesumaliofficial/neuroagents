"use client";
import { motion } from "framer-motion";

const textVariant = (delay: number) => ({
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
});

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const plans = [
  { 
    title: "Starter", 
    price: "$499", 
    features: ["2 AI Agent Intances", "Basic Neural Processing", "24/7 Support", "weekly Analytics", "Basic Integration Support"],
    border: "border-gray-500",
    glow: "shadow-gray-500/50",
  },
  { 
    title: "Professinal", 
    price: "$999", 
    features: ["Advanced AI Agent", "Unlimited Queries", "Priority Support"],
    border: "border-cyan-400",
    glow: "shadow-cyan-400/50",
  },
  { 
    title: "Enterprise", 
    price: "Custom", 
    features: ["Enterprise AI Suite", "Dedicated AI Models", "24/7 Expert Support"],
    border: "border-yellow-400",
    glow: "shadow-yellow-400/50",
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="px-6 md:px-16 py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50 pointer-events-none"></div>

      {/* Heading */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_rgba(0,255,255,1)]"
          variants={textVariant(0.2)}
          initial="hidden"
          animate="visible"
        >
          Choose Your Plan
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          variants={textVariant(0.4)}
          initial="hidden"
          animate="visible"
        >
          Select the perfect AI plan that fits your business needs.
        </motion.p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`p-8 bg-black/50 border ${plan.border} rounded-lg shadow-lg backdrop-blur-md transition-transform hover:scale-105 relative overflow-hidden ${plan.glow}`}
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-cyan-900 opacity-20 pointer-events-none"></div>

            <h1 className="text-xl lg:text-3xl font-bold text-white">{plan.title}</h1>
            <p className="text-3xl font-extrabold text-cyan-400 my-4">{plan.price}</p>

            <ul className="text-gray-300 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm">{feature}</li>
              ))}
            </ul>

            <button className="mt-6 px-6 py-2 bg-cyan-500 text-black font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;