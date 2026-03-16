"use client";

import Image from "next/image";

const TREATMENTS = [
    {
        title: "Steam Heat Treatment",
        description: "Best for Infestations! Includes vacuum of infested bed bugs, nymphs and eggs. High heat steam combined with Chemical solutions and/or biological treatment for a 90-day residual. It kills all life stages. Steam Heat is the Gold Standard.",
    },
    {
        title: "Aprehend Biological",
        description: "Best for Preventative. Eco-friendly solution with long-lasting residual control.",
    },
    {
        title: "Chemical Treatment",
        description: "Multiple visit protocol. Residual protection. Budget friendly option. EPA-approved insecticides.",
    }
];

export default function TreatmentTypes() {
    return (
        <section id="treatments" className="bg-[#f6f2ea] w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-[#1a1a1a] text-3xl lg:text-4xl font-semibold leading-snug">
                        Type of Treatments Offered
                    </h2>
                    <div className="mt-4 w-20 h-1 bg-[#0a802c] mx-auto rounded-full" />
                </div>

                {/* 3 Boxes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TREATMENTS.map((treatment, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                            <h3 className="text-[#1a1a1a] text-xl font-bold">
                                {treatment.title}
                            </h3>
                            <p className="text-[#3a3a3a] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: treatment.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
