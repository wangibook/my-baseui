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
  {
    path: '/message',
    name: 'Message 消息提示',
    component: () => import('/packages/components/message/doc/doc.md')
  },
]