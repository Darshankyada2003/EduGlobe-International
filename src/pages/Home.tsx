import Hero from "../components/Hero";
import VisionSection from "../components/VisionSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import PhotoGallery from "../components/PhotoGallery";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

const Home = () => {
    return (
        <div>
            <Hero />
            <VisionSection />
            <ServicesSection />
            <WhyChooseUs />
            <PhotoGallery />
            <Testimonials />
            <CTASection />
        </div>
    );
};

export default Home;
