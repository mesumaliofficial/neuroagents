"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const menuItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/feature" },
    { name: "Technology", path: "/technology" },
    { name: "Agents", path: "/agents" },
    { name: "Pricing", path: "/pricing" },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.querySelector(".sidebar");
            if (sidebar && !sidebar.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <div className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-lg transition-all duration-300">
            <div className="container mx-auto px-6 flex items-center justify-between py-4 relative z-10">
                <div className="logo">
                    <Link href="/" className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                        Agentic World
                    </Link>
                </div>
                <button
                    className="lg:hidden text-white hover:scale-105 transition duration-200"
                    onClick={toggleSidebar}
                    aria-label={isOpen ? "Close Menu" : "Open Menu"}
                >
                    {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                </button>
                <ul
                    className={`sidebar lg:flex lg:space-x-8 ${
                        isOpen
                            ? "fixed top-0 left-0 w-72 h-[100vh] bg-gray-900 p-6 flex flex-col items-center space-y-6 transition-transform duration-300 ease-in-out transform translate-x-0"
                            : "hidden lg:flex lg:items-center lg:space-x-8"
                    }`}
                >
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className="text-white hover:text-gray-300 cursor-pointer transition"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex">
                    <button className="uppercase px-6 py-3 bg-gradient-to-r from-gray-200 to-white text-black font-semibold rounded-lg shadow-lg hover:from-gray-300 hover:to-white hover:scale-105 transition-transform duration-300">
                        Contact Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
