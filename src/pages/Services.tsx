import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";

const features = [
    { title: "Why KCI?", desc: "Expert guidance, transparent process, proven success.", icon: "🎓" },
    { title: "Global Network", desc: "Universities and partners across continents.", icon: "🌍" },
    { title: "End-to-End Support", desc: "From counseling to visa stamping.", icon: "🤝" },
];

const steps = [
    "Personalized counseling and profile evaluation",
    "Test prep and application strategy",
    "Offer letters and scholarship guidance",
    "Visa documentation and interview prep",
    "Pre-departure briefing and housing help",
];

const faqs = [
    { q: "How long does the student visa process take?", a: "It varies by country; typically 4–8 weeks after offer and documentation submission." },
    { q: "Do you help with scholarships?", a: "Yes. We shortlist opportunities and guide strong applications to maximize chances." },
    { q: "What tests should I take?", a: "Depends on destination and course; common tests include IELTS, TOEFL, GRE, GMAT, or PTE." },
];

export default function Services() {
    return (
        <div>
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
                            <a href="#contact" className="bg-[#F4B400] text-[#0B1F3A] px-5 py-3 rounded-md font-semibold hover:bg-[#e2a800]">Get Free Counseling</a>
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
                    {features.map((f) => (
                        <div key={f.title} className="p-6 rounded-lg border border-[#0B1F3A]/10 bg-white">
                            <div className="text-3xl">{f.icon}</div>
                            <h3 className="mt-3 font-semibold text-[#0B1F3A]">{f.title}</h3>
                            <p className="text-[#0B1F3A]/80 mt-1">{f.desc}</p>
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
                            <li key={i} className="p-5 rounded-md bg-white border border-[#0B1F3A]/10">
                                <span className="inline-block w-7 h-7 rounded-full bg-[#F4B400] text-[#0B1F3A] font-bold text-sm text-center leading-7 mr-3 align-middle">{i + 1}</span>
                                <span className="align-middle text-[#0B1F3A]">{s}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Testimonials-like cards */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] text-center">What our students say</h2>
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1,2,3].map((i)=> (
                        <div key={i} className="p-6 rounded-lg border border-[#0B1F3A]/10 bg-white">
                            <p className="text-[#0B1F3A]/80">“Seamless process and helpful counselors. Got my visa in time!”</p>
                            <div className="mt-4 flex items-center gap-3">
                                <img src={`https://randomuser.me/api/portraits/${i % 2 ? "women" : "men"}/${20+i}.jpg`} alt="user" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <p className="text-sm font-semibold text-[#0B1F3A]">Student {i}</p>
                                    <p className="text-xs text-[#0B1F3A]/60">Masters Applicant</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

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


