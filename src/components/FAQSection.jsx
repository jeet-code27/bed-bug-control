"use client";

import { useState } from "react";

const FAQS = [
    {
        q: "How much does bed bug extermination cost in Boston?",
        a: "Contact us for a free inspection. Bed bug treatment costs vary depending on the number of rooms treated, and the type of service done, depending on the activity level."
    },
    {
        q: "Who is the best bed bug exterminator in Boston 2026?",
        a: "There are few companies who provide the four services: a) Heat treatment b) Biological Solution c) Steam Cleaning & Chemical Solution and d) Standalone Treatment.  Companies who have these can meet your needs depending on activity levels and budget."
    },
    {
        q: "Does heat treatment really kill bed bugs in one day in Boston?",
        a: "Heat is raised to 125-135 degrees for several hours, which kills bed bugs, nymphs and eggs.  While no one treatment is 100% full proof, we pair it with either a biological solution or a chemical solution for a residual and 3 month warranty, and free inspection."
    },
    {
        q: "Where are bed bugs worst in Boston right now?",
        a: "According to Boston Public Health data (2024), the neighborhoods with highest bed bug activity are: Allston/Brighton (college rentals), South End (high-density apartments), Back Bay (Airbnb units), Fenway (student housing), Dorchester (multi-family homes), and East Boston (triple-deckers). MBTA Green and Red Line stations also report frequent sightings"
    },
    {
        q: "Can bed bugs live in Boston apartments with no pets?",
        a: "Absolutely. Bed bugs feed on human blood, not pets. They don't care if you have cats, dogs, or live alone. They hide in mattresses, box springs, bed frames, couches, baseboards, electrical outlets, and even picture frames. Boston's triple-deckers and brownstones with shared walls make it easy for bed bugs to travel between units—even if you're spotlessly clean. Cleanliness does NOT prevent bed bugs."
    },
    {
        q: "How do I know if I have bed bugs in my Boston apartment?",
        a: "Look for these 5 signs: 1) Red, itchy welts in lines or clusters. 2) Tiny blood spots on sheets. 3) Dark brown/black fecal stains on mattress seams. 4) Shed skins. 5) Live bugs – apple seed-sized, reddish-brown.  If you see even ONE sign, contact us for a FREE inspection."
    },
    {
        q: "How fast can you come to Back Bay/South End for bed bugs?",
        a: "We offer same-day and next-day service throughout Back Bay, South End, and all Boston neighborhoods. Fill out the form before 10 AM and we can often inspect same day. Our canine team is dispatched from our Dedham facility and covers all of Greater Boston within 45–90 minutes. For heat treatment, we book within 24–72 hours depending on severity. Emergency weekend service is available."
    },
    {
        q: "Do you offer canine bed bug inspections in Cambridge and Somerville?",
        a: "Yes! Our certified K-9 detection team services all of Cambridge (Harvard Square, Central, Kendall, Porter), Somerville (Davis, Union, Teele Square), and surrounding communities. Dogs detect live bed bugs and viable eggs with 97% accuracy—far better than visual inspections. The inspection takes 30–45 minutes and includes a written report. Cambridge and Somerville inspections are FREE with same-day treatment booking."
    },
    {
        q: "Is one heat treatment enough for Boston row houses and triple-deckers?",
        a: "Yes—our heat treatment system is specifically designed for Boston's classic architecture. We treat triple-deckers, brownstones, and row houses daily. Our equipment heats all three floors simultaneously, and we seal shared walls to prevent bugs from escaping to neighboring units. Our treatment is 98.7% effective even as a standalone service."
    },
    {
        q: "Are your bed bug treatments safe for babies and pregnant women in Boston?",
        a: "Absolutely. Our heat treatment uses ZERO chemicals—just temperature. It's 100% safe for infants, pregnant women, elderly residents, and pets. You'll need to vacate for 8–10 hours during treatment (great time for a day trip to the Boston Common or Seaport!), but you can return the same evening. No lingering fumes, no toxic residue, no health risks."
    },
    {
        q: "How long do I have to stay out of my Boston apartment after treatment?",
        a: "For heat treatment: 8–10 hours total. We start early (usually 7–8 AM), and you can return by dinner time the same day. No waiting period after. For any chemical follow-up spot treatments (rare), we ask for 4 hours. Unlike other companies that require 24–48 hour evacuation with chemicals, our heat-first approach gets you back home faster and safer."
    },
    {
        q: "Do bed bugs travel between apartments in Boston brownstones?",
        a: "Yes—this is extremely common in Boston's connected housing. Bed bugs travel through wall voids, electrical conduits, pipes, and even baseboards between units. If your neighbor has bed bugs and doesn't treat them, you're at high risk. Many Boston property managers now require building-wide heat treatments to prevent reinfestation."
    },
    {
        q: "What's the success rate of your Boston bed bug heat treatment?",
        a: "98.7% elimination after one treatment with our 90-day guarantee. The 1.3% that need follow-up are usually cases where residents brought in new infested items or neighbors weren't treated. Our heat protocol meets Entomological Society standards (120°F+ for 90 minutes kills all stages). We've treated over 2,400 Boston-area properties since 2012."
    },
    {
        q: "Can you treat just one room or do you have to do the whole apartment in Boston?",
        a: "We strongly recommend whole-apartment treatment. Bed bugs travel—if they're in your bedroom, they're likely also in your living room furniture, closets, and baseboards. Treating just one room pushes them into untreated areas, and they'll return in 3–4 weeks. Whole-apartment heat treatment actually SAVES money by preventing re-treatment."
    },
    {
        q: "Do you service Boston suburbs like Brookline, Newton, and Quincy?",
        a: "Yes! We serve all Greater Boston communities including: Brookline, Newton, Needham, Wellesley, Quincy, Braintree, Milton, Waltham, Watertown, Belmont, Arlington, Dedham, West Roxbury, Roslindale, Hyde Park. Same-day service, same guarantees, same pricing."
    },
    {
        q: "Hey Siri, find bed bug exterminator open now near Fenway Park",
        a: "We're open 24/7 with live answer! Fill out the form for free inspection right now. Our dispatch center near Fenway can send a canine inspection team to your Fenway, Kenmore, or Longwood apartment within 90 minutes. We serve all neighborhoods around Fenway Park including Mission Hill, and Roxbury Crossing. Same-day treatment slots available."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        if (openIndex === idx) setOpenIndex(null);
        else setOpenIndex(idx);
    };

    return (
        <section id="faq" className="bg-[#f6f2ea] w-full py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center">

                <div className="text-center mb-12">
                    <p className="text-[#0a802c] text-sm font-bold tracking-[3px] uppercase mb-3">
                        Frequently Asked Questions
                    </p>
                    <h2 className="text-[#1a1a1a] text-3xl lg:text-4xl font-semibold leading-snug">
                        Common Questions About Bed Bugs in Boston
                    </h2>
                </div>

                <div className="w-full flex flex-col gap-3">
                    {FAQS.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`bg-white rounded-xl shadow-sm border transition-all duration-300 ${isOpen ? 'border-[#0a802c]' : 'border-gray-200 hover:border-gray-300'}`}
                            >
                                <button
                                    onClick={() => toggle(idx)}
                                    className="w-full flex items-center justify-between text-left p-6 font-bold text-[#1a1a1a] text-lg cursor-pointer bg-transparent border-none"
                                >
                                    <span className="pr-4">{faq.q}</span>
                                    <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-full bg-[#f6f2ea] text-[#0a802c] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0a802c] text-white' : ''}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 text-[#3a3a3a] text-base leading-relaxed border-t border-gray-100 mt-2">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}
