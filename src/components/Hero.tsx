import { User, Settings, ThumbsUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  return (
    <section ref={ref} className="relative w-full bg-[url('/Globe.jpg')] bg-cover bg-center text-white">
      <motion.div style={{ y: overlayY }} className="absolute inset-0 bg-[#0B1F3A]/80" aria-hidden="true"></motion.div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 text-center md:text-left ">
        {/* Top Line */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full">
            <p className="uppercase text-sm font-semibold mb-2">
              EduGlobe VISA SOLUTION
            </p>

            {/* Title */}
            <motion.h1
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 text-white "
            >
              Unlock Your Global Journey <br /> with EduGlobe Visa Solutions
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="text-gray-200 mb-8 max-w-xl"
            >
              Expert counseling for study visas and admissions across the US, UK,
              Canada, Australia and more. From shortlisting to visa interviews,
              we make your global journey simple and stress‑free.
            </motion.p>
          </div>

          <div className="w-full">
            <img src="/map.png" className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain mx-auto" alt="globe" />
          </div>
        </div>
        {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
           <button className="px-6 py-3 mt-10 md:mt-0 bg-gray-200 hover:bg-gray-300 text-[#0B1F3A] rounded-md font-medium">
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
            Dedicated counselors help you choose the right country, course,
            and intake based on your profile and goals.
          </p>
        </div>

        {/* Card 2 (Dark background) */}
        <div className="bg-[#0B1F3A] text-white p-8 md:p-10 flex flex-col items-center shadow-lg">
          <Settings className="w-8 h-8 mb-4 text-white" />
          <h3 className="font-semibold text-lg mb-2">Tailored Solutions</h3>
          <p className="text-gray-200 text-sm">
            Personalized university lists, SOP/LOR reviews, and strong visa
            documentation tailored to your destination.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-gray-800 p-8 md:p-10 flex flex-col items-center shadow-md">
          <ThumbsUp className="w-8 h-8 mb-4 text-[#0B1F3A]" />
          <h3 className="font-semibold text-lg mb-2">Streamlined Process</h3>
          <p className="text-gray-600 text-sm">
            Clear timelines, checklist‑driven paperwork, and mock interviews
            to keep you prepared at every step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
