import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/homepage.vue'),
  },
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/main/index.vue'),
  },
];

export default routes;
