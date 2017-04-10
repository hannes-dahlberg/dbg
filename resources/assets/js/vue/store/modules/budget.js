import budgetApi from '../../../api/budget'
import Vue from 'vue'

export default {
    state: {
        budgets: [],
        types: ['expense', 'income', 'transfer']
    },
    actions: {
        getBudgets({ state }) {
            return new Promise((resolve, reject) => {
                budgetApi.index().then(budgets => {
                    state.budgets = budgets
                    resolve()
                }).catch(error => reject(error))
            })
        },
        createBudget({ state }, budget) {
            return new Promise((resolve, reject) => {
                budgetApi.store(budget).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
        updateBudget({ state }, budget) {
            return new Promise((resolve, reject) => {
                budgetApi.update(budget.id, budget).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
        deleteBudget({ state }, budget) {
            return new Promise((resolve, reject) => {
                budgetApi.destroy(budget.id).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        },
        addNewBudget({ state }) {
            state.budgets.push({ name: Vue.t('budget.new.name'), description: '', type: Vue.t('budget.new.type'), amount: Vue.t('budget.new.amount') });
        }
    },
    getters: {
        getBudgets(state) {
            return state.budgets
        },
        getBudgetTypes(state) {
            return state.types
        }
    }
}