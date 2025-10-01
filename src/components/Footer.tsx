import { Facebook, Twitter, Linkedin, Instagram, Plane, CalendarDays, Phone as PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#0B1F3A] text-gray-300 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Info */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-[#F4B400] rounded-full flex items-center justify-center text-[#0B1F3A]">
                            <Plane className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-semibold text-white">EduGlobe International</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                        Jl Danau Bratan H2/E61A, Kedungkandang, Malang City, East Java 65139
                    </p>
                    <p className="text-sm mb-1 flex items-center gap-2"><CalendarDays className="w-4 h-4 text-[#F4B400]" /> Monday - Friday / 8AM to 5PM</p>
                    <p className="text-sm mb-4 flex items-center gap-2"><PhoneIcon className="w-4 h-4 text-[#F4B400]" /> +1 (333) 000-0000</p>

                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-4 text-gray-300">
                        <a href="#" className="hover:text-[#F4B400]"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-[#F4B400]"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-[#F4B400]"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-[#F4B400]"><Instagram className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-[#F4B400]">Home</Link></li>
                        <li><Link to="/about" className="hover:text-[#F4B400]">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-[#F4B400]">Our Services</Link></li>
                        <li><Link to="/team" className="hover:text-[#F4B400]">Our Team</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/student-visa" className="hover:text-[#F4B400]">Student Visa</Link></li>
                        <li><Link to="/visa-consultation" className="hover:text-[#F4B400]">Visa Consultation</Link></li>
                        <li><Link to="/document-prep" className="hover:text-[#F4B400]">Document Preparation</Link></li>
                        <li><Link to="/visa-application" className="hover:text-[#F4B400]">Visa Application</Link></li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Help</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/support" className="hover:text-[#F4B400]">Customer Support</Link></li>
                        <li><Link to="/how-it-works" className="hover:text-[#F4B400]">How It Works</Link></li>
                        <li><Link to="/terms" className="hover:text-[#F4B400]">Terms & Condition</Link></li>
                        <li><Link to="/privacy" className="hover:text-[#F4B400]">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 border-t border-white/10 mt-10 pt-4 text-center text-sm text-gray-400">
                Copyright © {new Date().getFullYear()} <span className="text-white">EduGlobe International</span> | Designed by TokoTema
            </div>
        </footer>
    );
};

export default Footer;
