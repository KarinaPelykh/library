import i18n from "i18next";
import Backend from "i18next-http-backend";
import transleteEN from "../public/locales/en/translete.json";
import transleteUa from "../public/locales/uk/translete.json";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    resources: {
      en: { translation: transleteEN },
      ua: { translation: transleteUa },
    },

    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
