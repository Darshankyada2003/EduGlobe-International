import Hero from "../components/Hero";
import Seo from "../utils/Seo";
import VisionSection from "../components/VisionSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import PhotoGallery from "../components/PhotoGallery";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

const Home = () => {
    return (
        <div>
            <Seo title="EduGlobe International — Study Abroad & Visa Consulting" description="End‑to‑end counseling for study abroad: university shortlisting, applications, documentation, and visa support for USA, UK, Canada, Australia and more." />
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
