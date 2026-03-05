"use client";

import Image from "next/image";

const PROCESS_STEPS = [
    {
        title: "Free Canine Inspection",
        desc: "97% accurate – dogs find live bugs & eggs humans easily miss, up to 30 days earlier.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a802c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
        )
    },
    {
        title: "Whole-Room Heat Treatment",
        desc: "Kills all life stages in just 8 hours safely with no chemicals needed.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a802c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        )
    },
    {
        title: "90-Day Guarantee",
        desc: "Plus a free re-treatment if they return! We ensure 100% elimination.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a802c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        )
    }
];

export default function ThreeStepProcess() {
    return (
        <section id="process" className="bg-[#1b2e1f] w-full py-16 lg:py-24 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center relative z-10 text-center">

                <h2 className="text-[#c9de6b] text-3xl lg:text-4xl font-semibold mb-12">
                    Our Proven 3-Step Bed Bug Elimination Process
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative">

                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-[25px] left-[16%] right-[16%] h-[2px] bg-[#2d6a4f] -z-10" />

                    {PROCESS_STEPS.map((step, i) => (
                        <div key={i} className="flex flex-col items-center gap-5 relative">
                            {/* Number Bubble */}
                            <div className="w-14 h-14 bg-[#233a28] border-4 border-[#1b2e1f] rounded-full flex items-center justify-center text-[#c9de6b] text-xl font-bold z-10">
                                {i + 1}
                            </div>

                            {/* Card Content */}
                            <div className="bg-[#233a28] rounded-2xl p-8 w-full h-full border border-white/5 hover:border-[#0a802c]/50 transition-colors shadow-lg flex flex-col items-center">
                                <div className="mb-4 bg-white p-3 rounded-full shadow-inner">
                                    {step.icon}
                                </div>
                                <h3 className="text-white text-xl font-bold mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-white/70 text-[15px] leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
