import { ArrowUp, ArrowRight } from "lucide-react";
const VisionSection = () => {
    return (
        <section className="bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 pt-8 md:pt-32 lg:pt-40 pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start -mt-6 md:-mt-0">
                <div className="md:mt-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mb-6">
                        Unveiling the Vision and
                        <br /> Values of EduGlobe 
                    </h2>

                    <p className="text-gray-600 mb-8 max-w-2xl">
                        At nullam leo consectetur euismod enim. Orci donec sapien et semper fringilla
                        pellentesque in diam mi. Pulvinar ante sed velit ac nibh. Amet duis orci nibh
                        nullam. Phasellus suspendisse ornare arcu eu orci urna justo.
                    </p>

                    {/* Accordions */}
                    <div className="space-y-5">
                        <div className="border-b">
                            <button className="w-full flex items-center gap-3 text-left py-4">
                                <ArrowUp className="w-4 h-4 text-[#0B1F3A]" />
                                <span className="font-semibold text-[#0B1F3A]">Our Vision</span>
                            </button>
                            <p className="text-gray-600 pb-5">
                                At nullam leo consectetur euismod enim. Orci donec sapien et semper
                                fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
                            </p>
                        </div>

                        <div className="border-b">
                            <button className="w-full flex items-center gap-3 text-left py-4">
                                <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
                                <span className="font-semibold text-[#0B1F3A]">Our Value</span>
                            </button>
                        </div>
                    </div>

                    {/* Logos row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mt-10 md:mt-12 items-center text-gray-400">
                        <div className="justify-self-center">ULTRA</div>
                        <div className="justify-self-center">QC</div>
                        <div className="justify-self-center">POWER XR2</div>
                        <div className="justify-self-center">MEGA</div>
                        <div className="justify-self-center">logoipsum</div>
                    </div>
                </div>

                <div className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[520px] bg-[#0B1F3A]/10 md:mt-10 border border-[#0B1F3A]/20"></div>
            </div>
        </section>
    );
};

export default VisionSection;


