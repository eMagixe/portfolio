import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Stack from '@/views/Stack.vue';
import About from '@/views/About.vue';
import Works from '@/views/Works.vue';
import Contacts from '@/views/Contacts.vue';

let routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/stack',
        name: 'Stack',
        component: Stack
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/works',
        name: 'Works',
        component: Works
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;