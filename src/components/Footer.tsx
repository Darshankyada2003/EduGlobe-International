import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#555555] text-gray-300 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Info */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                            ✈
                        </div>
                        <span className="text-2xl font-semibold text-white">EduGlobe International</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                        Jl Danau Bratan H2/E61A, Kedungkandang, Malang City, East Java 65139
                    </p>
                    <p className="text-sm mb-1">📅 Monday - Friday / 8AM to 5PM</p>
                    <p className="text-sm mb-4">📞 +1 (333) 000-0000</p>

                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-4 text-gray-300">
                        <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
                        <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-yellow-400"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                        <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-yellow-400">Our Services</Link></li>
                        <li><Link to="/team" className="hover:text-yellow-400">Our Team</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/student-visa" className="hover:text-yellow-400">Student Visa</Link></li>
                        <li><Link to="/visa-consultation" className="hover:text-yellow-400">Visa Consultation</Link></li>
                        <li><Link to="/document-prep" className="hover:text-yellow-400">Document Preparation</Link></li>
                        <li><Link to="/visa-application" className="hover:text-yellow-400">Visa Application</Link></li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Help</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/support" className="hover:text-yellow-400">Customer Support</Link></li>
                        <li><Link to="/how-it-works" className="hover:text-yellow-400">How It Works</Link></li>
                        <li><Link to="/terms" className="hover:text-yellow-400">Terms & Condition</Link></li>
                        <li><Link to="/privacy" className="hover:text-yellow-400">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
                Copyright © {new Date().getFullYear()} <span className="text-white">EduGlobe International</span> | Designed by TokoTema
            </div>
        </footer>
    );
};

export default Footer;
