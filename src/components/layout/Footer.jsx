"use client";

import Link from "next/link";

const LeafLogo = () => (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#2d6a4f" />
        <path d="M20 8C14 8 10 14 10 20c0 4.4 2.4 8.2 6 10.2V24c0-3.3 2.7-6 6-6h4c0-5.5-2.7-10-6-10z" fill="#74c69d" />
        <path d="M22 18c-3.3 0-6 2.7-6 6v6.2C17.3 31.4 18.6 32 20 32c5.5 0 10-4.5 10-10v-4h-8z" fill="#52b788" />
        <line x1="20" y1="30" x2="20" y2="22" stroke="#2d6a4f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const FOOTER_LINKS = [
    { label: "Problem", href: "#problem" },
    { label: "Process", href: "#process" },
    { label: "Treatments", href: "#treatments" },
    { label: "Service Areas", href: "#areas-served" },
    { label: "FAQ", href: "#faq" },
    { label: "Reviews", href: "#reviews" },
];

const SOCIAL = [

    {
        name: "Instagram",
        href: "#",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },


];

export default function Footer() {
    const handleScroll = (e) => {
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 72;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <footer className="bg-[#1b2e1f] text-white w-full">

            {/* ── Main footer content ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Brand column */}
                <div className="flex flex-col gap-4">
                    <Link href="/" className="flex items-center gap-2.5 no-underline">
                        <LeafLogo />
                        <span className="text-white text-lg font-black tracking-[3px] uppercase">Boston</span>
                    </Link>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Reliable extermination experts dedicated to your peace of mind. Keeping your property safe from pests, all year round.
                    </p>
                    {/* Social icons */}
                    <div className="flex items-center gap-3 mt-2">
                        {SOCIAL.map((s) => (
                            <a
                                key={s.name}
                                href={s.href}
                                aria-label={s.name}
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0a802c] flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-[#c9de6b] text-xs font-bold tracking-[3px] uppercase mb-1">
                        Quick Links
                    </h4>
                    {FOOTER_LINKS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={handleScroll}
                            className="text-white/65 hover:text-white text-sm transition-colors duration-150 no-underline"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-[#c9de6b] text-xs font-bold tracking-[3px] uppercase mb-1">
                        Contact
                    </h4>

                    <div className="flex items-start gap-3 text-sm text-white/65 mt-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-[#0a802c]">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Serving Boston and Greater Boston Area</span>
                    </div>

                    {/* CTA */}
                    <a
                        href="#contact"
                        onClick={handleScroll}
                        className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0a802c] hover:bg-[#076622] text-white text-sm font-semibold transition-colors duration-200 no-underline"
                    >
                        Fill out the form for free inspection
                    </a>
                </div>

            </div>

            {/* ── Divider ── */}
            <div className="border-t border-white/10" />

            {/* ── Bottom bar ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/45 text-xs">
                <p>© {new Date().getFullYear()} Boston. All rights reserved.</p>
                <div className="flex items-center gap-5">
                    <a href="#" className="hover:text-white transition-colors no-underline">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors no-underline">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors no-underline">Sitemap</a>
                </div>
            </div>

        </footer>
    );
}