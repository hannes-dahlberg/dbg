import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'

import auth from './modules/auth'
import period from './modules/period'
import account from './modules/account'
import budget from './modules/budget'
import transaction from './modules/transaction'

export default new Vuex.Store({
    state,
    actions,
    getters,
    modules: { auth, period, account, budget, transaction }
})