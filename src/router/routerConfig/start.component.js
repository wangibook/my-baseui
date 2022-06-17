export const startComponent = [
  {
    path: '/home',
    name: '安装使用',
    component: () => import('/packages/components/install/doc/doc.md')
  },
  {
    path: '/nav',
    name: '导航',
    component: () => import('/packages/components/nav/doc/doc.md')
  }
]