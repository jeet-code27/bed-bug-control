"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function BlogPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if already dismissed in this session
        const dismissed = sessionStorage.getItem("blogPopupDismissed");
        if (dismissed) return;

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 30000); // 30 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem("blogPopupDismissed", "true");
    };

    if (!isVisible || isDismissed) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
                onClick={handleDismiss}
            />

            {/* Popup */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center px-4 pointer-events-none">
                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden animate-in-popup">

                    {/* Green Header Banner */}
                    <div className="bg-[#0a802c] px-8 pt-8 pb-6 text-white relative">
                        {/* Close button */}
                        <button
                            onClick={handleDismiss}
                            aria-label="Close popup"
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Badge */}
                        <span className="inline-block bg-[#c9de6b] text-[#1b4332] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                            Free Inspection
                        </span>

                        {/* Hook headline */}
                        <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-2">
                            Bed Bugs Won't Wait.<br/>
                            <span className="text-[#c9de6b]">Neither Should You.</span>
                        </h2>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Every hour you wait, they multiply. Get a free inspection and a same-day quote from a licensed Boston pest control expert.
                        </p>
                    </div>

                    {/* Form Body */}
                    <div className="px-8 py-6">
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="d73a3fd1-d0ad-4b3c-aa30-f162638e399a" />
                            <input type="hidden" name="subject" value="Blog Popup - Free Inspection Request" />

                            <div className="grid grid-cols-2 gap-3">
                                {/* First Name */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        required
                                        placeholder="John"
                                        className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-[#0a802c] focus:bg-white transition-all"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        required
                                        placeholder="Smith"
                                        className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-[#0a802c] focus:bg-white transition-all"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="(617) 000-0000"
                                        className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-[#0a802c] focus:bg-white transition-all"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="you@email.com"
                                        className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-[#0a802c] focus:bg-white transition-all"
                                    />
                                </div>

                                {/* Zip Code */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                        Zip Code <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="zip_code"
                                        required
                                        placeholder="02101"
                                        className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-[#0a802c] focus:bg-white transition-all"
                                    />
                                </div>

                                {/* Pest Concerns */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                        Pest Concern
                                    </label>
                                    <input
                                        type="text"
                                        name="pest_concerns"
                                        placeholder="Bed bugs..."
                                        className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:border-[#0a802c] focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            {/* Disclaimer */}
                            <p className="text-gray-400 text-[10px] leading-relaxed mt-4">
                                By clicking &quot;Get My Free Quote,&quot; I consent to be contacted by Boston pest control professionals via email or phone. See our{" "}
                                <Link href="/privacy-policy" className="text-[#0a802c] underline hover:text-[#086a24]">Privacy Policy</Link>{" "}
                                and <Link href="/disclaimer" className="text-[#0a802c] underline hover:text-[#086a24]">Disclaimer</Link>.
                            </p>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-4 w-full py-3.5 rounded-2xl bg-[#0a802c] hover:bg-[#076622] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-[#0a802c]/30 hover:-translate-y-0.5 cursor-pointer"
                            >
                                🛡️ Get My Free Quote — No Obligation
                            </button>

                            <button
                                type="button"
                                onClick={handleDismiss}
                                className="mt-3 w-full py-2 text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                            >
                                No thanks, I'll deal with it later
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes popupIn {
                    from {
                        opacity: 0;
                        transform: scale(0.93) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                .animate-in-popup {
                    animation: popupIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
            `}</style>
        </>
    );
}
