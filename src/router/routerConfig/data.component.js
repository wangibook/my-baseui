import badgeContent from '/packages/components/badge/doc/content.json';
import cardContent from '/packages/components/card/doc/content.json';
import tagContent from '/packages/components/tag/doc/content.json';
import progressContent from '/packages/components/progress/doc/content.json';
import tableContent from '/packages/components/table/doc/content.json';
import paginationContent from '/packages/components/pagination/doc/content.json';
import treeContent from '/packages/components/tree/doc/content.json';

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
    content: cardContent,
    component: () => import('/packages/components/card/doc/doc.md')
  },
  {
    path: '/tag',
    name: 'Tag 标签',
    content: tagContent,
    component: () => import('/packages/components/tag/doc/doc.md')
  },
  {
    path: '/progress',
    name: 'Progress 进度条',
    content: progressContent,
    component: () => import('/packages/components/progress/doc/doc.md')
  },
  {
    path: '/table',
    name: 'Table 表格',
    content: tableContent,
    component: () => import('/packages/components/table/doc/doc.md')
  },
  {
    path: '/pagination',
    name: 'Pagination 分页',
    content: paginationContent,
    component: () => import('/packages/components/pagination/doc/doc.md')
  },
  {
    path: '/tree',
    name: 'Tree 树形控件',
    content: treeContent,
    component: () => import('/packages/components/tree/doc/doc.md')
  },
]