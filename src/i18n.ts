import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enJson from './locale/en.json';
import ptBRJson from './locale/pt-BR.json';
i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
 resources: {
  en: { ...enJson },
  'pt-BR': { ...ptBRJson }
 }, // Where we're gonna put translations' files
 lng: "en",     // Set the initial language of the App
});