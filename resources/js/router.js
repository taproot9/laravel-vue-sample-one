import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./views/Home";

Vue.use(VueRouter);

const routes = [

    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./views/Dashboard')
            },
            {
                path: 'categories',
                name: 'categories',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                // component: Categories,
                component: () => import(/* webpackChunkName: "categories" */ './views/Categories')
            },
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/authentication/Register')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/authentication/Login')
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('./views/authentication/ResetPassword')
    },

];

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active'
});

export default router
