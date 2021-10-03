import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Auth/Login.vue'
import register from '../views/Auth/Register.vue'
import dashboard from '../views/System/Home/Home.vue'
import games from '../views/System/games/games.vue'
import clases from '../views/System/clases/clases.vue'

import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'ins',
        component: Home
    },
    {
        path: "*",
        redirect: "/login"
    },

    {
        path: '/register',
        name: 'register',
        component: register
    },
    // {
    //     path: "/home",
    //     name: "home",
    //     component: () =>
    //         import ("../views/System/Home/Home.vue"),
    //     meta: {
    //         requiresAuth: true
    //     },
    // }
    {
        path: '/home',
        name: 'home',
        components: {
            default: dashboard,
            as: games
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/clases',
        name: 'clases',
        components: {
            default: dashboard,
            as: clases
        },
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',

    routes
})

export default router



router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
    if (requiresAuth) {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) next('/')
            else next();
        })
    } else next()
});