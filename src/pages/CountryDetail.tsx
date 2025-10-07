import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe2, MapPin, ArrowLeft, GraduationCap, Briefcase, Wallet } from "lucide-react";
import Seo from "../utils/Seo";
import PhotoGallery from "../components/PhotoGallery";
import Testimonials from "../components/Testimonials";

type Destination = {
  slug: string;
  country: string;
  cities: string;
  image: string;
  summary: string;
  programs: string[];
  tuition: string;
  work: string;
  pros: string[];
  cons: string[];
};

const DESTINATIONS: Destination[] = [
  {
    slug: "united-states",
    country: "United States",
    cities: "Boston • New York • California",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    summary: "Top-ranked universities with strong STEM, business, and research ecosystems. Flexible curriculum and excellent post‑study pathways (CPT/OPT).",
    programs: ["Computer Science", "Business Analytics", "Data Science"],
    tuition: "USD 20k–60k/yr (varies by university)",
    work: "On‑campus roles during study; CPT/OPT post‑study",
    pros: ["Flexible coursework", "Cutting-edge research", "Large alumni networks"],
    cons: ["Higher tuition", "Competitive admissions"],
  },
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    cities: "London • Manchester • Edinburgh",
    image: "https://images.unsplash.com/photo-1461595520627-42e3c83019bc?q=80&w=1600&auto=format&fit=crop",
    summary: "1‑year Masters, historic universities, and vibrant job markets. Popular for business, finance, and data disciplines.",
    programs: ["Management", "FinTech", "AI & ML"],
    tuition: "GBP 14k–35k/yr",
    work: "20 hrs/week during term; Graduate Route post‑study",
    pros: ["Shorter Masters", "Globally recognized degrees"],
    cons: ["Higher living costs in major cities"],
  },
  {
    slug: "canada",
    country: "Canada",
    cities: "Toronto • Vancouver • Montreal",
    image: "https://images.unsplash.com/photo-1502303756781-9f3d0452a3ad?q=80&w=1600&auto=format&fit=crop",
    summary: "Co‑op programs and friendly immigration policies make Canada a top choice. Strong pathways to work experience via PGWP.",
    programs: ["Software Engineering", "Project Management", "Healthcare"],
    tuition: "CAD 15k–35k/yr",
    work: "20 hrs/week during term; PGWP after graduation",
    pros: ["High quality of life", "Co‑op opportunities"],
    cons: ["Competitive popular programs"],
  },
  {
    slug: "australia",
    country: "Australia",
    cities: "Sydney • Melbourne • Brisbane",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad75?q=80&w=1600&auto=format&fit=crop",
    summary: "Great work options in skill‑shortage areas; world‑class campuses with diverse student communities.",
    programs: ["Cybersecurity", "Civil Engineering", "Nursing"],
    tuition: "AUD 20k–45k/yr",
    work: "Limited hours during term; PSW visa options",
    pros: ["Safe cities", "Strong graduate outcomes"],
    cons: ["Distance from India", "Varied tuition by program"],
  },
  {
    slug: "germany",
    country: "Germany",
    cities: "Berlin • Munich • Stuttgart",
    image: "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=1600&auto=format&fit=crop",
    summary: "Public universities with low/no tuition for many programs; powerhouse for engineering and automotive innovation.",
    programs: ["Mechanical", "Automotive", "Robotics"],
    tuition: "Often minimal fees; some programs have tuition",
    work: "120 full or 240 half days per year",
    pros: ["Affordable study", "Strong industry links"],
    cons: ["German language preferred for many roles"],
  },
];

