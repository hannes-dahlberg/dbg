import Vue from 'vue'
import VueRouter from 'vue-router'

//Middleware
import middleware from './middleware'

//Import templates
import index from './templates/index.vue'

import error from './templates/errors/index.vue'
import error404 from './templates/errors/404.vue'

import authLogin from './templates/auth/login.vue'

import pageAbout from './templates/pages/about.vue'
import pageBudget from './templates/pages/budget.vue'
import pageAccounts from './templates/pages/accounts.vue'
import pageTransactions from './templates/pages/transactions.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: index, children: [
            { path: 'error', component: error, children: [
                { path: '404', component: error404, name: 'error.404' },
            ]},
            { path: 'login', component: authLogin, name: 'auth.login', beforeEnter: middleware.guest },
            { path: 'about', component: pageAbout, name: 'page.about' },
            { path: 'budget', component: pageBudget, name: 'page.budget', beforeEnter: middleware.auth },
            { path: 'accounts', component: pageAccounts, name: 'page.accounts', beforeEnter: middleware.auth },
            { path: 'transactions', component: pageTransactions, name: 'page.transactions', beforeEnter: middleware.auth }
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