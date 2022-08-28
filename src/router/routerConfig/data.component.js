import badgeContent from '/packages/components/badge/doc/content.json';

export const dataComponent = [
  {
    path: '/badge',
    name: 'Badge 卡片',
    content: badgeContent,
    component: () => import('/packages/components/badge/doc/doc.md')
  },
  {
    path: '/card',
    name: 'Card 卡片',
    component: () => import('/packages/components/card/doc/doc.md')
  },
  {
    path: '/tag',
    name: 'Tag 标签',
    component: () => import('/packages/components/tag/doc/doc.md')
  },
  {
    path: '/progress',
    name: 'Progress 进度条',
    component: () => import('/packages/components/progress/doc/doc.md')
  },
  {
    path: '/table',
    name: 'Table 表格',
    component: () => import('/packages/components/table/doc/doc.md')
  },
  {
    path: '/pagination',
    name: 'Pagination 分页',
    component: () => import('/packages/components/pagination/doc/doc.md')
  },
  {
    path: '/tree',
    name: 'Tree 树形控件',
    component: () => import('/packages/components/tree/doc/doc.md')
  },
]