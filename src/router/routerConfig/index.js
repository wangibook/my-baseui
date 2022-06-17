import { startComponent } from './start.component';
import { basicComponent } from './basic.component';
import { formComponent } from './form.component';

export const menuList = [
  {
    name: '快速上手',
    list: startComponent
  },
  {
    name: 'Basic 基础组件',
    list: basicComponent
  },
  {
    name: 'Form 表单组件',
    list: formComponent
  }
]

export const routerDocsComponent = menuList.flatMap(
  (item) => item.list
)