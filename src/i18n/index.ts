import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ua from "./ua.json";
import en from "./en.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      UA: { translation: ua },
      EN: { translation: en },
    },
    fallbackLng: "UA",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
