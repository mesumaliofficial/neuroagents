'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-lg' : 'bg-transparent'}`}>
            {/* Gradient Background for Moon-Like Effect */}
            <div className="absolute inset-0 w-full h-full bg-black/60"></div>

            {/* Navbar Content */}
            <div className="container mx-auto px-6 flex items-center justify-between py-4 relative z-10">
                
                {/* Logo Text */}
                <div className="logo flex items-center">
                    <Link href="/" className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white/70 to-gray-200">
                        Agentic World
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button className="lg:hidden text-white hover:scale-105 transition duration-200" onClick={() => setIsOpen(true)}>
                    <HiMenu size={28} />
                </button>

                {/* Sidebar Backdrop */}
                {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}

                {/* Sidebar Menu */}
                <ul className={`capitalize lg:flex lg:space-x-6 font-medium list-none lg:pl-20 lg:relative lg:flex-row flex-col items-center fixed top-0 left-0 w-64 ${isOpen ? "h-screen" : "h-auto"} bg-gray-100 lg:bg-transparent shadow-lg lg:shadow-none transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:w-auto lg:h-auto lg:space-y-0 space-y-6 pt-20 lg:pt-0 fixed z-50 pl-8`}>
                    
                    {/* Close Button for Mobile */}
                    <button className="lg:hidden absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
                        <HiX size={28} />
                    </button>

                    <li><Link href="#" className="text-white font-bold border-b-2 border-white pb-1">Home</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Features</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Technology</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Agents</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Pricing</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-300 transition duration-200">Contact</Link></li>
                </ul>

                {/* Contact Button */}
                <div className="hidden lg:flex lg:ml-auto">
                    <button className="uppercase px-6 py-3 bg-gradient-to-r from-gray-200 to-white text-black font-semibold rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:from-gray-300 hover:to-white hover:scale-105 transition-transform duration-300">
                        Launch Console
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
