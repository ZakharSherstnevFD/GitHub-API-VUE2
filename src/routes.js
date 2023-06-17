import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

import Home from './pages/TheHome.vue'
import Example from './pages/TheExample.vue'
import NoteFound from './pages/TheNotFound.vue'


export default new Router ({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/example',
            name: 'example',
            component: Example,
        },
        {
            path: '*',
            name: 'noteFound',
            component: NoteFound,
        }
    ]
})