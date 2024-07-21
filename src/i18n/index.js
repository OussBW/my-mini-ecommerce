import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  // default locale
  locale: 'en',
  // translations
  messages: {
    en: {
      appTitle: 'My App',
    },
    fr: {
      appTitle: 'Mon App',
    },
  },
})

export default i18n