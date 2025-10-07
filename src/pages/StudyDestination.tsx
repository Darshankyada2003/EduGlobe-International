import { motion } from "framer-motion";
import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { Globe2, MapPin, ArrowRight, Award, CalendarDays, Wallet, Clock, GraduationCap, FileCheck } from "lucide-react";
import Seo from "../utils/Seo";

type Destination = {
    country: string;
    cityTag: string;
    image: string;
    highlights: string[];
    programs: string[];
    tuition: string;
    work: string;
    site?: string;
};

const destinations: Destination[] = [
    {
        country: "United States",
        cityTag: "Boston • New York • California",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
        highlights: ["Top STEM & Business programs", "Flexible curriculum & CPT/OPT", "Vast scholarships"],
        programs: ["Computer Science", "Business Analytics", "Data Science"],
        tuition: "USD 20k–60k/yr (varies by university)",
        work: "On‑campus, CPT/OPT options post‑study",
    },
    {
        country: "United Kingdom",
        cityTag: "London • Manchester • Edinburgh",
        image: "https://images.unsplash.com/photo-1461595520627-42e3c83019bc?q=80&w=1600&auto=format&fit=crop",
        highlights: ["1-year Masters", "World‑ranked universities", "Rich research ecosystem"],
        programs: ["Management", "FinTech", "AI & ML"],
        tuition: "GBP 14k–35k/yr",
        work: "20 hrs/week during term, Graduate Route post‑study",
    },
    {
        country: "Canada",
        cityTag: "Toronto • Vancouver • Montreal",
        image: "https://images.unsplash.com/photo-1502303756781-9f3d0452a3ad?q=80&w=1600&auto=format&fit=crop",
        highlights: ["Co‑op programs", "Student‑friendly immigration", "Excellent quality of life"],
        programs: ["Software Engineering", "Project Management", "Healthcare"],
        tuition: "CAD 15k–35k/yr",
        work: "20 hrs/week during term, PGWP after graduation",
    },
    {
        country: "Australia",
        cityTag: "Sydney • Melbourne • Brisbane",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad75?q=80&w=1600&auto=format&fit=crop",
        highlights: ["In‑demand programs", "Post‑study work options", "Safe & diverse campuses"],
        programs: ["Cybersecurity", "Civil Engineering", "Nursing"],
        tuition: "AUD 20k–45k/yr",
        work: "Limited hours during term, PSW visa options",
    },
    {
        country: "Germany",
        cityTag: "Berlin • Munich • Stuttgart",
        image: "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=1600&auto=format&fit=crop",
        highlights: ["Low/No tuition in many public universities", "Strong engineering focus", "Thriving tech hubs"],
        programs: ["Mechanical", "Automotive", "Robotics"],
        tuition: "Often minimal fees; some programs have tuition",
        work: "120 full or 240 half days per year",
    },
];

