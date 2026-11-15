"use client";

import { useTranslation } from "@/i18n/index";

const steps = [
  { number: "01", icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <path d="M9 11.75a3.75 3.75 0 1 1-7.5 0A3.75 3.75 0 0 1 9 11.75Z" stroke="currentColor" strokeWidth="2" />
      <path d="M6.75 9.75a4.25 4.25 0 1 0 9 0" stroke="currentColor" strokeWidth="2" />
      <path d="M16 3a4.25 4.25 0 1 0 .003 8.501" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="3" x2="21" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ), title: "Consultation", description: "We discuss your vision, requirements, and preferences in detail to ensure we understand exactly what you need." },
  { number: "02", icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <path d="M12 3v9l5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ), title: "Design & Planning", description: "Our designers create detailed sketches and 3D models so you can visualize the final product before we begin." },
  { number: "03", icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3-3a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-3 3Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="8.5" cy="17.5" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M17 10.5V17l-2.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ), title: "Crafting", description: "Our master craftsmen handcraft every piece using premium materials and traditional woodworking techniques." },
  { number: "04", icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 14h6m-6 4h6m3-2H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ), title: "Installation & Delivery", description: "We handle everything from delivery to professional installation, ensuring your new woodwork is perfect." },
];

export default function Process() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#f5e6d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0f0a] mb-4">
            {t("process.heading")}
          </h2>
          <p className="text-[#1a0f0a]/70 max-w-2xl mx-auto">
            {t("process.description")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative p-8 bg-white/90 rounded-3xl border border-[#1a0f0a]/20 hover:border-[#c4a56b]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Step Number */}
              <div className="absolute -top-4 left-6 w-10 h-10 bg-[#c4a56b] rounded-full flex items-center justify-center z-10">
                <span className="text-sm font-bold text-[#1a0f0a]">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="mb-6 text-[#c4a56b]">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1a0f0a] mb-3 group-hover:text-[#c4a56b] transition-colors duration-200">
                {t(`process.steps.${index}.title`)}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#1a0f0a]/70 leading-relaxed">
                {t(`process.steps.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
