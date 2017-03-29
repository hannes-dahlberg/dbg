import auth from '../../../api/auth'

export default {
    state: {
        login: false,
        user: null,
        token: null
    },
    actions: {
        auth({ state, getters }, payload) {
            return new Promise((resolve, reject) => {
                auth.auth(payload).then(response => {
                    //Setting store values
                    state.login = true
                    state.user = response.user
                    state.token = response.token['access_token']

                    //Setting axios default header to include token for any future requests
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + getters.getToken

                    resolve()
                }).catch(error => reject(error))
            })
        },
        logout({ state }) {
            return new Promise((resolve, reject) => {
                state.login = false
                state.user = null
                state.token = null

                resolve()
            });
        }
    },
    getters: {
        isAuth: state => {
            return state.login
        },
        getUser: state => {
            return state.login ? state.user : null
        },
        getToken: state => {
            return state.login ? state.token : null
        }
    }
}