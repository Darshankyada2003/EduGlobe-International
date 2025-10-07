import React from "react";

const Testimonials: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-14 md:py-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mb-8">
                    What Our Clients Say
                </h2>

                {/* Big testimonial media/card placeholder */}
                <div className="h-64 sm:h-80 md:h-[420px] bg-[#9A9A9A]" />

                {/* Avatars + quotes */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-full bg-[#8C8C8C]" />
                            <p className="text-gray-600">
                                Integer platea pellentesque phasellus risus convallis sapien vel.
                            </p>
                        </div>
                        <p className="mt-3 font-semibold text-[#0B1F3A]">Luis August</p>
                    </div>

                    <div>
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-full bg-[#8C8C8C]" />
                            <p className="text-gray-600">
                                Integer platea pellentesque phasellus risus convallis sapien vel.
                            </p>
                        </div>
                        <p className="mt-3 font-semibold text-[#0B1F3A]">Dennis Samuel</p>
                    </div>

                    <div>
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-full bg-[#8C8C8C]" />
                            <p className="text-gray-600">
                                Integer platea pellentesque phasellus risus convallis sapien vel.
                            </p>
                        </div>
                        <p className="mt-3 font-semibold text-[#0B1F3A]">Bobbie Claire</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;


