export default {
    index() {
        return new Promise((resolve, reject) => {
            axios.get('/api/transaction').then(response => {
                resolve(response.data)
            }).catch(error => reject(error))
        })
    },
    store(data) {
        return new Promise((resolve, reject) => {
            console.log(data)
            axios.post('/api/transaction', data).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    },
    update(transactionId, data) {
        return new Promise((resolve, reject) => {
            axios.put('/api/transaction/' + transactionId, data).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    },
    destroy(transactionId) {
        return new Promise((resolve, reject) => {
            axios.delete('/api/transaction/' + transactionId).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    }
}