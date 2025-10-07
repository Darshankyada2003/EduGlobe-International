import { useState } from "react";
import { ArrowUp, ArrowRight, CheckCircle2 } from "lucide-react";
const VisionSection = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);
    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? -1 : index));
    };
    return (
        <section className=" mt-10 bg-gradient-to-b from-white to-[#F7F8FB] relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 pt-10 md:pt-28 lg:pt-36 pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
                <div className="md:mt-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mb-4">
                        Vision & Values That Power
                        <br /> EduGlobe
                    </h2>

                    <p className="text-gray-600 mb-6 max-w-2xl">
                        We exist to make global education accessible. By combining ethical guidance with
                        country‑specific expertise, we help students choose the right program, build strong
                        applications, and secure visas with confidence.
                    </p>

                    {/* Quick highlights */}
                    <ul className="grid sm:grid-cols-2 gap-4 mb-6">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-500" />
                            <span className="text-[#0B1F3A]">Transparent, student‑first guidance</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-500" />
                            <span className="text-[#0B1F3A]">End‑to‑end support: course to visa</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-500" />
                            <span className="text-[#0B1F3A]">Country expertise: US, UK, CA, AU & more</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-500" />
                            <span className="text-[#0B1F3A]">Proactive timelines and clear milestones</span>
                        </li>
                    </ul>

                    {/* Accordions */}
                    <div className="divide-y rounded-md border border-[#0B1F3A]/10 bg-white">
                        <div className="">
                            <button onClick={() => toggle(0)} className="w-full flex items-center justify-between text-left py-4 px-4">
                                <span className="flex items-center gap-3">
                                    <ArrowUp className="w-4 h-4 text-[#0B1F3A]" />
                                    <span className="font-semibold text-[#0B1F3A]">Our Vision</span>
                                </span>
                                <span className="text-sm text-gray-500">{openIndex === 0 ? "Hide" : "Show"}</span>
                            </button>
                            {openIndex === 0 && (
                                <p className="text-gray-600 pb-5 px-4">
                                    Empower every student to study where they belong—through honest advice,
                                    high‑quality applications, and reliable visa success.
                                </p>
                            )}
                        </div>

                        <div className="">
                            <button onClick={() => toggle(1)} className="w-full flex items-center justify-between text-left py-4 px-4">
                                <span className="flex items-center gap-3">
                                    <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
                                    <span className="font-semibold text-[#0B1F3A]">Our Mission</span>
                                </span>
                                <span className="text-sm text-gray-500">{openIndex === 1 ? "Hide" : "Show"}</span>
                            </button>
                            {openIndex === 1 && (
                                <p className="text-gray-600 pb-5 px-4">
                                    Provide end‑to‑end, ethical counseling that simplifies choices, strengthens
                                    documentation, and streamlines timelines from application to arrival.
                                </p>
                            )}
                        </div>

                        <div className="">
                            <button onClick={() => toggle(2)} className="w-full flex items-center justify-between text-left py-4 px-4">
                                <span className="flex items-center gap-3">
                                    <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
                                    <span className="font-semibold text-[#0B1F3A]">Our Values</span>
                                </span>
                                <span className="text-sm text-gray-500">{openIndex === 2 ? "Hide" : "Show"}</span>
                            </button>
                            {openIndex === 2 && (
                                <p className="text-gray-600 pb-5 px-4">
                                    Integrity, ownership, and clarity. We advise what’s best for you, not
                                    just what’s available—backed by transparent communication.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                        <a href="#contact" className="inline-block bg-gray-200 hover:bg-gray-300 text-[#0B1F3A] px-5 py-3 rounded-md font-medium text-center">Book Free Counseling</a>
                        <a href="#services" className="inline-block bg-white text-[#0B1F3A] px-5 py-3 rounded-md font-medium border border-[#0B1F3A]/20 hover:bg-gray-50 text-center">Explore Services</a>
                    </div>

                    {/* Logos row */}
                  
                </div>

                <div className="relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[520px] md:mt-6">
                    <img
                        src="/Unveiling.jpg"
                        alt="Unveiling the Vision and Values of EduGlobe"
                        className="absolute inset-0 h-full w-full object-cover rounded-xl shadow-xl ring-1 ring-black/5"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-xl" />
                </div>
            </div>
        </section>
    );
};

export default VisionSection;


