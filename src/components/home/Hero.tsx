"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/index";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand/hero-bg.jpg"
          alt={t("hero.altText")}
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
          {[
            { icon: "✓", text: t("hero.badgesYears") },
            { icon: "★", text: t("hero.badgesProjects") },
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <span className="text-[#c4a56b] text-base sm:text-xl">{badge.icon}</span>
              <span className="text-xs sm:text-sm text-[#f5e6d3]">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5e6d3] mb-6 sm:mb-10 leading-tight">
          {t("hero.heading")}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#d4c5b0] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-6 sm:mt-8">
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 bg-[#c4a56b] text-[#1a0f0a] font-semibold rounded-full hover:bg-[#e8d5b8] transition-colors duration-200 shadow-lg shadow-[#c4a56b]/30"
          >
            {t("hero.ctaButton")}
          </Link>
          <Link
            href="/#portfolio"
            className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 border-2 border-[#c4a56b] text-[#f5e6d3] font-semibold rounded-full hover:bg-[#c4a56b] hover:text-[#1a0f0a] transition-all duration-200"
          >
            {t("hero.viewPortfolio")}
          </Link>
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
          <a
            href="tel:098881893"
            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#c4a56b]" fill="none" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs sm:text-sm font-medium text-[#f5e6d3]">{t("contact.phone1")}</span>
          </a>
          <a
            href={t("contact.instagramUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#c4a56b]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-xs sm:text-sm font-medium text-[#f5e6d3]">{t("contact.instagram")}</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-[#c4a56b]"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 5v14M19 12l-7 7-7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
