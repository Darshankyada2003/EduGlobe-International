import React from "react";

const PhotoGallery: React.FC = () => {
    return (
        <section className=" bg-[#0B1F3A]/80 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-14 md:py-16">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                            EduGlobe's Photo Gallery
                        </h2>
                        <p className="max-w-3xl">
                            Moments from visa approvals, university acceptances, and student send‑offs.
                            Explore how EduGlobe supports learners from counseling to takeoff.
                        </p>
                    </div>

                    <div className="md:pt-2">
                        <button className="inline-block rounded-md bg-[#ffffff] text-[#0B1F3A]/80 px-5 py-3 text-sm font-semibold hover:bg-[#434447] transition-colors">
                            See All Gallery
                        </button>
                    </div>
                </div>

                {/* Thumbnails */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="h-64 sm:h-72 md:h-80 bg-[#A0A0A0]" ><img src="/student1.jpg" alt="Student visa success" className="w-full h-full object-cover" /></div>
                    <div className="h-64 sm:h-72 md:h-80 bg-[#A0A0A0]" ><img src="/student2.jpg" alt="Counseling session" className="w-full h-full object-cover" /></div>
                    <div className="h-64 sm:h-72 md:h-80 bg-[#A0A0A0]" ><img src="/student3.jpg" alt="University acceptance" className="w-full h-full object-cover" /></div>
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;


