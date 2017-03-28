import budget from '../../../api/budget'

export default {
    state: {
        budgets: []
    },
    actions: {
        getBudgets({ state }) {
            return new Promise((resolve, reject) => {
                budget_id.index().then(budgets => {
                    state.budgets = budgets
                    resolve()
                }).catch(error => reject(error))
            })
        },
        createBudget({ state }, payload) {
            return new Promise((resolve, reject) => {
                budget.store(payload.data).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
        updateBudget({ state }, payload) {
            return new Promise((resolve, reject) => {
                budget.update(payload.budgetId, payload.data).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
        deleteBudget({ state }, payload) {
            return new Promise((resolve, reject) => {
                budget.destroy(payload.budgetId).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
    },
    getters: {
        getBudgets(state) {
            return state.budgets
        }
    }
}