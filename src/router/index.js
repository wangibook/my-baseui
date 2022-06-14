import { createRouter, createWebHashHistory } from "vue-router";

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
    children: [
      {
        path: '/home',
        name: '安装使用',
        component: () => import('/packages/components/install/doc/doc.md')
      },
      {
        path: '/icon',
        name: 'Icon 图标',
        component: () => import('/packages/components/icon/doc/doc.md')
      },
      {
        path: '/button',
        name: 'Button 按钮',
        component: () => import('/packages/components/button/doc/doc.md')
      },
      {
        path: '/input',
        name: 'Input 输入框',
        component: () => import('/packages/components/input/doc/doc.md')
      },
      {
        path: '/space',
        name: 'Space 间距',
        component: () => import('/packages/components/space/doc/doc.md')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
