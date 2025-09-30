const VisionSection = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
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
                                <span className="text-gray-700">↑</span>
                                <span className="font-semibold text-gray-900">Our Vision</span>
                            </button>
                            <p className="text-gray-600 pb-5">
                                At nullam leo consectetur euismod enim. Orci donec sapien et semper
                                fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
                            </p>
                        </div>

                        <div className="border-b">
                            <button className="w-full flex items-center gap-3 text-left py-4">
                                <span className="text-gray-700">→</span>
                                <span className="font-semibold text-gray-900">Our Value</span>
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

                <div className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[520px] bg-[#939393]"></div>
            </div>
        </section>
    );
};

export default VisionSection;


