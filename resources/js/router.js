import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from "./views/Welcome";
import Categories from "./views/Categories";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/categories',
        name: 'categories',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Categories,
        // component: () => import(/* webpackChunkName: "categories" */ './views/Categories')
    },

];


const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass : 'active'
});

export default router