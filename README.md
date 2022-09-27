<p align="center">
  <img width="200" src="https://wangibook.github.io/my-baseui/logo.png">
</p>

# my-baseui
基于 Vue3，Vite2 的轻量级组件库，用于学习研究，欢迎交流

# Docs 
使用文档1：[my-baseui使用文档](https://wangibook.github.io/my-baseui/#/)
使用文档2：[my-baseui使用文档](https://ui.xkxk.tech/#/)

# 组件库说明
目前只是写了二十来个组件，文档侧边栏切换时可能会卡顿，如果想更好的体验，可以clone下来，在本地查看。
完成了Layout 布局、Space 间距、Button 按钮、Link 链接、Input 输入框、Textarea 文本域、Radio 单选、Checkbox 多选、Select 下拉框、Switch 开关、InputNumber 计数器、TimePicker 时间选择器、DatePicker 日期选择器、Rate 评分、Badge 徽标、Card 卡片、Tag 标签、Progress 进度条、Table 表格、Pagination 分页、Tree 树形控件、Breadcrumb 面包屑、Dropdown 下拉菜单、Tabs 标签页、Menu 导航菜单、Alert 提示、Dialog 对话框、Message 消息提示、Drawer 抽屉、Loading 加载等组件，参考了Element UI 和 iView源码，并完成使用文档的编写。

## 安装
使用npm 或 yarn 安装

```
npm install my-baseui
yarn add my-baseui
```

## 引入 my-baseui
### 完整引入
#### 需要注意的是 css 样式文件需要单独引入。
在 main.js 中写入以下内容：
```js
import { createApp } from 'vue'
import App from './App.vue'
// 导入组件库
import myBaseui from 'my-baseui'
import 'my-baseui/dist/style.css';

const app = createApp(App)
app.use(myBaseui)
app.mount('#app')
```
<br/>

## 愉快开始

#### 至此 my-baseui 就引入完成并且可以使用了。

```html
<!-- html -->
<m-button>默认按钮</m-button>
<m-button type="primary">主要按钮</m-button>
```

<br/>

## 写在最后
如果你觉得本项目不错或者对你工作有所帮助，欢迎点个star吧
(#^.^#)
