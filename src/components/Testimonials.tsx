import React from "react";
import { Quote } from "lucide-react";

const Testimonials: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-[#F7F8FB]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-14 md:py-16">
                <div className="max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight">
                        Trusted by Students Across India
                    </h2>
                    <p className="text-gray-600 mt-3">
                        Real experiences from learners who moved abroad with our end‑to‑end guidance.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                        <Quote className="w-6 h-6 text-cyan-500" />
                        <p className="text-gray-700 mt-3">
                            EduGlobe helped me shortlist universities and refine my SOP. The process felt
                            simple and transparent, and I received admits from two top choices.
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                                <img src="/student1.jpg" alt="Aarav Sharma" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-semibold text-[#0B1F3A]">Aarav Sharma</p>
                                <p className="text-sm text-gray-500">Ahmedabad, India · MS in CS (USA)</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                        <Quote className="w-6 h-6 text-cyan-500" />
                        <p className="text-gray-700 mt-3">
                            Great guidance for my Canadian study visa—clear timelines and mock interviews
                            boosted my confidence. My visa was approved without any hassle.
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                                <img src="/student2.jpg" alt="Diya Patel" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-semibold text-[#0B1F3A]">Diya Patel</p>
                                <p className="text-sm text-gray-500">Vadodara, India · Canada Student Visa</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                        <Quote className="w-6 h-6 text-cyan-500" />
                        <p className="text-gray-700 mt-3">
                            From shortlisting to visa filing, the team supported me at every step. The
                            communication was timely, and the documentation checklist was spot on.
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                                <img src="/student3.jpg" alt="Ishaan Verma" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-semibold text-[#0B1F3A]">Ishaan Verma</p>
                                <p className="text-sm text-gray-500">Pune, India · MSc Data (UK)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;


