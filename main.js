import Vue from 'vue';
import App from './App.vue';
import routes from './routes';

Vue.config.productionTip = false;
// Vue.config.devtools = false;

new Vue({
    router: routes,
    render: h => h(App)
}).$mount('#app');