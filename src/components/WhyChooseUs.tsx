import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Clock3, Globe2 } from "lucide-react";

const WhyChooseUs: React.FC = () => {
    return (
        <section className="mt-10 bg-gradient-to-b from-gray-50 to-[#F7F8FB] text-[#0B1F3A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                {/* Left visual */}
                <div className="relative">
                    <motion.div initial={{ scale: 1.02, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[520px] rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5">
                        <img src="/whychoosee.jpg" alt="Students abroad with guidance" className="w-full h-full object-cover" />
                    </motion.div>
                    {/* Floating card */}
                    <motion.div initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} className="hidden sm:flex items-center gap-3 absolute -bottom-6 left-4 bg-white/80 backdrop-blur-md rounded-lg shadow-lg px-4 py-3 ring-1 ring-black/10">
                        <ShieldCheck className="w-6 h-6 text-[#0B1F3A]" />
                        <div>
                            <p className="text-sm font-semibold">Visa Success Focus</p>
                            <p className="text-xs text-gray-600">Strong documentation & interview prep</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right content */}
                <div>
                    <p className="uppercase tracking-wide text-sm text-[#0B1F3A]/70 mb-3">Why Choose Us</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Your Pathway Abroad,
                        <br />
                        Made Simple
                    </h2>
                    <p className="text-gray-600 max-w-2xl mb-8">
                        From university shortlists to visa files and interviews, we simplify every step
                        with expert, on-time guidance tailored to your goals and destination.
                    </p>

                    {/* Feature bullets */}
                    <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-500" />
                            <div>
                                <p className="font-semibold">End-to-end counseling</p>
                                <p className="text-sm text-gray-600">Course, university, SOP, LOR, and visa.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Globe2 className="w-5 h-5 mt-0.5 text-cyan-500" />
                            <div>
                                <p className="font-semibold">Country-specific expertise</p>
                                <p className="text-sm text-gray-600">USA, UK, Canada, Australia, and more.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 mt-0.5 text-cyan-500" />
                            <div>
                                <p className="font-semibold">Strong visa strategy</p>
                                <p className="text-sm text-gray-600">Documentation and mock interview support.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Clock3 className="w-5 h-5 mt-0.5 text-cyan-500" />
                            <div>
                                <p className="font-semibold">Fast, reliable timelines</p>
                                <p className="text-sm text-gray-600">Clear milestones and proactive updates.</p>
                            </div>
                        </li>
                    </ul>

                    {/* Stats refined */}
                    <div className="space-y-6 max-w-xl">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold">Personalized Guidance</span>
                                <span className="text-[#0B1F3A]/70">98%</span>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full w-[98%] bg-[#0B1F3A] rounded-full" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold">Client Satisfaction</span>
                                <span className="text-[#0B1F3A]/70">90%</span>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full w-[90%] bg-cyan-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;


