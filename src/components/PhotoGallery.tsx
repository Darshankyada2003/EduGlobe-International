import React from "react";

const PhotoGallery: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-14 md:py-16">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mb-3">
                            ImmiGo's Photo Gallery
                        </h2>
                        <p className="text-gray-600 max-w-3xl">
                            At nullam leo consectetur euismod enim. Orci donec sapien et semper
                            fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
                        </p>
                    </div>

                    <div className="md:pt-2">
                        <button className="inline-block rounded-md bg-[#505153] text-white px-5 py-3 text-sm font-semibold hover:bg-[#434447] transition-colors">
                            See All Gallery
                        </button>
                    </div>
                </div>

                {/* Thumbnails */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="h-64 sm:h-72 md:h-80 bg-[#A0A0A0]" />
                    <div className="h-64 sm:h-72 md:h-80 bg-[#A0A0A0]" />
                    <div className="h-64 sm:h-72 md:h-80 bg-[#A0A0A0]" />
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;


