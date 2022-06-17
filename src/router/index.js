import { createRouter, createWebHashHistory } from "vue-router";
import { routerDocsComponent } from './routerConfig/index';

const routes = [
  {
    path: '/',
    name: '主页',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/home',
    name: '组件页面',
    component: () => import('@/views/home.vue'),
    children: routerDocsComponent
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from,savedPosition) {
    if (to.path !== '/') {
      document.querySelector(".app-main").scrollTop = 0;
    }
  }
});

export default router;
