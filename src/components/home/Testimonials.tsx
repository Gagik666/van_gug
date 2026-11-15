"use client";
import { useTranslation } from "react-i18next";

const testimonials = [
  { name: "Sarah Mitchell", role: "Homeowner", text: "Absolutely stunning work! Our custom kitchen cabinets exceeded all expectations. The craftsmanship is unmatched.", rating: 5 },
  { name: "James Rodriguez", role: "Restaurant Owner", text: "Professional, timely, and beautiful. They transformed our dining area into a work of art. Highly recommend!", rating: 5 },
  { name: "Emily Chen", role: "Interior Designer", text: "As a designer, I have high standards. Van Gug consistently delivers premium quality that my clients love.", rating: 5 },
];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-[#f5e6d3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0f0a] mb-4">
            {t("testimonials.heading")}
          </h2>
          <p className="text-[#1a0f0a]/70 max-w-2xl mx-auto">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white/90 rounded-3xl border border-[#1a0f0a]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#c4a56b]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.294a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.294c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.294a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.294z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-[#1a0f0a]/80 leading-relaxed mb-6 italic">
                &ldquo;{t(`testimonials.items.${index}.text`)}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#c4a56b] rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-[#1a0f0a]">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a0f0a]">{testimonial.name}</p>
                  <p className="text-xs text-[#d4c5b0]">{t(`testimonials.items.${index}.role`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
