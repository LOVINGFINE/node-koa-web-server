import { createApp } from 'vue';
import './styles/index.scss';
import { createPinia } from 'pinia';
import router from '@/router';
import App from './App.vue';

const pinia = createPinia();

const main = createApp(App);

/** 路由 */
main.use(router);

/** store */
main.use(pinia);

/** 挂载 */
main.mount('#app');
