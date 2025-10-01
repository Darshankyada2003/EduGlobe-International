import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Topbar */}
            <div className="w-full bg-gray-100 text-gray-600 text-xs sm:text-sm flex flex-col sm:flex-row sm:justify-between items-center gap-1 sm:gap-0 px-4 sm:px-6 lg:px-10 xl:px-16 py-2">
                <p>📞 Need Quick Response? Call US +1 (333) 000-0000</p>
                <p>Monday - Friday / 8AM to 5PM</p>
            </div>

            {/* Navbar */}
            <nav className="bg-[#939393] text-white shadow-sm">
                <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 xl:px-16 py-4  " >
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                        <span className="font-semibold text-lg">EduGlobe International</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-6 text-sm font-medium">
                        <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
                        <li><Link to="/about" className="hover:text-gray-900">Study Destinations</Link></li>
                        <li><Link to="/services" className="hover:text-gray-900">Services</Link></li>
                        <li><Link to="/page" className="hover:text-gray-900">Company</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-900">Contact Us</Link></li>
                    </ul>

                    {/* Desktop CTA */}
                    <Link
                        to="/get-started"
                        className="hidden md:inline-block bg-white text-gray-800 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
                    >
                        Book Online Conselling
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        aria-label="Toggle Menu"
                        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-white/10 hover:bg-white/20"
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-white/20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-3 flex flex-col gap-3">
                            <Link to="/" className="py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/about" className="py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Study Destinations</Link>
                            <Link to="/services" className="py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Services</Link>
                            <Link to="/page" className="py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Company</Link>
                            <Link to="/contact" className="py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact Us</Link>
                            <Link
                                to="/get-started"
                                className="mt-2 bg-white text-gray-800 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200 text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
