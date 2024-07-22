import { createI18n } from "vue-i18n";
import en from "./locales/messages.en";
import fr from "./locales/messages.fr";

const i18n = createI18n({
  legacy: false,
  // default locale
  locale: "fr",
  // translations
  messages: {
    en,
    fr,
  },
});

export default i18n;
