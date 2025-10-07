import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Topbar */}
            <div className={`${scrolled ? "bg-[#0B1F3A]/80 backdrop-blur-md" : "bg-[#0B1F3A]/80"} w-full text-white text-xs sm:text-sm flex flex-col sm:flex-row sm:justify-between items-center gap-1 sm:gap-0 px-4 sm:px-6 lg:px-10 xl:px-16 py-2 transition-colors duration-200`}>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-white" /> Need Quick Response? Call India +91 70418 30038</p>
                <p>Monday - Friday / 8AM to 5PM</p>
            </div>

            {/* Navbar */}
            <nav className={`${scrolled ? "bg-[#0B1F3A]/80 backdrop-blur-md" : "bg-[#0B1F3A]/80"} text-white transition-colors duration-200`}>
                <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 xl:px-16 py-4  " >
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className=" rounded-full"><img src="/sample.png" alt="logo" className="w-14 h-12 object-cover" /></div>
                        <span className="font-semibold text-lg">EduGlobe International</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-6 text-sm font-medium">
                        <li><Link to="/" className="hover:text-[#4596ff]">Home</Link></li>
                        <li><Link to="/about" className="hover:text-[#4596ff]">Study Destinations</Link></li>
                        <li><Link to="/services" className="hover:text-[#4596ff]">Services</Link></li>
                        <li><Link to="/page" className="hover:text-[#4596ff]">Company</Link></li>
                        <li><Link to="/contact" className="hover:text-[#4596ff]">Contact Us</Link></li>
                    </ul>

                    {/* Desktop CTA */}
                    <Link
                        to="/get-started"
                        className="hidden md:inline-block bg-gray-200 hover:bg-gray-300 text-[#0B1F3A] px-4 py-2 rounded-md font-medium shadow"
                    >
                        Book Online Conselling
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        aria-label="Toggle Menu"
                        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-white/10 hover:bg-white/20"
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-white/20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-3 flex flex-col gap-3">
                            <Link to="/" className="py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/about" className="py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Study Destinations</Link>
                            <Link to="/services" className="py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Services</Link>
                            <Link to="/page" className="py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Company</Link>
                            <Link to="/contact" className="py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact Us</Link>
                            <Link
                                to="/get-started"
                                className="mt-2 bg-gray-200 hover:bg-gray-300 text-[#0B1F3A] px-4 py-2 rounded-md font-medium shadow text-center"
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
