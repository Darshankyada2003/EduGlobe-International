import { Facebook, Twitter, Linkedin, Instagram, CalendarDays, Phone as PhoneIcon, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#0B1F3A] text-gray-300 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
                {/* Logo & Info */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-14 h-12 rounded-full flex items-center justify-center text-[#0B1F3A]">
                            <img src="/sample.png" alt="logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-2xl font-semibold text-white">EduGlobe International</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                        Ahemdabad , Gujrat , India
                    </p>
                    <p className="text-sm mb-1 flex items-center gap-2"><CalendarDays className="w-4 h-4 text-white" /> Monday - Friday / 8AM to 5PM</p>
                    <p className="text-sm mb-4 flex items-center gap-2"><PhoneIcon className="w-4 h-4 text-white" /> +91 70418 30038</p>

                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-4 text-gray-300">
                        <a href="#" className="hover:text-cyan-400"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-cyan-400"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-cyan-400"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-cyan-400"><Instagram className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="md:border-l md:border-white/10 md:pl-8">
                    <h3 className="text-white font-semibold mb-3">Navigation</h3>
                    <div className="h-0.5 w-10 bg-cyan-400/80 mb-4"></div>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>Our Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/team" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>Our Team</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div className="md:border-l md:border-white/10 md:pl-8">
                    <h3 className="text-white font-semibold mb-3">Services</h3>
                    <div className="h-0.5 w-10 bg-cyan-400/80 mb-4"></div>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/student-visa" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>Student Visa</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/visa-consultation" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>Visa Consultation</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/document-prep" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>Document Preparation</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/visa-application" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>Visa Application</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Help */}
                <div className="md:border-l md:border-white/10 md:pl-8">
                    <h3 className="text-white font-semibold mb-3">Help</h3>
                    <div className="h-0.5 w-10 bg-cyan-400/80 mb-4"></div>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/support" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>Customer Support</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/how-it-works" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>How It Works</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>Terms & Condition</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="group inline-flex items-center gap-2 hover:text-cyan-400">
                                <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                                <span>Privacy Policy</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 border-t border-white/10 mt-10 pt-4 text-center text-sm text-gray-400">
                Copyright © {new Date().getFullYear()} <span className="text-white">EduGlobe International</span> | Designed by Dhruv Shah 
            </div>
        </footer>
    );
};

export default Footer;
