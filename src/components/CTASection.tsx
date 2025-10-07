import React from "react";

const CTASection: React.FC = () => {
    return (
        <section className="bg-[#0B1F3A]/80 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 md:py-24 text-center">
                <p className="uppercase text-xs sm:text-sm tracking-wide mb-4">Unlock Your Immigration Potential</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Take the First Step Towards
                    <br />
                    Your Immigration Goals
                </h2>
                <p className="text-gray-100/90 max-w-4xl mx-auto mb-10">
                    Talk to an expert counselor about programs, admissions timelines, and visa strategy.
                    Get a personalized roadmap for your study abroad plan in minutes.
                </p>
                <div>
                    <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-gray-200 hover:bg-gray-300 text-[#0B1F3A] font-semibold">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;


