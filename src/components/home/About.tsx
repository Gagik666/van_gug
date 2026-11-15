"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/index";

const statistics = [
  { number: "20+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Awards Won" },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-[#f5e6d3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <Image
              src="/images/about.svg"
              alt={t("about.imageAlt")}
              width={700}
              height={800}
              className="rounded-3xl shadow-2xl"
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            {/* Company Story */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a0f0a] mb-4">
                {t("about.storyHeading")}
              </h3>
              <p className="text-[#1a0f0a]/80 leading-relaxed">
                {t("about.storyDescription")}
              </p>
            </div>

            {/* Years of Experience */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#c4a56b] rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#1a0f0a]">
                  {t("about.sinceText")}
                </span>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#1a0f0a]">
                  {t("about.experienceLabel")}
                </p>
                <p className="text-sm text-[#1a0f0a]/70">
                  {t("about.sinceText")}
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/80 rounded-2xl border border-[#1a0f0a]/20">
                <h4 className="text-lg font-semibold text-[#c4a56b] mb-2">
                  {t("about.missionHeading")}
                </h4>
                <p className="text-sm text-[#1a0f0a]/80 leading-relaxed">
                  {t("about.missionDescription")}
                </p>
              </div>
              <div className="p-6 bg-white/80 rounded-2xl border border-[#1a0f0a]/20">
                <h4 className="text-lg font-semibold text-[#c4a56b] mb-2">
                  {t("about.visionHeading")}
                </h4>
                <p className="text-sm text-[#1a0f0a]/80 leading-relaxed">
                  {t("about.visionDescription")}
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {statistics.map((stat, index) => (
                <div key={index} className="p-6 bg-white/80 rounded-2xl border border-[#1a0f0a]/20 text-center">
                  <p className="text-3xl font-bold text-[#c4a56b] mb-1">
                    {t(`about.statistics.${index}.number`)}
                  </p>
                  <p className="text-sm text-[#1a0f0a]/70">
                    {t(`about.statistics.${index}.label`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
