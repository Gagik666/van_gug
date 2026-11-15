"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/index";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("navbar.links.home"), href: "/#home" },
    { name: t("navbar.links.services"), href: "/#services" },
    { name: t("navbar.links.portfolio"), href: "/#portfolio" },
    { name: t("navbar.links.contact"), href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-[#1a0f0a] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo + Company Name */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#c4a56b]">
              <Image
                src="/images/brand/logo.png"
                alt={t("navbar.logo")}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-[#f5e6d3] tracking-wide whitespace-nowrap">
              {t("navbar.logo")}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#f5e6d3] hover:text-[#c4a56b] transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center px-4 py-2.5 bg-[#c4a56b] text-[#1a0f0a] font-semibold rounded-full shadow-md hover:bg-[#e8d5b8] hover:shadow-lg transition-all duration-200"
            >
              {t("navbar.ctaButton")}
            </Link>

            {/* Hamburger - Mobile Only */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t("navbar.toggleMenu")}
            >
              <svg
                className="w-6 h-6 text-[#f5e6d3]"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 pb-4 border-t border-[#3d2b1f] rounded-b-2xl shadow-xl bg-[#1a0f0a]">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block py-3.5 px-5 text-sm font-medium ${
                  index === 0 ? "text-[#c4a56b]" : "text-[#d4c5b0]"
                } hover:text-[#e8d5b8] transition-colors duration-200`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-5 pt-2 sm:hidden">
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 bg-[#c4a56b] text-[#1a0f0a] text-sm font-semibold rounded-full"
              >
                {t("navbar.ctaButton")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
