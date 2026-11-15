"use client";

import { useTranslation } from "@/i18n/index";

const WHATSAPP_URL = "https://wa.me/37498881893";
const VIBER_URL = "viber://chat?number=%2B37498881893";
const TELEGRAM_URL = "https://t.me/+37498881893";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-[#f5e6d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0f0a] mb-4">
            {t("contact.heading")}
          </h2>
          <p className="text-[#1a0f0a]/70 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <a
            href="tel:098881893"
            className="flex items-center gap-2.5 sm:gap-3 px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base bg-[#c4a56b] text-[#1a0f0a] font-semibold rounded-full hover:bg-[#e8d5b8] transition-colors duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{t("contact.phone1")}</span>
          </a>
          <a
            href="tel:099968196"
            className="flex items-center gap-3 px-6 py-4 bg-[#c4a56b] text-[#1a0f0a] font-semibold rounded-full hover:bg-[#e8d5b8] transition-colors duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{t("contact.phone2")}</span>
          </a>
          <a
            href={t("contact.instagramUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white/80 text-[#1a0f0a] font-semibold rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>{t("contact.instagram")}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Contact Information */}
          <div className="space-y-8">
            <div className="p-6 sm:p-8 bg-white/90 rounded-3xl border border-[#1a0f0a]/20 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-[#1a0f0a] mb-6">{t("contact.contactInfo.title")}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#c4a56b] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#1a0f0a]">{t("contact.phoneLabel")}</p>
                    <a href="tel:098881893" className="block text-sm text-[#1a0f0a]/70 hover:text-[#c4a56b]">
                      {t("contact.phone1")}
                    </a>
                    <a href="tel:099968196" className="block text-sm text-[#1a0f0a]/70 hover:text-[#c4a56b]">
                      {t("contact.phone2")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#c4a56b] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#1a0f0a]">{t("contact.instagramLabel")}</p>
                    <a href={t("contact.instagramUrl")} target="_blank" rel="noopener noreferrer" className="text-sm text-[#1a0f0a]/70 hover:text-[#c4a56b]">
                      {t("contact.instagram")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Messengers (WhatsApp, Viber, Telegram) */}
          <div className="p-6 sm:p-8 bg-white/90 rounded-3xl border border-[#1a0f0a]/20 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1a0f0a] mb-2">
              {t("contact.messengersHeading")}
            </h3>
            <p className="text-sm text-[#1a0f0a]/70 mb-6">
              {t("contact.messengersDescription")}
            </p>

            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.59 5.95L0 24l6.33-1.66a11.87 11.87 0 005.73 1.46h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42zM12.07 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.88 9.88 0 01-1.51-5.26c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.89 7c0 5.46-4.44 9.9-9.88 9.9zm5.43-7.41c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a0f0a]">{t("contact.messengers.whatsapp")}</p>
                    <p className="text-sm text-[#1a0f0a]/70">{t("contact.phone1")}</p>
                  </div>
                </div>
                <span className="text-[#1a0f0a]/50 group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* Viber */}
              <a
                href={VIBER_URL}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#7360F2]/10 border border-[#7360F2]/30 hover:bg-[#7360F2]/20 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7360F2] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.4 0C5.53 0 1 4.21 1 9.85c0 3.05 1.34 5.79 3.63 7.61v3.87c0 .54.63.84 1.05.5l3.01-2.42c.88.2 1.8.3 2.71.3 5.87 0 10.6-4.21 10.6-9.86C22 4.21 17.27 0 11.4 0zm5.34 14.07c-.23.64-1.32 1.22-1.83 1.29-.49.07-1.1.1-1.78-.11-.41-.13-.94-.31-1.61-.6-2.83-1.22-4.68-4.08-4.82-4.27-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.23.57.79 1.96.86 2.1.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.3.38-.42.51-.14.14-.29.3-.12.58.17.28.75 1.23 1.61 1.99 1.1.98 2.03 1.28 2.31 1.42.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.64-.14.26.09 1.66.78 1.94.92.28.14.47.21.54.33.07.12.07.69-.16 1.33z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a0f0a]">{t("contact.messengers.viber")}</p>
                    <p className="text-sm text-[#1a0f0a]/70">{t("contact.phone1")}</p>
                  </div>
                </div>
                <span className="text-[#1a0f0a]/50 group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* Telegram */}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#229ED9]/10 border border-[#229ED9]/30 hover:bg-[#229ED9]/20 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#229ED9] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a0f0a]">{t("contact.messengers.telegram")}</p>
                    <p className="text-sm text-[#1a0f0a]/70">{t("contact.phone1")}</p>
                  </div>
                </div>
                <span className="text-[#1a0f0a]/50 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
