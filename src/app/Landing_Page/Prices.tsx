"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

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
    features: [
      "2 AI Agent Instances",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Analytics",
      "Basic Integration Support",
    ],
  },
  {
    title: "Professional",
    price: "$999",
    features: [
      "10 AI Agent Instances",
      "Advanced Neural Networks",
      "Priority Support",
      "Real-time Analytics",
      "Custom Integration",
      "API Access",
      "Advanced Security",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Agents",
      "Full Neural Suite",
      "Advanced Analytics Dashboard",
      "Custom Development",
      "Full API Access",
      "Enterprise Security",
      "Custom Training",
    ],
  },
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
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className="border border-cyan-700 rounded-lg p-6 bg-gray-900 shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col h-full"
            variants={cardVariant}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-2xl font-bold py-2 text-white">{plan.title}</h1>
            <h2 className="text-3xl font-semibold mt-3 text-cyan-400">
              {plan.price} <span className="text-base text-gray-400">/month</span>
            </h2>
            <ul className="mt-4 space-y-3 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white">
                  <FaCheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {/* Button Alignment Fix */}
            <div className="flex justify-center mt-6 ">
              <button className="bg-cyan-500 text-black font-semibold px-16 py-3 rounded-md transition-all duration-300 hover:bg-cyan-400 hover:scale-105">
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
