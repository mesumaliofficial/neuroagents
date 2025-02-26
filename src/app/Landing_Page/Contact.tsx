import svg_2 from "./images/svg-animation-clip-path.svg";
import Image from "next/image";

const Contact = () => {
    return (
        <section id="contact" className="feature px-6 md:px-16 py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Left Side - Contact Form */}
                <div className="text-center md:text-left">
                    <h1 className="text-white text-4xl font-bold">Get In Touch</h1>
                    <p className="text-gray-300 mt-2">Ready to transform your business with AI?</p>

                    <form className="mt-6 space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        />
                        <textarea
                            rows={4}
                            placeholder="Your Message"
                            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-cyan-500 text-black font-semibold px-5 py-2 rounded-md transition-all duration-300 hover:bg-cyan-400 hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side - Image (Hidden on small screens) */}
                <div className="hidden md:flex justify-end">
                    <Image src={svg_2} alt="Animated SVG"/>
                </div>

            </div>
        </section>
    );
};

export default Contact;
