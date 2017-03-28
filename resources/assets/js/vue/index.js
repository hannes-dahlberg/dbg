import Vue from 'vue'

import store from './store/index'
import router from './router'
import translations from './translations'

new Vue({
    el: '#app',
    store,
    router
});