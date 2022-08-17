export const navigationComponent = [
  {
    path: '/breadcrumb',
    name: 'Breadcrumb 面包屑',
    component: () => import('/packages/components/breadcrumb/doc/doc.md')
  },
  {
    path: '/dropdown',
    name: 'Dropdown 下拉菜单',
    component: () => import('/packages/components/dropdown/doc/doc.md')
  },
  {
    path: '/tabs',
    name: 'Tabs 标签页',
    component: () => import('/packages/components/tabs/doc/doc.md')
  },
]