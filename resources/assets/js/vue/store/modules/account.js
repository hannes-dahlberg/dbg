import account from '../../../api/account'

export default {
    state: {
        accounts: []
    },
    actions: {
        getAccounts({ state }) {
            return new Promise((resolve, reject) => {
                account.index().then(accounts => {
                    state.accounts = accounts
                    resolve()
                }).catch(error => reject(error))
            })
        },
        createAccount({ state }, payload) {
            return new Promise((resolve, reject) => {
                account.store(payload.data).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
        updateAccount({ state }, payload) {
            return new Promise((resolve, reject) => {
                account.update(payload.account.id, payload.data).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
        deleteAccount({ state }, payload) {
            return new Promise((resolve, reject) => {
                account.destroy(payload.account.id).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
    },
    getters: {
        getAccounts(state) {
            return state.accounts
        }
    }
}