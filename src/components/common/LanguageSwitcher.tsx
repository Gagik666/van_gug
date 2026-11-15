"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/i18n/index";

const languages = [
  { code: "am", label: "Հայերեն" },
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language");
    if (saved && languages.some((l) => l.code === saved)) {
      i18n.changeLanguage(saved);
    }
  }, [i18n]); // eslint-disable-line @typescript-eslint/no-unused-vars

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm font-medium">
        <span className="text-[#f5e6d3]">Հայերեն</span>
      </div>
    );
  }

  const currentLang = i18n.language;

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-sm font-medium"
        aria-label="Switch language"
      >
        <svg className="w-4 h-4 text-[#f5e6d3]" fill="none" viewBox="0 0 24 24">
          <path d="M12 2L3 7v6c0 3.314 2.686 6 6 6h6c3.314 0 6-2.686 6-6V7l-9-5z" />
        </svg>
        <span className="text-[#f5e6d3]">{languages.find((l) => l.code === currentLang)?.label}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-48 bg-[#1a0f0a] border border-[#3d2b1f] rounded-lg shadow-xl py-2 z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-white/10 transition-colors duration-200 ${
                  lang.code === currentLang ? "bg-white/15" : ""
                }`}
              >
                <span className="text-[#f5e6d3] font-medium">{lang.label}</span>
                {lang.code === currentLang && (
                  <svg className="w-4 h-4 text-[#c4a56b]" fill="none" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
