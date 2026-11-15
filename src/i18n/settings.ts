import amTranslation from "./locales/am.json";
import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";

export const fallbackLng = "am";
export const languages = [fallbackLng, "ru", "en"];
export const defaultNS = "translation";

export const resources = {
  am: { translation: amTranslation },
  ru: { translation: ruTranslation },
  en: { translation: enTranslation },
} as const;
