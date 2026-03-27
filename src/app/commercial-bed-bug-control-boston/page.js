import Link from "next/link";
import Image from "next/image";
import UrgentProblem from "@/components/UrgentProblem";
import QuoteSection from "@/components/QuoteSection";
import ReviewsSlider from "@/components/ReviewsSlider";
import PeaceOfMind from "@/components/PeaceOfMind";
import AreasServed from "@/components/AreasServed";

export const metadata = {
  title: "Commercial Bed Bug Control Boston MA | Property Managers & Hotels",
  description: "Protect your property, tenants, and reputation with professional bed bug solutions for apartments, property managers, and hotels across Boston. Fast, discreet, same-day response.",
  alternates: {
    canonical: "https://bedbugsboston.us/commercial-bed-bug-control-boston",
  },
  keywords: ["Commercial Bed Bug Control Boston", "Hotel Bed Bug Exterminator MA", "Property Management Pest Control", "Apartment Bed Bug Services Boston", "Multi-Unit Bed Bug Treatment"],
  authors: [{ name: "Alex" }, { name: "Boston Pest Experts" }],
  publisher: "Boston Pest Experts",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Commercial Bed Bug Control Boston MA | Property Managers & Hotels",
    description: "Protect your property, tenants, and reputation with professional bed bug solutions for apartments, property managers, and hotels across Boston. Fast, discreet, same-day response.",
    url: "https://bedbugsboston.us/commercial-bed-bug-control-boston",
    siteName: "BedBugsBoston.us",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Bed Bug Control in Boston",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can you respond to a bed bug issue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day and next-day inspection in most Boston areas to address issues quickly."
      }
    },
    {
      "@type": "Question",
      "name": "We treat multiple units at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We regularly work with multi-unit properties and can coordinate treatments to prevent spread."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer documentation portal for property records?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can provide service documentation and treatment details when needed."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best treatment for apartments or hotels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on severity, but steam heat treatment and Aprehend are commonly used for fast and effective results."
      }
    }
  ]
};

