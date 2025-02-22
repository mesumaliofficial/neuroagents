'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-lg transition-all duration-300">
            <div className="container mx-auto px-6 flex items-center justify-between py-4 relative z-10">
                
                {/* Logo */}
                <div className="logo">
                    <Link href="/" className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white drop-shadow-[3px_0px_3px_rgba(255,255,255,0.7)]">
                        Agentic World
                    </Link>
                </div>

                {/* Desktop Navbar */}
                <ul className="hidden lg:flex space-x-8 font-medium">
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Home</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Features</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Technology</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Agents</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Pricing</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Contact</Link></li>
                </ul>

                {/* Contact Button */}
                <div className="hidden lg:flex">
                    <button className="uppercase px-6 py-3 bg-gradient-to-r from-gray-200 to-white text-black font-semibold rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:from-gray-300 hover:to-white hover:scale-105 transition-transform duration-300">
                        Launch Console
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <button className="lg:hidden text-white hover:scale-105 transition duration-200" onClick={() => setIsOpen(true)}>
                    <HiMenu size={28} />
                </button>

                {/* Sidebar Backdrop */}
                {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}

                {/* Mobile Sidebar */}
                <div className={`fixed top-0 left-0 w-64 h-screen bg-gray-900 p-6 z-50 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`}>
                    
                    {/* Close Button */}
                    <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
                        <HiX size={28} />
                    </button>

                    <ul className="mt-12 space-y-6">
                        <li><Link href="#" className="text-white block text-lg">Home</Link></li>
                        <li><Link href="#" className="text-white block text-lg">Features</Link></li>
                        <li><Link href="#" className="text-white block text-lg">Technology</Link></li>
                        <li><Link href="#" className="text-white block text-lg">Agents</Link></li>
                        <li><Link href="#" className="text-white block text-lg">Pricing</Link></li>
                        <li><Link href="#" className="text-white block text-lg">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
