import transaction from '../../../api/transaction'

export default {
    state: {
        transactions: []
    },
    actions: {
        getTransactions({ state }) {
            return new Promise((resolve, reject) => {
                transaction.index().then(transactions => {
                    state.transactions = transactions
                    resolve()
                }).catch(error => reject(error))
            })
        },
        createTransaction({ state }, payload) {
            return new Promise((resolve, reject) => {
                transaction.store(payload.data).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
        updateTransaction({ state }, payload) {
            return new Promise((resolve, reject) => {
                transaction.update(payload.transactionId, payload.data).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
        deleteTransaction({ state }, payload) {
            return new Promise((resolve, reject) => {
                transaction.destroy(payload.transactionId).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
    },
    getters: {
        getTransactions(state) {
            return state.transactions
        }
    }
}