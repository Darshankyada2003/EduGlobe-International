import React from "react";

const WhyChooseUs: React.FC = () => {
    return (
        <section className="bg-[#0B1F3A]/80 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                {/* Left visual placeholder (image/video) */}
                <div className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[520px] bg-white/30" />

                {/* Right content */}
                <div>
                    <p className="uppercase tracking-wide text-sm text-gray-200 mb-3">Why Choose Us</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                        The Benefits of ImmiGo's
                        <br />
                        Expertise
                    </h2>
                    <p className="text-gray-300 max-w-2xl mb-10">
                        At nullam leo consectetur euismod enim. Orci donec sapien et semper fringilla
                        pellentesque in diam mi. Pulvinar ante sed velit ac nibh. Amet duis orci nibh
                        nullam. Phasellus suspendisse ornare arcu eu orci urna justo.
                    </p>

                    {/* Stats */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-[1fr_auto] items-center gap-6">
                            <span className="font-semibold">Personalized Service</span>
                            <span className="text-gray-200">98%</span>
                            <div className="col-span-2 flex items-center gap-3">
                                <div className="h-3 w-24 bg-white/20" />
                                <div className="h-3 w-2 bg-white" />
                            </div>
                        </div>

                        <div className="grid grid-cols-[1fr_auto] items-center gap-6">
                            <span className="font-semibold">Customer Satisfaction</span>
                            <span className="text-gray-200">90%</span>
                            <div className="col-span-2">
                                <div className="h-4 bg-[#141824] w-full max-w-xs">
                                    <div className="h-4 bg-[#0B1F3A] w-[90%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;


