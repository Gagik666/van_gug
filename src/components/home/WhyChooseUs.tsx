"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/index";

const advantages = [
  { icon: "✓", title: "Expert Craftsmanship", description: "Master woodworkers with decades of experience" },
  { icon: "✓", title: "Premium Materials", description: "Only the finest woods and finishes" },
  { icon: "✓", title: "Custom Solutions", description: "Tailored to your unique needs and preferences" },
  { icon: "✓", title: "On-Time Delivery", description: "We respect your timeline and commitments" },
  { icon: "✓", title: "Free Consultation", description: "Expert advice on your woodwork project" },
  { icon: "✓", title: "Warranty Included", description: "Peace of mind with every piece we create" },
];

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#1a0f0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative p-2 sm:p-0">
            <div className="absolute inset-2 sm:inset-0 bg-[#c4a56b]/20 rounded-3xl transform rotate-2 sm:rotate-3" />
            <div className="relative">
              <Image
                src="/images/workshop.svg"
                alt={t("whyChooseUs.imageAlt")}
                width={600}
                height={700}
                className="w-full h-auto rounded-3xl shadow-2xl shadow-[#c4a56b]/20"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5e6d3] mb-4">
                {t("whyChooseUs.heading")}
              </h2>
              <p className="text-[#d4c5b0] text-lg leading-relaxed max-w-xl">
                {t("whyChooseUs.description")}
              </p>
            </div>

            {/* Advantages */}
            <ul className="space-y-4">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-[#c4a56b] text-xl mt-1 flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#f5e6d3]">{t(`whyChooseUs.advantages.${index}.title`)}</h3>
                    <p className="text-sm text-[#d4c5b0]">{t(`whyChooseUs.advantages.${index}.description`)}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-[#c4a56b] text-[#1a0f0a] font-semibold rounded-full hover:bg-[#e8d5b8] transition-colors duration-200 shadow-lg shadow-[#c4a56b]/30"
            >
              {t("whyChooseUs.ctaButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