export default function CommercialLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.webp"
            alt="Boston Commercial Property Pest Control"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full relative z-10">
          {/* Hero Content */}
          <div className="max-w-3xl text-white">
            <div className="inline-block bg-[#0a802c] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
              For Property Managers & Hotels
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-up animation-delay-100">
              Commercial <span className="text-[#0a802c]">Bed Bug Control</span> in Boston, MA
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed animate-fade-in-up animation-delay-200">
              Protect your property, tenants, and reputation with professional bed bug solutions for apartments, property managers, and hotels across Boston.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                <svg className="w-6 h-6 text-[#0a802c]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold">Five-Star Reviews</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                <svg className="w-6 h-6 text-[#0a802c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-bold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                <svg className="w-6 h-6 text-[#0a802c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold">Fast, Same-Day Response</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <a href="#contact" className="bg-[#0a802c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0a802c] transition-all duration-300 shadow-xl shadow-[#0a802c]/30 text-center flex items-center justify-center gap-2 group w-fit">
                Fill Out the form for free inspection
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <UrgentProblem />

      {/* 2. SECTION: WHY BED BUGS ARE A SERIOUS LIABILITY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-[#111] mb-6">
              Why Bed Bugs Are a <span className="text-red-600">Serious Liability</span>
            </h2>
            <p className="text-xl text-gray-600">
              Bed bugs are more than just a nuisance — they create serious risks for property managers and hotels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", title: "Tenant Complaints", desc: "Tenant complaints can escalate quickly." },
              { icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z", title: "Negative Reviews", desc: "Negative online reviews can impact occupancy." },
              { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", title: "Rapid Spread", desc: "Infestations can spread unit-to-unit rapidly." },
              { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Increased Costs", desc: "Delayed response increases treatment costs." }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0a802c]/5 border border-[#0a802c]/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-[#111] font-medium leading-relaxed mb-6">
              A single report can turn into a multi-unit issue if not handled quickly and professionally.
            </p>
            <p className="text-[#0a802c] font-black text-2xl">
              Fast response and proper treatment are critical to protecting your property and reputation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION: WHO WE WORK WITH */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-[#111] mb-6">
                Who We Work With
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                We specialize in bed bug control for high-risk, high-turnover properties across Massachusetts:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Apartment complexes", "Property management companies", "Hotels and motels", "Multi-unit housing", "Senior living facilities", "Student housing"].map((facility, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#0a802c]/10 flex items-center justify-center text-[#0a802c] shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-bold text-gray-800">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <Image 
                  src="/images/boston-skyline.webp" 
                  alt="Boston Commercial Properties" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-[#0a802c]">100%</div>
                  <div className="text-sm font-bold text-gray-600 leading-tight">Discreet<br/>Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adding QuoteSection here acting as a strong mid-page break and providing the Contact Form */}
      <QuoteSection />

      {/* 4. SECTION: OUR COMMERCIAL BED BUG SOLUTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-[#111] mb-6">
              Our Commercial Bed Bug Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-[#0a802c] transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0a802c]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 bg-[#0a802c]/10 rounded-2xl flex items-center justify-center text-[#0a802c] mb-8">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#111] mb-4">Aprehend Biological Treatment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0a802c] mt-2 shrink-0"></div>Non-chemical, environmentally friendly solution</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0a802c] mt-2 shrink-0"></div>Continues working for up to 3 months</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0a802c] mt-2 shrink-0"></div>Spreads between bed bugs to eliminate hidden populations</li>
              </ul>
            </div>

            <div className="bg-[#0a802c] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100px] -z-10"></div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Dry Heat Steam & Targeted Treatment</h3>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>Immediate kill with high-temperature steam</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>Ideal for furniture, seams, and sensitive environments</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>Combined with residual protection</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-[#0a802c] transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0a802c]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 bg-[#0a802c]/10 rounded-2xl flex items-center justify-center text-[#0a802c] mb-8">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#111] mb-4">Multi-Visit Chemical Program</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0a802c] mt-2 shrink-0"></div>Strategic treatment plan over multiple visits</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0a802c] mt-2 shrink-0"></div>Includes insect growth regulators</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0a802c] mt-2 shrink-0"></div>Effective for ongoing control in multi-unit properties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: OUR APPROACH */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-6">
              Our Approach (What Makes Us Different)
            </h2>
            <p className="text-xl text-gray-400">
              We don’t just treat bed bugs — we help you manage risk and prevent spread.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fast response to reported activity",
              "Discreet service to avoid tenant or guest concern",
              "Targeted treatments to stop unit-to-unit spread",
              "Customized plans based on property layout",
              "Clear communication throughout the process"
            ].map((text, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#0a802c] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium text-lg text-gray-200">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: PREVENTION & REGIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Prevention */}
            <div>
              <h2 className="text-3xl font-black text-[#111] mb-6">Prevention & Protection Programs</h2>
              <p className="text-lg text-gray-600 mb-8">We offer ongoing programs designed for:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-lg font-bold text-gray-800"><span className="text-[#0a802c]">✓</span> Early detection of bed bug activity</li>
                <li className="flex items-center gap-3 text-lg font-bold text-gray-800"><span className="text-[#0a802c]">✓</span> Routine inspections for high-risk properties</li>
                <li className="flex items-center gap-3 text-lg font-bold text-gray-800"><span className="text-[#0a802c]">✓</span> Priority scheduling for urgent issues</li>
                <li className="flex items-center gap-3 text-lg font-bold text-gray-800"><span className="text-[#0a802c]">✓</span> Reduced long-term treatment costs</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-6 rounded-xl font-medium">
                Proactive programs help prevent small issues from becoming large infestations.
              </div>
            </div>

            {/* High Risk Areas */}
            <div>
              <h2 className="text-3xl font-black text-[#111] mb-6">Common High-Risk Areas</h2>
              <p className="text-lg text-gray-600 mb-8">Bed bugs spread quickly in multi-unit environments and are commonly found in:</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Bedrooms and mattresses",
                  "Upholstered furniture",
                  "Shared walls between units",
                  "Hallways and common areas",
                  "Laundry rooms"
                ].map((area, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center font-bold text-[#111] shadow-sm">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served Component (Reuse) */}
      <AreasServed />

      {/* 7. WHY CHOOSE US & FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-[#111] mb-6">
              Why Property Managers Choose Us
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-20 text-lg font-bold text-gray-800">
             <span className="bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">⭐ Thousands of Five-Star Reviews</span>
             <span className="bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">🏢 Multi-unit & commercial experience</span>
             <span className="bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">⚡ Fast turnaround & response</span>
             <span className="bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">🤫 Professional, discreet service</span>
             <span className="bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">🛠 Flexible treatment options</span>
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
             <h2 className="text-3xl font-black text-[#111] mb-8">FAQ for Property Managers</h2>
             <div className="space-y-8">
               {faqSchema.mainEntity.map((faq, idx) => (
                 <div key={idx}>
                   <h3 className="text-xl font-bold text-[#111] mb-2">{faq.name}</h3>
                   <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </section>

      <ReviewsSlider />
      <PeaceOfMind />

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-[#0a802c] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Don’t let one unit turn into a building-wide issue.</h2>
          <p className="text-xl font-light mb-12 opacity-90">
            Schedule your FREE Bed Bug Risk Assessment and get a fast, professional plan to protect your property.
          </p>
          <a href="#contact" className="inline-block bg-white text-[#111] px-10 py-5 rounded-xl font-black text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:-translate-y-1">
            Get Your Risk Assessment
          </a>
          <p className="mt-8 opacity-80 font-medium text-lg">Serving Boston, MA and surrounding areas</p>
        </div>
      </section>

    </>
  );
}
