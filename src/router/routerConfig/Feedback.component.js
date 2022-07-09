export const feedbackComponent = [
  {
    path: '/alert',
    name: 'Alert 提示',
    component: () => import('/packages/components/alert/doc/doc.md')
  },
  {
    path: '/dialog',
    name: 'Dialog 对话框',
    component: () => import('/packages/components/dialog/doc/doc.md')
  },
]