import VueI18n from 'vue-i18n'

const translations = {
    'en': {
        'navigation': {
            'toggle': 'Toggle navigation',
            'brand': 'DBG'
        }
    },
    'sv': {
        'main': {
            'delete': 'Ta bort'
        },
        'navigation': {
            'toggle': 'Navigering',
            'brand': 'DBG'
        },
        'menu': {
            'budget': '@:budget.budget',
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
        },
        'period': {
            'period': 'År & månad'
        },
        'budget': {
            'budget': 'Budget',
            'name': 'Namn',
            'description': 'Beskrivning',
            'type': {
                'type': 'Typ',
                'expense': 'Utgift',
                'income': 'Inkomst',
                'transfer': 'Överföring'
            },
            'amount': 'Summa',
            'amount_help': 'Den totala summan av budgeteringen. Ange alltid som positivt värde',
            'actual_amount': 'Faktiskt',
            'actual_amount_help': 'Totalt budgeterat belopp efter överskott/underskott från andra budgetposter',
            'result': 'Resultat',
            'result_help': 'Summan av transaktioner bokfört på budgetpost',
            'diff': 'Återstår',
            'diff_help': 'Mellanskillanden av resultatet och det faktiska beloppet',
            'done': 'Färdig',
            'done_help': 'Markera här om du vet med dig att inga fler transaktioner ska bokföras på denna budgetpost denna månad',
            'transfer': 'Överskott/Underskott',
            'transfer_help': 'Om en budgetpost är markerad som färdig välj här vilken annan budgetpost överskottet/underskottet ska placeras',
            'submit': 'Spara ny budgetpost | Spara nya budgetposter',
            'new': {
                'name': 'Ny budgetpost',
                'type': 'income',
                'amount': '0'
            }
        }
    }
}

Vue.config.lang = 'sv'
Object.keys(translations).forEach(function (lang) {
  Vue.locale(lang, translations[lang])
})