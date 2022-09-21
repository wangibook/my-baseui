import breadcrumbContent from '/packages/components/breadcrumb/doc/content.json';
import bdropdownContent from '/packages/components/dropdown/doc/content.json';
import tabsContent from '/packages/components/tabs/doc/content.json';
import menuContent from '/packages/components/menu/doc/content.json';

export const navigationComponent = [
  {
    path: '/breadcrumb',
    name: 'Breadcrumb 面包屑',
    content: breadcrumbContent,
    component: () => import('/packages/components/breadcrumb/doc/doc.md')
  },
  {
    path: '/dropdown',
    name: 'Dropdown 下拉菜单',
    content: bdropdownContent,
    component: () => import('/packages/components/dropdown/doc/doc.md')
  },
  {
    path: '/tabs',
    name: 'Tabs 标签页',
    content: tabsContent,
    component: () => import('/packages/components/tabs/doc/doc.md')
  },
  {
    path: '/menu',
    name: 'Menu 导航菜单',
    content: menuContent,
    component: () => import('/packages/components/menu/doc/doc.md')
  },
]