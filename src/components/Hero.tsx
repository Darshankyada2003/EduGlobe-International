import { User, Settings, ThumbsUp } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative w-full bg-[url('/Globe.jpg')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-[#0B1F3A]/80" aria-hidden="true"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 text-center md:text-left ">
        {/* Top Line */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full">
            <p className="uppercase text-sm font-semibold mb-2">
              EduGlobe VISA SOLUTION
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
              Unlock Your Global Journey <br /> with EduGlobe Visa Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-gray-200 mb-8 max-w-xl">
              Posuere sed eu proin elementum nulla. Sed non blandit auctor
              consequat sit orci sem. Ultrices adipiscing dictumst purus
              convallis. Convallis imperdiet risus turpis turpis molestie erat
              viverra. Amet turpis nunc facilisis turpis dui cras nunc.
            </p>
          </div>

          <div className="w-full">
            <img src="/map.png" className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain mx-auto" alt="globe" />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 mt-10 md:mt-0 bg-[#F4B400] text-[#0B1F3A] rounded-md font-medium hover:bg-[#e2a800]">
            Apply Now
          </button>
          <button className="px-6 py-3 bg-white text-[#0B1F3A] rounded-md hover:bg-gray-200 font-medium">
            About Us
          </button>
        </div>

        {/* Bottom Cards Section */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-center mt-10 md:mt-14 md:-mb-24 lg:-mb-32 relative z-20">
        {/* Card 1 */}
        <div className="bg-white text-gray-800 p-8 md:p-10 flex flex-col items-center shadow-md">
          <User className="w-8 h-8 mb-4 text-[#0B1F3A]" />
          <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
          <p className="text-gray-600 text-sm">
            Posuere sed eu proin elementum nulla. Sed non blandit auctor
            consequat sit orci sem.
          </p>
        </div>

        {/* Card 2 (Dark background) */}
        <div className="bg-[#0B1F3A] text-white p-8 md:p-10 flex flex-col items-center shadow-lg">
          <Settings className="w-8 h-8 mb-4 text-[#F4B400]" />
          <h3 className="font-semibold text-lg mb-2">Tailored Solutions</h3>
          <p className="text-gray-200 text-sm">
            Posuere sed eu proin elementum nulla. Sed non blandit auctor
            consequat sit orci sem.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-gray-800 p-8 md:p-10 flex flex-col items-center shadow-md">
          <ThumbsUp className="w-8 h-8 mb-4 text-[#0B1F3A]" />
          <h3 className="font-semibold text-lg mb-2">Streamlined Process</h3>
          <p className="text-gray-600 text-sm">
            Posuere sed eu proin elementum nulla. Sed non blandit auctor
            consequat sit orci sem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
