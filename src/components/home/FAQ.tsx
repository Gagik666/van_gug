"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/index";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#1a0f0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5e6d3] mb-4">
            {t("faq.heading")}
          </h2>
          <p className="text-[#d4c5b0] max-w-2xl mx-auto">
            {t("faq.description")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="border border-[#3d2b1f] rounded-2xl overflow-hidden">
              {/* Question */}
              <button
                className="flex items-center justify-between w-full p-6 text-left bg-white/5 hover:bg-white/10 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-[#f5e6d3] pr-4">{t(`faq.items.${index}.question`)}</span>
                <svg className="w-5 h-5 text-[#c4a56b] transition-transform duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                  {openIndex === index ? (
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  ) : (
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  )}
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`px-6 text-[#d4c5b0] leading-relaxed overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>{t(`faq.items.${index}.answer`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
