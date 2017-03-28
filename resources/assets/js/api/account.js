export default {
    index() {
        return new Promise((resolve, reject) => {
            axios.get('/api/account').then(response => {
                resolve(response.data)
            }).catch(error => reject(error))
        })
    },
    store(data) {
        return new Promise((resolve, reject) => {
            console.log(data)
            axios.post('/api/account', data).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    },
    update(staffId, data) {
        return new Promise((resolve, reject) => {
            axios.put('/api/account/' + accountId, data).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    },
    destroy(staffId) {
        return new Promise((resolve, reject) => {
            axios.delete('/api/account/' + accountId).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    }
}