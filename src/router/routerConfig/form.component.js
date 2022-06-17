export const formComponent = [
  {
    path: '/input',
    name: 'Input 输入框',
    component: () => import('/packages/components/input/doc/doc.md')
  },
  {
    path: '/textarea',
    name: 'Textarea 文本域',
    component: () => import('/packages/components/textarea/doc/doc.md')
  }
]