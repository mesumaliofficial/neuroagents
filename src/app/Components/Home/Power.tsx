"use client";
import { motion } from "framer-motion";
import { AiOutlineRobot, AiOutlineCloud, AiOutlineSafety, AiOutlineThunderbolt } from "react-icons/ai"; 

const powerMotion = (delay: number) => ({
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const cards = [
    { icon: <AiOutlineRobot className="text-cyan-400 w-12 h-12" />, title: "AI-Powered Bots", description: "Advanced AI bots designed for automation and decision-making." },
    { icon: <AiOutlineCloud className="text-cyan-400 w-12 h-12" />, title: "Cloud Integration", description: "Seamless cloud-based AI processing with high performance." },
    { icon: <AiOutlineSafety className="text-cyan-400 w-12 h-12" />, title: "AI Security", description: "Secure AI-driven encryption and fraud detection." },
    { icon: <AiOutlineThunderbolt className="text-cyan-400 w-12 h-12" />, title: "Real-time Processing", description: "High-speed AI computation for instant insights." }
];

const Power = () => {
    return (
        <section className="px-6 md:px-16 py-20 bg-black text-white relative overflow-hidden">
            {/* Subtle Floating Particles Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-96 h-96 bg-cyan-500 blur-[150px] opacity-20 top-10 left-10"></div>
                <div className="absolute w-80 h-80 bg-purple-500 blur-[120px] opacity-20 bottom-10 right-10"></div>
            </div>

            <div className="content text-center my-10">
                <motion.h1
                    className="text-4xl font-extrabold mb-6 drop-shadow-[0_0_10px_rgba(0,255,255,1)]"
                    variants={powerMotion(0.2)}
                    initial="hidden"
                    animate="visible"
                >
                    Powered by Advanced AI
                </motion.h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Built on cutting-edge neural architectures
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative p-6 rounded-lg bg-black/50 border border-cyan-400 shadow-lg backdrop-blur-md 
                        hover:border-cyan-300 hover:shadow-cyan-500/50 transition-transform hover:scale-105"
                        variants={powerMotion(index * 0.2 + 0.4)}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Animated Glowing Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-cyan-900 opacity-20 pointer-events-none"></div>

                        <div className="relative flex items-center gap-4 mb-4">
                            {card.icon}
                            <h1 className="text-2xl font-bold text-white">{card.title}</h1>
                        </div>
                        <p className="text-gray-300 relative">{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Power;
