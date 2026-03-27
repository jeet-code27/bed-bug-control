"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/#treatments" },
    { label: "Commercial", href: "/commercial-bed-bug-control-boston" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/blog" },
];



const ChevronDown = () => (
    <svg
        width="12" height="12" viewBox="0 0 12 12" fill="none"
        className="inline-block ml-1 align-middle"
    >
        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
);

export default function BostonHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
            // Include small offset for the fixed header
            const headerOffset = 72;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Close mobile menu if open
            setMobileOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">



            {/* ── Main Navbar ── */}
            <nav
                className={`transition-all duration-300 ${scrolled || !isHomepage
                    ? "bg-[#2a3a2a]/95 backdrop-blur-md shadow-xl"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center h-[72px]">

                    {/* Logo */}
                    <Link href="/" className="flex items-center mr-auto no-underline">
                        <Image
                            src="/images/logo.png"
                            alt="Bed Bugs Boston Logo"
                            width={160}
                            height={160}
                            priority
                            className="h-[120px] w-auto shrink-0"
                        />
                        <span className="text-white text-base sm:text-lg md:text-xl font-black tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase select-none leading-tight">
                            Bed Bugs Boston
                        </span>
                    </Link>

                    {/* ── Desktop Nav ── */}
                    <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={handleScroll}
                                    className="flex items-center text-[#e8f5e9] hover:text-white text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-150 no-underline whitespace-nowrap"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Phone CTA */}
                    <Link
                        href="/#contact"
                        onClick={handleScroll}
                        className="hidden lg:inline-flex items-center ml-5 bg-[#0a802c] hover:bg-[#2d6a4f] text-white text-[15px] font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 no-underline whitespace-nowrap"
                    >
                        Fill out the form for free inspection
                    </Link>



                    {/* ── Mobile Hamburger ── */}
                    <button
                        className="lg:hidden ml-4 flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
                        aria-label="Toggle menu"
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </button>
                </div>

                {/* ── Mobile Menu ── */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#1b4332]/95 backdrop-blur-md ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col px-6 pb-6 pt-2 gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={handleScroll}
                                className="w-full flex items-center text-[#d8f3dc] text-base font-medium py-3 border-b border-white/10 hover:text-white transition-colors duration-150 no-underline"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="/#contact"
                            onClick={handleScroll}
                            className="mt-4 flex justify-center bg-[#0a802c] hover:bg-[#2d6a4f] text-white font-bold py-3 rounded-full text-sm no-underline transition-colors duration-200"
                        >
                            Fill out the form for free inspection
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}