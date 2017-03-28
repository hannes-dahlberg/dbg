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
            console.log(data)
            axios.post('/api/budget', data).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    },
    update(staffId, data) {
        return new Promise((resolve, reject) => {
            axios.put('/api/budget/' + budgetId, data).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    },
    destroy(staffId) {
        return new Promise((resolve, reject) => {
            axios.delete('/api/budget/' + budgetId).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    }
}