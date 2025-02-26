"use client";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const footerMotion = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const Footer = () => {
    return (
        <motion.footer 
            initial="hidden" 
            animate="visible" 
            variants={footerMotion}
            className="relative bg-black text-white py-12 px-6 md:px-16"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                
                {/* Logo & Description */}
                <div>
                    <h1 className="text-3xl font-extrabold text-white">Agentic World</h1>
                    <p className="mt-2 text-gray-400 text-sm">Next-generation AI agents powering the future of enterprise intelligence.</p>
                    
                    {/* Social Icons */}
                    <div className="mt-6 flex space-x-6">
                        <motion.a 
                            whileHover={{ scale: 1.2, rotate: 10 }} 
                            href="#" 
                            className="text-white text-3xl transition"
                        >
                            <AiFillGithub />
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.2, rotate: 10 }} 
                            href="#" 
                            className="text-white text-3xl transition"
                        >
                            <AiFillTwitterCircle />
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.2, rotate: 10 }} 
                            href="#" 
                            className="text-white text-3xl transition"
                        >
                            <AiFillLinkedin />
                        </motion.a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
                    <ul className="text-gray-400 space-y-2">
                        {["Home", "AI Agents", "Pricing", "Blog", "Contact"].map((link, index) => (
                            <motion.li key={index} whileHover={{ x: 5, color: "#FFFFFF" }}>
                                <a href="#" className="hover:text-white transition">{link}</a>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Resources</h2>
                    <ul className="text-gray-400 space-y-2">
                        {["Docs", "API Reference", "Tutorials", "AI Use Cases"].map((link, index) => (
                            <motion.li key={index} whileHover={{ x: 5, color: "#FFFFFF" }}>
                                <a href="#" className="hover:text-white transition">{link}</a>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Contact</h2>
                    <p className="text-gray-400">Email: syedmesumjaffary@gmail.com</p>
                    <p className="text-gray-400">Phone: +92-331-2096750</p>
                    <p className="text-gray-400">Location: AI Innovation Hub, Silicon Valley</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © 2025 Agentic World. All Rights Reserved.
            </div>
        </motion.footer>
    );
};

export default Footer;
