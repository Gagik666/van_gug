"use client";

import { useTranslation } from "@/i18n/index";

const CARD_INDICES = [0, 1, 2, 3];

export default function ArmeniaBenefits() {
  const { t } = useTranslation();

  return (
    <section id="armenia-benefits" className="py-16 sm:py-20 lg:py-28 bg-[#f5e6d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0f0a] mb-4">
            {t("armenia.heading")}
          </h2>
          <p className="text-[#1a0f0a]/70 max-w-2xl mx-auto">
            {t("armenia.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {CARD_INDICES.map((index) => (
            <div
              key={index}
              className="p-7 bg-white/90 rounded-3xl border border-[#1a0f0a]/15 hover:border-[#c4a56b] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
            >
              <span className="inline-block self-start px-3 py-1 rounded-full bg-[#1a0f0a] text-[#c4a56b] text-xs font-bold tracking-wider mb-5">
                {t(`armenia.cards.${index}.badge`)}
              </span>
              <h3 className="text-lg font-bold text-[#1a0f0a] mb-3">
                {t(`armenia.cards.${index}.title`)}
              </h3>
              <p className="text-sm text-[#1a0f0a]/70 leading-relaxed">
                {t(`armenia.cards.${index}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/37498881893"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            {t("armenia.photoCta")}
          </a>
          <a
            href="https://t.me/+37498881893"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#1a0f0a] text-[#f5e6d3] font-semibold rounded-full hover:bg-[#3d2b1f] transition-colors shadow-md"
          >
            {t("armenia.partnerCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
