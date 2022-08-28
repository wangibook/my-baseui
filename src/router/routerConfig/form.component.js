import inputContent from '/packages/components/input/doc/content.json';
import textareaContent from '/packages/components/textarea/doc/content.json';
import radioContent from '/packages/components/radio/doc/content.json';
import checkboxContent from '/packages/components/checkbox/doc/content.json';
import selectContent from '/packages/components/select/doc/content.json';
import switchContent from '/packages/components/switch/doc/content.json';
import inputnumberContent from '/packages/components/input-number/doc/content.json';

export const formComponent = [
  {
    path: '/input',
    name: 'Input 输入框',
    content: inputContent,
    component: () => import('/packages/components/input/doc/doc.md')
  },
  {
    path: '/textarea',
    name: 'Textarea 文本域',
    content: textareaContent,
    component: () => import('/packages/components/textarea/doc/doc.md')
  },
  {
    path: '/radio',
    name: 'Radio 单选框',
    content: radioContent,
    component: () => import('/packages/components/radio/doc/doc.md')
  },
  {
    path: '/checkbox',
    name: 'Checkbox 多选框',
    content: checkboxContent,
    component: () => import('/packages/components/checkbox/doc/doc.md')
  },
  {
    path: '/select',
    name: 'Select 下拉框',
    content: selectContent,
    component: () => import('/packages/components/select/doc/doc.md')
  },
  {
    path: '/switch',
    name: 'Switch 开关',
    content: switchContent,
    component: () => import('/packages/components/switch/doc/doc.md')
  },
  {
    path: '/input-number',
    name: 'InputNumber 计数器',
    content: inputnumberContent,
    component: () => import('/packages/components/input-number/doc/doc.md')
  },
]