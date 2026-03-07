"use client";

import Image from "next/image";

const CITIES = [
    { rank: "#7", name: "Boston/Cambridge" },
    { rank: "#67", name: "Worcester" },
    { rank: "#70", name: "Lowell" },
    { rank: "#83", name: "Lynn" },
    { rank: "#84", name: "Brockton" },
    { rank: "#117", name: "Springfield" },
    { rank: "#121", name: "Quincy" },
];

export default function TopCities() {
    return (
        <section className="bg-[#1b2e1f] w-full py-16 lg:py-24 overflow-hidden relative">

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <p className="text-[#c9de6b] text-sm font-bold tracking-[3px] uppercase">
                        The Bed Bug Epidemic
                    </p>
                    <h2 className="text-white text-3xl lg:text-4xl font-semibold leading-snug">
                        Ranking Top MA Bed Bug Infestation Cities Nationally
                    </h2>
                    <p className="text-white/80 text-base leading-relaxed mb-4">
                        Massachusetts is battling a severe bed bug problem. With Boston ranking #7 nationally for bed bug treatments, it's clear these pests are widespread and aggressive. If you live in or near any of these top-ranking cities, your risk of an infestation is significantly higher.
                    </p>

                    <a href="#contact" className="self-start px-7 py-3 rounded-full bg-[#0a802c] hover:bg-[#1a5b32] text-white text-base font-semibold transition-colors duration-200 cursor-pointer no-underline">
                        Fill out the form for free inspection
                    </a>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-xl flex flex-col gap-5">
                        <h3 className="text-[#1a1a1a] text-xl font-bold border-b border-gray-200 pb-4">
                            National Infestation Rankings
                        </h3>

                        <div className="flex flex-col gap-3">
                            {CITIES.map((city, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-[#f9f9f9] hover:bg-[#e8f5e9] transition-colors">
                                    <span className="text-[#1a1a1a] font-medium text-[17px]">
                                        {city.name}
                                    </span>
                                    <span className="bg-[#0a802c] text-white text-sm font-bold px-3 py-1 rounded-full">
                                        {city.rank}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
