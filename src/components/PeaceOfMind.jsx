"use client";

import Image from "next/image";

export default function PeaceOfMind() {
    return (
        <section className="w-full bg-[#f6f2ea] py-16 lg:py-20 border-b border-[#e5dfd3]">
            <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

                {/* Icon */}
                <div className="w-16 h-16 bg-[#e8f5e9] text-[#0a802c] rounded-full flex items-center justify-center mb-5 shadow-sm">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </div>

                {/* Tag */}
                <p className="text-[#0a802c] text-xs font-bold tracking-[3px] uppercase mb-4">
                    Take Back Your Peace Of Mind
                </p>

                {/* Heading */}
                <h2 className="text-[#1a1a1a] text-3xl lg:text-5xl font-bold leading-tight mb-5">
                    Rely on the Bug Experts
                    <span className="text-[#0a802c]"></span>
                </h2>

                {/* Subtext */}
                <p className="text-[#555] text-base lg:text-lg leading-relaxed mb-8 max-w-2xl">
                    Do you have concerns about eliminating stubborn bed bugs? Ready to book an appointment for rapid, reliable extermination? Reach out by phone today or request your complimentary estimate online.
                </p>

                {/* CTA Button */}
                <a href="#contact" className="inline-block px-8 py-3.5 rounded-full bg-[#0a802c] hover:bg-[#076622] text-white text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer no-underline">
                    Fill out the form for free inspection
                </a>

            </div>
        </section>
    );
}