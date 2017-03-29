export default {
    state: {
        period: 201703
    },
    actions: {
        setPeriod({ state, dispatch }, payload) {
            state.period = payload.period;
            dispatch('getAccounts');
            dispatch('getBudgets');
            dispatch('getTransactions');
        },
        setNow({ state , dispatch }) {
            dispatch('setPeriod', { period: (new Date).getFullYear() * 100 + (new Date).getMonth() + 1 });
        },
        nextYear({ getters, state, dispatch }) {
            dispatch('setPeriod', { period: (getters.getYear + 1) * 100 + getters.getMonth });
        },
        previousYear({ getters, state }) {
            dispatch('setPeriod', { period: (getters.getYear - 1) * 100 + getters.getMonth });
        },
        nextMonth({ getters, state, dispatch }) {
            if(getters.getMonth < 12) {
                dispatch('setPeriod', { period: getters.getYear * 100 + getters.getMonth + 1 });
            } else {
                dispatch('setPeriod', { period: (getters.getYear + 1) * 100 + 1 });
            }
        },
        previousMonth({ getters, state, dispatch }) {
            if(getters.getMonth > 1) {
                dispatch('setPeriod', { period: getters.getYear * 100 + getters.getMonth - 1 });
            } else {
                dispatch('setPeriod', { period: (getters.getYear - 1) * 100 + 12 });
            }
        }
    },
    getters: {
        getYear: state => Math.floor(state.period / 100),
        getMonth: state => Math.round((state.period / 100 - Math.floor(state.period / 100)) * 100),
        getPeriod: state => state.period
    }
}