import Vue from 'vue'

import store from './store/index'
import router from './router'
import translations from './translations'

import index from './templates/index.vue'

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(index)
});