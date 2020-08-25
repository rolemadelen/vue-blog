import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import HomeKor from './views/HomeKor.vue';
import HomeJap from './views/HomeJap.vue';

import About from './views/About.vue';
import AboutKor from './views/AboutKor.vue';
import AboutJap from './views/AboutJap.vue';

import Til from './views/TIL.vue';
import Algorithm from './views/Algorithm.vue';
import Ps from './views/PS.vue';
import DataStructure from './views/DataStructure.vue';

Vue.use(VueRouter);

import BlogEntries from './statics/data/blogs.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
    const children = BlogEntries[section].map(child => ({
        path: child.id,
        name: child.id,
        lang: child.lang,
        component: () => import(`./posts/${child.lang}/${section}/${child.id}.md`)
    }));
    return {
        path: `/${section}`,
        name: section,
        component: () => import('./views/Blog.vue'),
        children
    }
});

export default new VueRouter({
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'home', component: Home, alias: ['/public/', '/eng/'] },
        { path: '/kor/', name: 'home-kor', component: HomeKor, alias: '/kor' },
        { path: '/jap/', name: 'home-jap', component: HomeJap, alias: '/jap'},
        { path: '/eng/about/', name: 'about', component: About },
        { path: '/kor/about/', name: 'about-jap', component: AboutJap },
        { path: '/jap/about/', name: 'about-kor', component: AboutKor
 },
        { path: '/eng/til', name: 'til', component: Til },
        { path: '/eng/algorithm', name: 'algorithm', component: Algorithm },
        { path: '/eng/data-structure', name: 'data-structure', component: DataStructure },
        { path: '/eng/problem-solving', name: 'ps', component: Ps },
        ...blogRoutes
    ],
})