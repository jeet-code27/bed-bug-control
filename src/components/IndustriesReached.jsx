"use client";

import Image from "next/image";

const INDUSTRIES = [
    {
        title: "Hotels & Hospitality",
        desc: "A single social media complaint about bed bugs can devastate bookings. We provide swift, discreet treatments.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 22v-6.57" />
                <path d="M12 11h.01" />
                <path d="M12 7h.01" />
                <path d="M14 15.43V22" />
                <path d="M15 16a5 5 0 0 0-6 0" />
                <path d="M16 11h.01" />
                <path d="M16 7h.01" />
                <path d="M8 11h.01" />
                <path d="M8 7h.01" />
                <rect x="4" y="2" width="16" height="20" rx="2" />
            </svg>
        ),
    },
    {
        title: "Homes & Residential",
        desc: "Protecting families with safe, non-toxic heat treatments allowing you to return the same day.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        title: "Property Management",
        desc: "Specialized multi-unit coordination to prevent bed bugs from migrating between joined apartments.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="14" x2="23" y2="14" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="14" x2="4" y2="14" />
            </svg>
        ),
    },
    {
        title: "Health Organizations",
        desc: "Discreet and professional services keeping hospitals and clinics patient-ready and bug-free.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
    },
];

export default function IndustriesReached() {
    return (
        <section id="industries" className="bg-white w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                {/* Left Content */}
                <div className="w-full lg:w-[45%] flex flex-col gap-6">

                    <h2 className="text-[#1a1a1a] text-3xl lg:text-4xl font-semibold leading-snug">
                        Industries Reached
                    </h2>

                    <p className="text-[#3a3a3a] text-base leading-relaxed mb-4">
                        We don't just protect homes. Bed bugs don't discriminate between a 5-star hotel in Boston or a college dorm room. Here are the main industries we serve and protect from active bed bug problems every day.
                    </p>

                    <div className="flex flex-col gap-8">
                        {INDUSTRIES.map((industry, i) => (
                            <div key={i} className="flex items-start gap-5">
                                <div className="p-3 bg-[#e8f5e9] text-[#0a802c] rounded-xl flex-shrink-0 mt-1">
                                    {industry.icon}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <h4 className="text-xl font-bold text-[#1a1a1a]">
                                        {industry.title}
                                    </h4>
                                    <p className="text-sm text-[#555] leading-relaxed">
                                        {industry.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-2">
                        <button className="px-7 py-3 rounded-full bg-[#0a802c] text-white text-base font-semibold border-2 border-[#0a802c] hover:bg-[#1a5b32] hover:border-[#1a5b32] transition-colors duration-200 cursor-pointer">
                            Request Commercial Quote
                        </button>
                    </div>

                </div>

                {/* Right Image */}
                <div className="w-full lg:w-[55%] flex-shrink-0">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/bed-bug-banner-3.webp"
                            alt="Industries Reached"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
