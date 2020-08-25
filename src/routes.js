import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(VueRouter);

import BlogEntries from './statics/data/blogs.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
    const children = BlogEntries[section].map(child => ({
        path: child.id,
        name: child.id,
        title: child.title,
        component: () => import(`./posts/${section}/${child.id}.md`)
    }))
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
        { path: '/', name: 'home', component: Home },
        { path: '/public/', name: 'public-home', component: Home },
        { path: '/about/', name: 'about', component: About },
        ...blogRoutes
    ],
})