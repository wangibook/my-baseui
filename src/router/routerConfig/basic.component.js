import colorContent from '/packages/components/color/doc/content.json';
import layoutContent from '/packages/components/layout/doc/content.json';
import iconContent from '/packages/components/icon/doc/content.json';
import spaceContent from '/packages/components/space/doc/content.json';
import buttonContent from '/packages/components/button/doc/content.json';
import linkContent from '/packages/components/link/doc/content.json';

export const basicComponent = [
  {
    path: '/layout',
    name: 'Layout 布局',
    content: layoutContent,
    component: () => import('/packages/components/layout/doc/doc.md')
  },
  {
    path: '/color',
    name: 'Color 色彩',
    content: colorContent,
    component: () => import('/packages/components/color/doc/doc.md')
  },
  {
    path: '/icon',
    name: 'Icon 图标',
    content: iconContent,
    component: () => import('/packages/components/icon/doc/doc.md')
  },
  {
    path: '/space',
    name: 'Space 间距',
    content: spaceContent,
    component: () => import('/packages/components/space/doc/doc.md')
  },
  {
    path: '/button',
    name: 'Button 按钮',
    content: buttonContent,
    component: () => import('/packages/components/button/doc/doc.md')
  },
  {
    path: '/link',
    name: 'Link 链接',
    content: linkContent,
    component: () => import('/packages/components/link/doc/doc.md')
  },
]