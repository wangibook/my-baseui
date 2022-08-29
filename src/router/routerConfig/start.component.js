import homeContent from '/packages/components/install/doc/content.json';
import navContent from '/packages/components/nav/doc/content.json';

export const startComponent = [
  {
    path: '/home',
    name: '安装使用',
    content: homeContent,
    component: () => import('/packages/components/install/doc/doc.md')
  },
  {
    path: '/nav',
    name: '导航',
    content: navContent,
    component: () => import('/packages/components/nav/doc/doc.md')
  }
]