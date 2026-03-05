"use client";

import Image from "next/image";

const REASONS = [
    "Bed Bugs Are Hitchhikers",
    "Bed Bugs Multiply Very Quickly",
    "Population Density",
    "Heavy Tourism",
    "3 Major Convention Business Centers",
];

export default function InfestationReasons() {
    return (
        <section id="infestations" className="bg-[#f6f2ea] w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* ── Left: Image ── */}
                <div className="w-full lg:w-[45%] flex-shrink-0">
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/bed-bug-banner-5.webp"
                            alt="Reasons for Bed Bug Infestations in MA"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                {/* ── Right: Content ── */}
                <div className="w-full lg:w-[55%] flex flex-col gap-6">

                    {/* Heading */}
                    <h2 className="text-[#1a1a1a] text-3xl lg:text-4xl font-semibold leading-snug">
                        Why Boston Homes Are Under Attack Right Now
                    </h2>

                    {/* Body paragraph */}
                    <p className="text-[#3a3a3a] text-base leading-relaxed">
                        Public transit (MBTA), Airbnb turnover, college dorms (BU, Northeastern, Harvard), and dense apartment buildings make Greater Boston ground zero for bed bug infestations in 2026. If you woke up with itchy welts or found dark spots on your sheets, you likely have bed bugs. Don't wait. They multiply fast—a single female lays 500 eggs in her lifetime.
                    </p>

                    {/* Subheading */}
                    <p className="text-[#1a1a1a] text-lg font-bold mt-2">
                        Top Reasons for Infestations:
                    </p>

                    {/* Bullet list */}
                    <ul className="flex flex-col gap-4">
                        {REASONS.map((reason) => (
                            <li key={reason} className="flex items-center gap-3 text-[#3a3a3a] text-[17px] font-medium">
                                <span className="w-2 h-2 rounded-full bg-[#0a802c] flex-shrink-0" />
                                {reason}
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-6">
                        <button className="px-7 py-3 rounded-full border-2 border-[#0a802c] text-[#1a1a1a] text-base font-semibold bg-transparent hover:bg-[#0a802c] hover:text-white transition-all duration-200 cursor-pointer">
                            Schedule Free Inspection
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
