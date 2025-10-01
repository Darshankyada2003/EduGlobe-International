const Hero = () => {
  return (
    <section className="container bg-[#939393] text-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 text-center md:text-left ">
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
          <button className="px-6 py-3 mt-10 md:mt-0 bg-[#555555] text-white rounded-md font-medium">
            Apply Now
          </button>
          <button className="px-6 py-3 bg-white text-gray-800 rounded-md hover:bg-gray-200 font-medium">
            About Us
          </button>
        </div>

      {/* Bottom Cards Section */}
      {/* </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-center"> */}
        {/* Card 1 */}
        {/* <div className="bg-white text-gray-800 p-8 md:p-10 flex flex-col items-center">
          <span className="text-3xl mb-4">👤</span>
          <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
          <p className="text-gray-600 text-sm">
            Posuere sed eu proin elementum nulla. Sed non blandit auctor
            consequat sit orci sem.
          </p>
        </div> */}

        {/* Card 2 (Dark background) */}
        {/* <div className="bg-[#555555] text-white p-8 md:p-10 flex flex-col items-center">
          <span className="text-3xl mb-4">⚙️</span>
          <h3 className="font-semibold text-lg mb-2">Tailored Solutions</h3>
          <p className="text-gray-300 text-sm">
            Posuere sed eu proin elementum nulla. Sed non blandit auctor
            consequat sit orci sem.
          </p>
        </div> */}

        {/* Card 3 */}
        {/* <div className="bg-white text-gray-800 p-8 md:p-10 flex flex-col items-center">
          <span className="text-3xl mb-4">👍</span>
          <h3 className="font-semibold text-lg mb-2">Streamlined Process</h3>
          <p className="text-gray-600 text-sm">
            Posuere sed eu proin elementum nulla. Sed non blandit auctor
            consequat sit orci sem.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
