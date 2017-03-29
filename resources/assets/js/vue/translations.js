import VueI18n from 'vue-i18n'

const translations = {
    'en': {
        'navigation': {
            'toggle': 'Toggle navigation',
            'brand': 'DBG'
        }
    },
    'sv': {
        'navigation': {
            'toggle': 'Navigering',
            'brand': 'DBG'
        },
        'menu': {
            'budget': 'Budget',
            'accounts': 'Konton',
            'transactions': 'Transaktioner',
            'login': 'Logga in',
            'logout': 'Logga ut'
        },
        'login': {
            'header': 'Logga in',
            'username': 'E-postadress',
            'password': 'Lösenord',
            'remember_me': 'Kom ihåg mig',
            'submit': 'Logga in',
            'error': 'Felaktiga uppgifter. Försök igen'
        }
    }
}

Vue.config.lang = 'sv'
Object.keys(translations).forEach(function (lang) {
  Vue.locale(lang, translations[lang])
})