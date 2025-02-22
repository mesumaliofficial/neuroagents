'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="navbar bg-black py-2 transition-all duration-300 hover:shadow-md sticky top-0 z-50 border-b border-gray-800">
                <div className="container mx-auto px-6 flex items-center justify-between lg:justify-normal">
                    
                    {/* Logo Text */}
                    <div className="logo flex items-center">
                        <Link href="/" className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                            Agentic World
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button className="lg:hidden text-yellow-400 hover:scale-105 transition duration-200"
                        onClick={() => setIsOpen(true)}>
                        <HiMenu size={28} />
                    </button>

                    {/* Sidebar Backdrop */}
                    {isOpen && (
                        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
                    )}

                    {/* Sidebar Menu */}
                    <ul className={`capitalize lg:flex lg:space-x-6 lg:text-[16px] font-[500] list-none lg:pl-20 lg:relative lg:flex-row flex-col items-center fixed top-0 left-0 w-64 h-max ${isOpen ? "min-h-[550px]" : "h-auto"} bg-gray-900 lg:bg-transparent shadow-lg lg:shadow-none transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:w-auto lg:h-auto lg:space-y-0 space-y-6 pt-20 lg:pt-0 fixed z-50 pl-8`}>
                        
                        {/* Close Button for Mobile */}
                        <button className="lg:hidden absolute top-4 right-4 text-yellow-400" onClick={() => setIsOpen(false)}>
                            <HiX size={28} />
                        </button>

                        <li><Link href="#" className="text-yellow-400 font-[700] border-b-2 border-yellow-400 pb-1">Home</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition duration-200">Features</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition duration-200">Technology</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition duration-200">Agents</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition duration-200">Pricing</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition duration-200">Contact</Link></li>
                    </ul>

                    {/* Contact Button */}
                    <div className="hidden lg:flex lg:ml-auto">
                        <button className="uppercase px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold rounded-lg shadow-md hover:from-yellow-600 hover:to-orange-700 hover:scale-105 transition-transform duration-300">
                            Launch Console
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
