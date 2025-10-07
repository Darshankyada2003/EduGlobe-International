import { ArrowRight } from "lucide-react";

const services = [
  { title: "Student Visa", image: "/StudentVisa.jpg" },
  { title: "Visa Consultation", image: "/VisaConsultation.jpg"   },
  { title: "Document Preparation", image: "/DocumentPreparation.jpg" },
  { title: "Visa Application", image: "/VisaApplication.jpg" }, 
  { title: "Employment Visa", image: "/EmploymentVisa.jpg" },
  { title: "Tourist Visa", image: "/TouristVisa.jpg" },
];

const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-5">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="uppercase text-xs tracking-wide text-[#0B1F3A]/70 font-semibold mb-2">Our Service</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F3A] leading-snug">
          Our Comprehensive Visa and
          <br className="hidden sm:block" /> Immigration Solutions
        </h2>
        <p className="text-sm text-[#0B1F3A] /80 mt-4">
          Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem.
          Ultrices adipiscing dictumst purus convallis.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative h-56 md:h-64 bg-gray-200 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0B1F3A]/5 group-hover:bg-[#0B1F3A]/10 transition-colors" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
              <span className="text-sm font-medium text-[#0B1F3A] bg-white/90 px-3 py-1 rounded-sm shadow-sm">
                {service.title}
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0B1F3A] shadow-sm group-hover:bg-[#F4B400] group-hover:text-[#0B1F3A] transition-colors">
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;


