import VueI18n from 'vue-i18n'

const translations = {
    'en': {
        
    }
}

Vue.config.lang = 'en'
Object.keys(translations).forEach(function (lang) {
  Vue.locale(lang, translations[lang])
})