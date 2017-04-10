export default {
    index() {
        return new Promise((resolve, reject) => {
            axios.get('/api/budget').then(response => {
                resolve(response.data)
            }).catch(error => reject(error))
        })
    },
    store(data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/budget', data).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    },
    update(budgetId, data) {
        return new Promise((resolve, reject) => {
            axios.put('/api/budget/' + budgetId, data).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    },
    destroy(budgetId) {
        return new Promise((resolve, reject) => {
            axios.delete('/api/budget/' + budgetId).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    }
}