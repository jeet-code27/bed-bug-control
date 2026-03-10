"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-[650px] sm:h-[640px] flex items-center overflow-hidden bg-[#f6f2e]">


            <Image
                src="/images/bed-bug-banner.webp"
                alt="Hero Background"
                fill
                priority
                className="object-cover object-bottom bg-[#f6f2ea]"
            />



            {/* ── Content — left aligned ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
                <div className="max-w-sm">

                    {/* Tag */}
                    <p className="text-[#0a802c] text-[11px] font-semibold tracking-[3px] uppercase mb-3">
                        Active &amp; Preventative Services
                    </p>

                    {/* Heading */}
                    <h1 className="text-white text-5xl font-bold leading-tight mb-3">
                        Bed Bugs Boston
                    </h1>

                    {/* Sub heading */}
                    <p className="text-white/80 text-lg font-medium mb-3">
                        Your Bed Bug Experts for Residential &amp; Commercial
                    </p>

                    {/* Notice */}
                    <p className="inline-block bg-[#0a802c]/20 text-[#c9de6b] px-3 py-1.5 rounded text-sm font-semibold mb-8 border border-[#0a802c]/30">
                        &quot;Boston Ranks #7 Nationally in Bed Bug Infestations&quot;
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full bg-[#0a802c] hover:bg-[#2d6a4f] text-white text-base font-semibold border-2 border-[#0a802c] hover:border-[#2d6a4f] transition-all duration-200 cursor-pointer whitespace-nowrap no-underline"
                        >
                            Fill out the form for free inspection
                        </a>
                    </div>

                </div>
            </div>

        </section>
    );
}