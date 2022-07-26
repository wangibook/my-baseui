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
  },
  {
    path: '/radio',
    name: 'Radio 单选框',
    component: () => import('/packages/components/radio/doc/doc.md')
  },
  {
    path: '/checkbox',
    name: 'Checkbox 多选框',
    component: () => import('/packages/components/checkbox/doc/doc.md')
  },
  {
    path: '/select',
    name: 'Select 下拉框',
    component: () => import('/packages/components/select/doc/doc.md')
  },
  {
    path: '/dropdown',
    name: 'Dropdown 下拉菜单',
    component: () => import('/packages/components/dropdown/doc/doc.md')
  },
  {
    path: '/switch',
    name: 'Switch 开关',
    component: () => import('/packages/components/switch/doc/doc.md')
  },
  {
    path: '/input-number',
    name: 'InputNumber 计数器',
    component: () => import('/packages/components/input-number/doc/doc.md')
  },
]