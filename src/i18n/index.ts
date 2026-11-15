"use client";

import i18n from "i18next";
import { initReactI18next, useTranslation as useTranslationOrg } from "react-i18next";
import { fallbackLng, resources, defaultNS } from "./settings";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: fallbackLng,
    fallbackLng,
    resources,
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
  });
}

export function useTranslation(lng?: string, ns?: string) {
  const ret = useTranslationOrg(ns);
  return ret;
}

export default i18n;
