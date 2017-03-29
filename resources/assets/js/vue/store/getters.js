export default {
    getMenu(state, getters) {
        if(getters.isAuth) { return state.menu }

        return []
    }
}