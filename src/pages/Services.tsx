import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";
import Testimonials from "../components/Testimonials";
import { GraduationCap, Globe2, Handshake } from "lucide-react";
import Seo from "../utils/Seo";

const features = [
    { title: "Why EduGlobe?", desc: "Expert guidance, transparent process, proven success.", icon: "🎓" },
    { title: "Global Network", desc: "Universities and partners across continents.", icon: "🌍" },
    { title: "End-to-End Support", desc: "From counseling to visa stamping.", icon: "🤝" },
];

const steps = [
    "Personalized counseling and profile evaluation",
    "Test prep and application strategy",
    "Offer letters and scholarship guidance",
    "Visa documentation and interview prep",
    "Pre-departure briefing and housing help",
    "Arrival assistance and university orientation",
    "Career guidance and post-study support",
];

const faqs = [
    { q: "How long does the student visa process take?", a: "It varies by country; typically 4–8 weeks after offer and documentation submission." },
    { q: "Do you help with scholarships?", a: "Yes. We shortlist opportunities and guide strong applications to maximize chances." },
    { q: "What tests should I take?", a: "Depends on destination and course; common tests include IELTS, TOEFL, GRE, GMAT, or PTE." },
];

export default function Services() {
    return (
        <div>
            <Seo title="Services — EduGlobe International" description="Explore our end‑to‑end services: counseling, applications, documentation, visa filing, mock interviews, and pre‑departure support." />
            {/* Hero */}
            <section className="relative overflow-hidden bg-cover bg-center pb-9">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="uppercase text-xs tracking-wide text-[#0B1F3A]/70 font-semibold mb-3">Visa & Education Consulting</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight">
                            Study in the global university of your choice
                        </h1>
                        <p className="mt-4 text-[#0B1F3A]/80 max-w-xl">
                            Dedicated counselors, streamlined applications, and stress‑free visa processing. Start your journey with confidence.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href="#contact" className="bg-gray-200 hover:bg-gray-300 text-[#0B1F3A] px-5 py-3 rounded-md font-semibold">Get Free Counseling</a>
                            <a href="#steps" className="px-5 py-3 rounded-md border border-[#0B1F3A]/20 text-[#0B1F3A] hover:bg-white">How it Works</a>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop"
                            alt="Student hero"
                            className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
                        />
                        <div className="absolute -bottom-4 -left-4 hidden sm:block w-28 h-28 bg-white/70 backdrop-blur rounded-xl shadow border border-white/50 p-3">
                            <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=800&auto=format&fit=crop" alt="Counseling" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why choose */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16 bg-[#0B1F3A]/80">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Why choose us?</h2>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, idx) => (
                        <div
                            key={f.title}
                            className={`relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-white/95 backdrop-blur shadow-sm hover:shadow-md transition-all ${idx === 1 ? 'md:translate-y-3' : ''} ${idx === 2 ? 'lg:-translate-y-2' : ''}`}
                        >
                            {/* Accent bar */}
                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-400"></div>
                            {/* Soft blob */}
                            <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-cyan-500/10" />

                            <div className="flex items-center gap-3 pl-3">
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-cyan-500">
                                    {idx === 0 && <GraduationCap className="h-5 w-5" />}
                                    {idx === 1 && <Globe2 className="h-5 w-5" />}
                                    {idx === 2 && <Handshake className="h-5 w-5" />}
                                </div>
                                <h3 className="font-semibold text-[#0B1F3A]">{f.title}</h3>
                            </div>
                            <p className="text-[#0B1F3A]/80 mt-3 pl-3">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services grid */}
            <ServicesSection />

            {/* Steps */}
            <section id="steps" className="bg-[#0B1F3A]/80">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">7 Easy Steps to Land in your Dream University</h2>
                    <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {steps.map((s, i) => (
                            <li key={i} className="relative rounded-xl bg-white/95 backdrop-blur border border-white/10 shadow-sm hover:shadow-md transition-shadow p-5">
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-md bg-cyan-500 text-white font-semibold text-sm flex items-center justify-center">
                                    {i + 1}
                                </div>
                                <div className="pl-1">
                                    <p className="text-[#0B1F3A]">{s}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Blog/Updates */}
            <section className="">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] text-center">Latest Updates</h2>
                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                        {["Visa Interview Tips","Top Universities in Germany","Scholarship Essentials"].map((t, i)=> (
                            <article key={t} className="bg-white rounded-lg border border-[#0B1F3A]/10 overflow-hidden">
                                <img src={["https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"][i]} alt={t} className="h-44 w-full object-cover" />
                                <div className="p-5">
                                    <h3 className="font-semibold text-[#0B1F3A]">{t}</h3>
                                    <p className="text-sm text-[#0B1F3A]/80 mt-2">Helpful insights for a successful application.</p>
                                    <a href="#" className="text-sm text-[#0B1F3A] underline mt-3 inline-block">Read more</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection />

            {/* FAQs */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] text-center">Common Questions</h2>
                <div className="mt-8 mx-auto max-w-3xl divide-y divide-[#0B1F3A]/10 rounded-lg border border-[#0B1F3A]/10 bg-white">
                    {faqs.map((f, idx)=> (
                        <details key={idx} className="group open:bg-[#F9FAFB]">
                            <summary className="list-none cursor-pointer select-none p-5 flex justify-between items-center">
                                <span className="font-medium text-[#0B1F3A]">{f.q}</span>
                                <span className="text-[#0B1F3A]/60 group-open:rotate-180 transition-transform">⌄</span>
                            </summary>
                            <div className="px-5 pb-5 text-[#0B1F3A]/80">{f.a}</div>
                        </details>
                    ))}
                </div>
            </section>

        </div>
    );
}


