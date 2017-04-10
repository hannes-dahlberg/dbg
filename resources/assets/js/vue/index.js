import Vue from 'vue'

import store from './store/index'
import router from './router'
import translations from './translations'
import directives from './directives'

new Vue({
    el: '#app',
    store,
    router
});