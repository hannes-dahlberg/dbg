import store from './store/index'

export default {
    //Middleware for authenticated users
    auth(to, from, next) {
        //Users not authenticated will be redirected to 404
        next(!store.getters.isAuth ? { name: 'error.404' } : undefined);
    }
}