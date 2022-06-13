# my-baseui

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