export default function StudyDestination() {
    const [filter, setFilter] = useState<"all" | "americas" | "europe" | "apac">("all");
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);

    const scrollToIndex = useCallback((index: number) => {
        const scroller = sliderRef.current;
        if (!scroller) return;
        const firstCard = scroller.querySelector<HTMLElement>('article');
        if (!firstCard) return;
        const gap = 20; // approximate gap between cards
        const cardWidth = firstCard.clientWidth;
        scroller.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
        setActiveIndex(index);
    }, []);

    const filtered = useMemo(() => {
        if (filter === "all") return destinations;
        if (filter === "americas") return destinations.filter(d => ["United States", "Canada"].includes(d.country));
        if (filter === "europe") return destinations.filter(d => ["United Kingdom", "Germany"].includes(d.country));
        return destinations.filter(d => ["Australia"].includes(d.country));
    }, [filter]);

    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    // Autoplay carousel
    useEffect(() => {
        if (!sliderRef.current || filtered.length <= 1) return;
        const id = setInterval(() => {
            const next = (activeIndexRef.current + 1) % filtered.length;
            scrollToIndex(next);
        }, 4000);
        return () => clearInterval(id);
    }, [filtered.length, scrollToIndex]);
    return (
        <div className="bg-white">
            <Seo
                title="Study Destinations — EduGlobe International"
                description="Explore top study abroad destinations: USA, UK, Canada, Australia, and Germany. Compare programs, work options, and campus life."
            />

            {/* Hero (redesigned) */}
            <section className="relative overflow-hidden">
                {/* Background vector blobs */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-cyan-100 blur-3xl opacity-70" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-amber-100 blur-3xl opacity-70" />
                    <svg className="absolute top-10 right-10 w-40 h-40 opacity-60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#E0F2FE" d="M47.8,-64.9C61.7,-56.3,72.1,-41.5,75.5,-25.6C78.8,-9.7,75.1,7.4,68.6,23.2C62.1,39,52.8,53.4,39.6,64.5C26.4,75.6,9.2,83.4,-7.4,92.3C-24.1,101.2,-48.2,111.1,-61.5,103.6C-74.8,96.1,-77.2,71.3,-83.7,50.1C-90.2,28.9,-100.8,11.3,-100.7,-7.7C-100.6,-26.7,-89.8,-47.1,-73.5,-58.7C-57.2,-70.2,-35.4,-72.9,-16.3,-73.4C2.8,-73.8,17.9,-72.8,47.8,-64.9Z" transform="translate(100 100)" />
                    </svg>
                    <svg className="absolute bottom-6 left-4 w-32 h-32 opacity-60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FEF3C7" d="M35.7,-56.4C49.1,-49.6,63.8,-41.8,71.9,-29.7C80,-17.6,81.4,-1.2,81.6,16.9C81.8,35,80.8,55,70.1,67.5C59.4,80,39,85.1,20.8,84.8C2.5,84.6,-13.8,79.1,-29.2,71.2C-44.6,63.3,-59.1,52.9,-67.7,38.6C-76.3,24.2,-79,6,-75.8,-10.1C-72.6,-26.2,-63.6,-40.1,-50.7,-47.5C-37.8,-55,-18.9,-56.1,-2,-53.3C15,-50.6,30,-44.1,35.7,-56.4Z" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <motion.div
                            initial={{ y: 12, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 eyebrow rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] px-3 py-1 border border-[#0B1F3A]/10"
                        >
                            <Globe2 className="h-3.5 w-3.5 text-cyan-600" /> Explore top study destinations
                        </motion.div>
                        <motion.h1
                            initial={{ y: 14, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mt-3 heading-hero"
                        >
                            Find Your Perfect Country for Higher Education
                        </motion.h1>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                            className="subheading mt-4 max-w-xl"
                        >
                            Compare programs, tuition, scholarships, and post‑study work options. Get a personalized plan from our expert counselors.
                        </motion.p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href="#grid" className="btn-primary">
                                Explore Countries
                            </a>
                            <a href="#compare" className="btn-outline">
                                Compare Options
                            </a>
                        </div>

                        {/* Stats chips */}
                        <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#0B1F3A]">
                            <span className="rounded-full bg-white border border-[#0B1F3A]/10 px-3 py-1">Scholarships available</span>
                            <span className="rounded-full bg-white border border-[#0B1F3A]/10 px-3 py-1">Visa guidance</span>
                            <span className="rounded-full bg-white border border-[#0B1F3A]/10 px-3 py-1">Top universities</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 1.02 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Decorative rings */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute top-6 left-6 w-40 h-40 rounded-full border border-cyan-200/80" />
                            <div className="absolute top-10 left-10 w-56 h-56 rounded-full border border-cyan-100/70" />
                            <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full border border-amber-200/70" />
                        </div>

                        <div className="rounded-2xl overflow-hidden elev-3 border border-white/60 bg-white/70 backdrop-blur relative">
                        <img
                            src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1600&auto=format&fit=crop"
                            alt="Students exploring study destinations"
                                className="w-full h-72 md:h-96 object-cover"
                        />
                            {/* Corner vector card */}
                            <div className="absolute -bottom-4 -left-4 hidden sm:block w-32 h-32 bg-white/80 backdrop-blur rounded-xl shadow border border-white/60 p-3">
                            <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=800&auto=format&fit=crop" alt="Counseling" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Destinations Carousel (distinct UI) */}
            <section id="grid" className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="heading-1">Top Study Destinations</h2>
                    <p className="subheading mt-3">
                        Explore popular choices among Indian students and discover unique advantages of each country.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="mt-6 flex justify-center gap-2">
                    {[
                        { k: "all", label: "All" },
                        { k: "americas", label: "Americas" },
                        { k: "europe", label: "Europe" },
                        { k: "apac", label: "APAC" },
                    ].map(t => (
                        <button
                            key={t.k}
                            onClick={() => setFilter(t.k as any)}
                            className={`px-4 py-2 text-sm rounded-full border ${filter === t.k ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]' : 'bg-white text-[#0B1F3A] border-[#0B1F3A]/20 hover:bg-gray-50'}`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* Horizontal Snap Carousel with Controls */}
                <div className="relative mt-8">
                    <div ref={sliderRef} className="overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]" style={{ scrollbarWidth: 'none' as any }}>
                        <div className="flex gap-5 pr-4" style={{ scrollSnapType: 'x mandatory' as any }}>
                        {filtered.map((d) => (
                            <motion.article
                                key={d.country}
                                initial={{ y: 16, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="relative snap-center min-w-[86%] sm:min-w-[60%] lg:min-w-[42%] rounded-2xl overflow-hidden card elev-2 cursor-pointer"
                                role="link"
                                tabIndex={0}
                                onClick={() => {
                                    const href = `/study-destinations/${d.country.toLowerCase().replace(/\s+/g,'-')}`;
                                    window.location.href = href;
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        const href = `/study-destinations/${d.country.toLowerCase().replace(/\s+/g,'-')}`;
                                        window.location.href = href;
                                    }
                                }}
                            >
                                <img src={d.image} alt={d.country} className="h-64 w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-1 text-[#0B1F3A] text-xs font-medium shadow">
                                    <MapPin className="h-3.5 w-3.5" /> {d.cityTag}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                    <div className="flex items-center gap-2">
                                        <Globe2 className="h-5 w-5 text-cyan-400" />
                                        <h3 className="font-semibold text-white text-lg">{d.country}</h3>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {d.highlights.map(h => (
                                            <span key={h} className="text-xs bg-white/15 border border-white/20 backdrop-blur px-2.5 py-1 rounded-full">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={`/study-destinations/${d.country.toLowerCase().replace(/\s+/g,'-')}`} className="mt-4 inline-flex items-center gap-2 text-white underline">
                                        Learn more <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                                {/* Details Panel */}
                           
                            </motion.article>
                        ))}
                        </div>
                    </div>

                    {/* Slider Controls */}
                    <button
                        aria-label="Previous"
                        onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 ml-[-8px] h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-[#0B1F3A]/10 hover:bg-gray-50"
                    >
                        ‹
                    </button>
                    <button
                        aria-label="Next"
                        onClick={() => scrollToIndex(Math.min(filtered.length - 1, activeIndex + 1))}
                        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 mr-[-8px] h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-[#0B1F3A]/10 hover:bg-gray-50"
                    >
                        ›
                    </button>
                    {/* Dots */}
                    <div className="mt-4 flex justify-center gap-2">
                        {filtered.map((_, i) => (
                            <button key={i} aria-label={`Go to slide ${i+1}`} onClick={() => scrollToIndex(i)} className={`h-2.5 w-2.5 rounded-full ${activeIndex === i ? 'bg-[#0B1F3A]' : 'bg-gray-300 hover:bg-gray-400'}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Strip */}
            <section id="compare" className="bg-[#0B1F3A]/80">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16">
                    <div className="grid md:grid-cols-3 gap-6 text-white">
                        <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur p-5 elev-1">
                            <p className="text-sm opacity-80">Work Options</p>
                            <p className="mt-1 font-semibold">USA: OPT/CPT • Canada: Co‑op • UK: Graduate Route</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur p-5 elev-1">
                            <p className="text-sm opacity-80">Program Duration</p>
                            <p className="mt-1 font-semibold">UK Masters: 1 year • Germany: low tuition public unis</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur p-5 elev-1">
                            <p className="text-sm opacity-80">Intakes</p>
                            <p className="mt-1 font-semibold">Fall/Spring (USA) • Sept/Jan (UK) • Fall/Winter (Canada)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Country Quick Facts */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="heading-1">Country Quick Facts</h2>
                    <p className="subheading mt-3">Compare popular programs, approximate tuition, and work options.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((d) => (
                        <motion.div key={d.country} initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }} className="card elev-1 p-5">
                            <div className="flex items-center gap-2">
                                <Globe2 className="h-5 w-5 text-cyan-500" />
                                <h3 className="font-semibold text-[#0B1F3A]">{d.country}</h3>
                            </div>
                            <div className="mt-3 grid sm:grid-cols-3 gap-3 text-sm text-[#0B1F3A]/90">
                                <div>
                                    <p className="font-semibold text-[#0B1F3A]">Programs</p>
                                    <p className="mt-1">{d.programs.join(', ')}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#0B1F3A]">Tuition</p>
                                    <p className="mt-1">{d.tuition}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#0B1F3A]">Work</p>
                                    <p className="mt-1">{d.work}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Scholarships, Funding & Intakes (enhanced UI) */}
            <section className="bg-gradient-to-b from-white to-[#F7F8FB]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-1">Funding, Scholarships & Intakes</h2>
                        <p className="subheading mt-3">Plan your study abroad finances and timeline with clarity.</p>
                    </div>

                    {/* Highlight Cards */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Scholarships & Funding */}
                        <div className="card elev-1 p-6">
                            <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-amber-500" />
                            <h3 className="text-lg font-semibold text-[#0B1F3A]">Scholarships & Funding</h3>
                            </div>
                            <ul className="mt-3 space-y-2 text-sm text-[#0B1F3A]/80 list-disc list-inside">
                                <li>University merit/need awards and departmental scholarships.</li>
                                <li>Assistantships (RA/TA) and paid co‑op placements.</li>
                                <li>Tuition waivers and early‑bird application discounts.</li>
                                <li>External awards: Chevening, Fulbright‑Nehru, DAAD, CSC, MEXT.</li>
                            </ul>
                            <div className="mt-4 inline-flex items-center gap-2 text-xs rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 border border-emerald-100">
                                <Wallet className="h-3.5 w-3.5" /> Potential savings: 10%–100% of tuition
                            </div>
                        </div>

                        {/* Application Intakes */}
                        <div className="card elev-1 p-6">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-5 w-5 text-cyan-600" />
                            <h3 className="text-lg font-semibold text-[#0B1F3A]">Application Intakes</h3>
                            </div>
                            <div className="mt-3 text-sm text-[#0B1F3A]/85 space-y-2">
                                <p><span className="font-semibold">USA/Canada</span>: Fall (Aug/Sep), Spring (Jan); select Summer (May).</p>
                                <p><span className="font-semibold">UK</span>: September and January; many 1‑year Masters.</p>
                                <p><span className="font-semibold">Australia</span>: February and July; some trimester systems.</p>
                                <p><span className="font-semibold">Germany</span>: Winter (Sep/Oct) and Summer (Mar/Apr) semesters.</p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {['Fall','Spring','Summer','Winter'].map((t) => (
                                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] border border-[#0B1F3A]/10">{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* Suggested Timeline */}
                        <div className="card elev-1 p-6">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-violet-600" />
                                <h3 className="text-lg font-semibold text-[#0B1F3A]">Suggested Timeline</h3>
                            </div>
                            <ol className="mt-3 space-y-3 text-sm text-[#0B1F3A]/85">
                                <li><span className="font-semibold">8–12 months</span>: Test prep (IELTS/TOEFL/GRE), profile building.</li>
                                <li><span className="font-semibold">6–9 months</span>: Shortlist universities, draft SOPs, collect LORs.</li>
                                <li><span className="font-semibold">3–6 months</span>: Apply, track portals, interview if required.</li>
                                <li><span className="font-semibold">1–3 months</span>: Offers, finances, visa, accommodation planning.</li>
                            </ol>
                            <div className="mt-4 inline-flex items-center gap-2 text-xs rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 border border-indigo-100">
                                <FileCheck className="h-3.5 w-3.5" /> Early applicants have better scholarship odds
                            </div>
                        </div>
                    </div>

                    {/* Intake Summary Table */}
                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full text-sm border border-[#0B1F3A]/10 rounded-lg overflow-hidden">
                            <thead className="bg-[#0B1F3A]/5 text-[#0B1F3A]">
                                <tr>
                                    <th className="text-left px-4 py-3 font-semibold">Country</th>
                                    <th className="text-left px-4 py-3 font-semibold">Major intakes</th>
                                    <th className="text-left px-4 py-3 font-semibold">Deadline range</th>
                                    <th className="text-left px-4 py-3 font-semibold">Results window</th>
                                    <th className="text-left px-4 py-3 font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#0B1F3A]/10 text-[#0B1F3A]/85">
                                <tr>
                                    <td className="px-4 py-3">USA</td>
                                    <td className="px-4 py-3">Fall, Spring</td>
                                    <td className="px-4 py-3">Nov–Mar (Fall), Jul–Sep (Spring)</td>
                                    <td className="px-4 py-3">6–12 weeks after deadline</td>
                                    <td className="px-4 py-3">Assistantships common in research programs</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Canada</td>
                                    <td className="px-4 py-3">Fall, Winter, limited Summer</td>
                                    <td className="px-4 py-3">Dec–Mar (Fall), Aug–Oct (Winter)</td>
                                    <td className="px-4 py-3">4–10 weeks</td>
                                    <td className="px-4 py-3">Co‑op tracks improve employability</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">UK</td>
                                    <td className="px-4 py-3">September, January</td>
                                    <td className="px-4 py-3">Rolling; priority by Apr–Jun</td>
                                    <td className="px-4 py-3">2–6 weeks</td>
                                    <td className="px-4 py-3">1‑year Masters; Graduate Route post‑study</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Australia</td>
                                    <td className="px-4 py-3">February, July</td>
                                    <td className="px-4 py-3">Oct–Dec (Feb), Apr–Jun (Jul)</td>
                                    <td className="px-4 py-3">3–8 weeks</td>
                                    <td className="px-4 py-3">Trimester in some universities</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Germany</td>
                                    <td className="px-4 py-3">Winter, Summer</td>
                                    <td className="px-4 py-3">May–Jul (Winter), Nov–Jan (Summer)</td>
                                    <td className="px-4 py-3">4–10 weeks</td>
                                    <td className="px-4 py-3">Low tuition in many public universities</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* CTA strip */}
                    <div className="mt-6 card elev-1 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-[#0B1F3A]">
                            <GraduationCap className="h-5 w-5 text-[#0B1F3A]" />
                            <p className="text-sm">Get a personalized shortlist with scholarship options and intake deadlines.</p>
                        </div>
                        <a href="#contact" className="btn-primary text-sm">Talk to a Counselor</a>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="heading-1 text-center">Study Destination FAQs</h2>
                    <div className="mt-6 divide-y rounded-lg border border-[#0B1F3A]/10 bg-white">
                        <details className="group open:bg-[#F9FAFB]">
                            <summary className="list-none cursor-pointer select-none p-5 flex justify-between items-center">
                                <span className="font-medium text-[#0B1F3A]">Which country is best for my program?</span>
                                <span className="text-[#0B1F3A]/60 group-open:rotate-180 transition-transform">⌄</span>
                            </summary>
                            <div className="px-5 pb-5 text-[#0B1F3A]/80">It depends on program strength, costs, work options, and career goals. Our counselors map choices to your profile and preferences.</div>
                        </details>
                        <details className="group open:bg-[#F9FAFB]">
                            <summary className="list-none cursor-pointer select-none p-5 flex justify-between items-center">
                                <span className="font-medium text-[#0B1F3A]">Do I need IELTS/TOEFL?</span>
                                <span className="text-[#0B1F3A]/60 group-open:rotate-180 transition-transform">⌄</span>
                            </summary>
                            <div className="px-5 pb-5 text-[#0B1F3A]/80">Most countries require proof of English proficiency. Some universities accept waivers or alternatives like PTE; requirements vary by course.</div>
                        </details>
                        <details className="group open:bg-[#F9FAFB]">
                            <summary className="list-none cursor-pointer select-none p-5 flex justify-between items-center">
                                <span className="font-medium text-[#0B1F3A]">When should I start applying?</span>
                                <span className="text-[#0B1F3A]/60 group-open:rotate-180 transition-transform">⌄</span>
                            </summary>
                            <div className="px-5 pb-5 text-[#0B1F3A]/80">Ideally 8–12 months before intake for test prep, documentation, and scholarship consideration.</div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
}


