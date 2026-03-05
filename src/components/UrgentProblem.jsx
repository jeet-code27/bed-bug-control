"use client";

import Image from "next/image";

export default function UrgentProblem() {
    return (
        <section id="problem" className="bg-[#f6f2ea] w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <p className="text-[#0a802c] text-sm font-bold tracking-[3px] uppercase">
                        Urgent Problem Recognition
                    </p>
                    <h2 className="text-[#1a1a1a] text-3xl lg:text-4xl font-semibold leading-snug">
                        Are You Waking Up with Itchy Welts?
                    </h2>
                    <p className="text-[#3a3a3a] text-lg leading-relaxed">
                        There were <strong>over 1,400 confirmed bed bug reports in Boston in 2024 alone</strong> (Boston Public Health Commission).
                    </p>
                    <p className="text-[#3a3a3a] text-base leading-relaxed">
                        If you woke up with itchy welts, see tiny blood stains on sheets, or found dark fecal spots — you likely have bed bugs. Don’t wait. They multiply incredibly fast, with a single female laying up to 500 eggs in her lifetime.
                    </p>
                    <div className="mt-4">
                        <button className="px-7 py-3 rounded-full bg-[#0a802c] hover:bg-[#1a5b32] text-white text-base font-semibold shadow-md transition-all duration-200 cursor-pointer">
                            Request Inspection Now
                        </button>
                    </div>
                </div>

                {/* Info Card / Warning Box */}
                <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
                    <div className="bg-[#fdf4f4] border border-[#fca5a5] rounded-2xl p-8 max-w-sm shadow-sm relative">
                        <div className="absolute -top-5 -left-5 bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                            <span className="text-2xl font-bold">!</span>
                        </div>
                        <h3 className="text-xl font-bold text-red-700 mb-3">
                            Act Fast
                        </h3>
                        <p className="text-[#3a3a3a] text-[15px] leading-relaxed">
                            Bed bugs spread rapidly through walls, electrical outlets, and baseboards to neighboring rooms and apartments. Every day you wait means a larger infestation to tackle.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
