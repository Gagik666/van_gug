"use client";

import { useTranslation } from "@/i18n/index";

const serviceIcons = [
  <svg key="0" className="w-8 h-8" fill="none" viewBox="0 0 24 24">
    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24">
    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24">
    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32 bg-[#1a0f0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5e6d3] mb-4">
            {t("services.title")}
          </h2>
          <p className="text-[#d4c5b0] max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#c4a56b]/50 transition-all duration-300 sm:hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 text-[#c4a56b] group-hover:text-[#e8d5b8] transition-colors duration-300">
                {serviceIcons[index]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#f5e6d3] mb-3 group-hover:text-[#c4a56b] transition-colors duration-200">
                {t(`services.items.${index}.title`)}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#d4c5b0] leading-relaxed">
                {t(`services.items.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
