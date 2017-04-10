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
        updateTransaction({ state }, transaction) {
            return new Promise((resolve, reject) => {
                transaction.update(transaction.id, transaction).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
        deleteTransaction({ state }, transaction) {
            return new Promise((resolve, reject) => {
                transaction.destroy(transaction.id).then(() => {
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