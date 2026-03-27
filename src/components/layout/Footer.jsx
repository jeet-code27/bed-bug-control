"use client";

import Link from "next/link";
import Image from "next/image";



const FOOTER_LINKS = [
    { label: "Problem", href: "/#problem" },
    // { label: "Process", href: "/#process" },
    { label: "Treatments", href: "/#treatments" },
    { label: "Service Areas", href: "/#areas-served" },
    { label: "FAQ", href: "/#faq" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Blog", href: "/blog" },
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
        if (!href) return;

        let targetId = '';
        if (href.startsWith('#')) targetId = href.substring(1);
        else if (href.includes('#')) targetId = href.split('#')[1];

        if (!targetId) return;

        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
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
                        <Image
                            src="/images/logo.png"
                            alt="Bed Bugs Boston Logo"
                            width={200}
                            height={200}
                            className="h-[130px] w-auto"
                        />
                        <span className="text-white text-base sm:text-lg font-black tracking-[1px] sm:tracking-[3px] uppercase">Bed Bugs Boston</span>
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
                    <ul className="flex flex-col gap-3">
                        {FOOTER_LINKS.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    onClick={handleScroll}
                                    className="hover:text-white transition-colors flex items-center gap-2 group text-sm no-underline"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0a802c] group-hover:bg-[#12b341] transition-colors" />
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/commercial-bed-bug-control-boston" className="hover:text-white transition-colors flex items-center gap-2 group text-sm no-underline">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0a802c] group-hover:bg-[#12b341] transition-colors" />
                                Commercial
                            </Link>
                        </li>
                    </ul>
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
                    <div className="flex items-start gap-3 text-sm text-white/65 mt-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-[#0a802c]">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="M22 7l-10 7L2 7" />
                        </svg>
                        <a href="mailto:worcesterpestcontrol@gmail.com" className="hover:text-white transition-colors">worcesterpestcontrol@gmail.com</a>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-white/65 mt-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-[#0a802c]">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>867 Boylston St Floor 5 PMB 275<br />Boston, MA 02116</span>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/#contact"
                        onClick={handleScroll}
                        className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0a802c] hover:bg-[#076622] text-white text-sm font-semibold transition-colors duration-200 no-underline"
                    >
                        Fill out the form for free inspection
                    </Link>
                </div>

            </div>

            {/* ── Disclaimer Text ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-8 text-white/45 text-xs leading-relaxed text-center sm:text-left">
                BedBugsBoston.us is not a pest control company. We are a free referral service that connects homeowners and businesses in Boston, MA with independent, licensed pest control professionals. By submitting your information, you consent to being contacted by one or more service providers. See our <Link href="/privacy-policy" className="underline hover:text-white transition-colors">Privacy Policy</Link> and <Link href="/disclaimer" className="underline hover:text-white transition-colors">Third-Party Disclaimer</Link> for details.
            </div>

            {/* ── Divider ── */}
            <div className="border-t border-white/10" />

            {/* ── Bottom bar ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/45 text-xs">
                <p>© {new Date().getFullYear()} Boston. All rights reserved.</p>
                <div className="flex items-center gap-5">
                    <Link href="/privacy-policy" className="hover:text-white transition-colors no-underline">Privacy Policy</Link>
                    <Link href="/disclaimer" className="hover:text-white transition-colors no-underline">Disclaimer</Link>
                    <a href="/sitemap.xml" className="hover:text-white transition-colors no-underline" target="_blank" rel="noopener noreferrer">Sitemap</a>
                </div>
            </div>

        </footer>
    );
}