export default function CountryDetail() {
  const { slug } = useParams();
  const data = useMemo(() => DESTINATIONS.find(d => d.slug === slug), [slug]);

  if (!data) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16">
        <p className="text-[#0B1F3A]">Country not found. <Link to="/study-destinations" className="underline">Back to Destinations</Link></p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Seo title={`${data.country} — Study in ${data.country} | EduGlobe`} description={data.summary} />

      {/* Hero */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-6 md:py-8">
          <Link to="/study-destinations" className="inline-flex items-center gap-2 text-[#0B1F3A] underline">
            <ArrowLeft className="h-4 w-4" /> Back to Destinations
          </Link>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 pb-10">
          <div className="relative h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img src={data.image} alt={data.country} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-white">
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-cyan-400" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow">Study in {data.country}</h1>
              </div>
              <p className="mt-2 text-sm md:text-base opacity-90 flex items-center gap-2"><MapPin className="h-4 w-4" /> {data.cities}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs md:text-sm">
                <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1 border border-white/20">Popular: {data.programs[0]}</span>
                <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1 border border-white/20">Tuition: {data.tuition}</span>
                <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1 border border-white/20">Work: {data.work}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Summary + Key Facts */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-14">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <p className="uppercase text-xs tracking-wide text-[#0B1F3A]/60 font-semibold">Overview</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mt-1">Why {data.country}?</h2>
            <p className="mt-4 text-[#0B1F3A]/80 text-[15px] md:text-[17px] leading-7 md:leading-8 max-w-3xl">{data.summary}</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#0B1F3A]/10 bg-white p-5">
                <div className="flex items-center gap-2 text-[#0B1F3A] font-semibold"><GraduationCap className="h-4 w-4 text-cyan-500" /> Popular Programs</div>
                <p className="mt-2 text-sm text-[#0B1F3A]/80">{data.programs.join(', ')}</p>
              </div>
              <div className="rounded-xl border border-[#0B1F3A]/10 bg-white p-5">
                <div className="flex items-center gap-2 text-[#0B1F3A] font-semibold"><Wallet className="h-4 w-4 text-cyan-500" /> Tuition (Approx)</div>
                <p className="mt-2 text-sm text-[#0B1F3A]/80">{data.tuition}</p>
              </div>
              <div className="rounded-xl border border-[#0B1F3A]/10 bg-white p-5">
                <div className="flex items-center gap-2 text-[#0B1F3A] font-semibold"><Briefcase className="h-4 w-4 text-cyan-500" /> Work Options</div>
                <p className="mt-2 text-sm text-[#0B1F3A]/80">{data.work}</p>
              </div>
            </div>

            {/* Key Universities */}
            <div className="mt-10">
              <h3 className="text-xl md:text-2xl font-semibold text-[#0B1F3A]">Key Universities</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-[#0B1F3A]/90">
                {(
                  {
                    'United States': ['MIT','Stanford','Carnegie Mellon','UC Berkeley'],
                    'United Kingdom': ['Oxford','Cambridge','Imperial College London','UCL'],
                    'Canada': ['University of Toronto','UBC','McGill','Waterloo'],
                    'Australia': ['University of Melbourne','ANU','UNSW','Monash'],
                    'Germany': ['TU Munich','RWTH Aachen','TU Berlin','University of Stuttgart']
                  } as Record<string, string[]>
                )[data.country].map(u => (
                  <div key={u} className="rounded-lg border border-[#0B1F3A]/10 bg-white p-3 flex items-center justify-between">
                    <span className="font-medium">{u}</span>
                    <span className="text-[11px] rounded-full bg-gray-100 px-2.5 py-1 text-[#0B1F3A]">Popular</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admissions Timeline */}
            <div className="mt-10">
              <h3 className="text-xl md:text-2xl font-semibold text-[#0B1F3A]">Admissions Timeline</h3>
              <ol className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {["Profile evaluation & shortlist","Tests (IELTS/TOEFL, as needed)","SOP/LOR prep","Applications & offers","Financials & CAS/I-20","Visa file & interview","Pre-departure checklist"].map((step, i) => (
                  <li key={step} className="p-4 rounded-lg bg-white border border-[#0B1F3A]/10 flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-cyan-500 text-white text-sm font-semibold flex-shrink-0">{i+1}</span>
                    <span className="text-[15px] text-[#0B1F3A] leading-6">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Documents Checklist */}
            <div className="mt-10">
              <h3 className="text-xl md:text-2xl font-semibold text-[#0B1F3A]">Documents Checklist</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-[15px] text-[#0B1F3A]/80 list-disc list-inside leading-7">
                {[
                  "Passport & photos",
                  "Academic transcripts & degree certificates",
                  "English proficiency score (IELTS/TOEFL/PTE)",
                  "SOP & LORs",
                  "Financial statements / Affidavits",
                  "CV/Resume",
                ].map(item => (<li key={item}>{item}</li>))}
              </ul>
            </div>
          </div>
          <div className="lg:sticky lg:top-32 self-start">
            <div className="rounded-xl border border-[#0B1F3A]/10 bg-white p-5">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">Pros</h3>
              <ul className="mt-2 list-disc list-inside text-[15px] text-[#0B1F3A]/80 leading-7">
                {data.pros.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className="rounded-xl border border-[#0B1F3A]/10 bg-white p-5 mt-4">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">Considerations</h3>
              <ul className="mt-2 list-disc list-inside text-[15px] text-[#0B1F3A]/80 leading-7">
                {data.cons.map(c => <li key={c}>{c}</li>)}
              </ul>
            </div>

            {/* Approximate Costs */}
            <div className="rounded-xl border border-[#0B1F3A]/10 bg-white p-5 mt-4">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">Approximate Costs</h3>
              <div className="mt-2 space-y-2 text-[15px] text-[#0B1F3A]/80">
                <div className="flex items-center justify-between"><span>Tuition (annual)</span><span>{data.tuition}</span></div>
                <div className="flex items-center justify-between"><span>Living (annual)</span><span>Varies by city (~₹6–12L)</span></div>
                <div className="flex items-center justify-between"><span>Health insurance</span><span>University/country specific</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Gallery */}
      <PhotoGallery />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="bg-[#0B1F3A]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-10 text-white text-center">
          <p className="opacity-90">Need a tailored shortlist for {data.country}?</p>
          <Link to="/contact" className="mt-4 inline-block bg-gray-200 hover:bg-gray-300 text-[#0B1F3A] px-5 py-3 rounded-md font-semibold">Talk to a Counselor</Link>
        </div>
      </section>
    </div>
  );
}


