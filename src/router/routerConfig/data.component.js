export const dataComponent = [
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
]