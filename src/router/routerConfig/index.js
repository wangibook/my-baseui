import { startComponent } from './start.component';
import { basicComponent } from './basic.component';
import { formComponent } from './form.component';
import { dataComponent } from './data.component';

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
  },
  {
    name: 'Data 数据展示',
    list: dataComponent
  }
]

export const routerDocsComponent = menuList.flatMap(
  (item) => item.list
)