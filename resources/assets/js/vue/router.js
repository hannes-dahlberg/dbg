import Vue from 'vue'
import VueRouter from 'vue-router'

//Middleware
import middleware from './middleware'

//Import templates
import index from './templates/index.vue'

import error from './templates/errors/index.vue'
import error404 from './templates/errors/404.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: index, children: [
            { path: 'error', component: error, children: [
                { path: '404', component: error404, name: 'error.404' },
            ]}
        ]}
    ]
})

router.beforeEach((to, from, next) => {
    if(to.name) {
        next()
    } else {
        next({ name: 'error.404' })
    }
})

export default router