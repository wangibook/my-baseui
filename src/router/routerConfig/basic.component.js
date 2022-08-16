export const basicComponent = [
  {
    path: '/layout',
    name: 'Layout 布局',
    component: () => import('/packages/components/layout/doc/doc.md')
  },
  {
    path: '/color',
    name: 'Color 色彩',
    component: () => import('/packages/components/color/doc/doc.md')
  },
  {
    path: '/icon',
    name: 'Icon 图标',
    component: () => import('/packages/components/icon/doc/doc.md')
  },
  {
    path: '/space',
    name: 'Space 间距',
    component: () => import('/packages/components/space/doc/doc.md')
  },
  {
    path: '/button',
    name: 'Button 按钮',
    component: () => import('/packages/components/button/doc/doc.md')
  },
  {
    path: '/link',
    name: 'Link 链接',
    component: () => import('/packages/components/link/doc/doc.md')
  },
]