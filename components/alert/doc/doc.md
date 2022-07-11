<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import demo7 from './demo7.vue';
import preview from '@/components/preview.vue';
</script>

# Alert 警告

#### 用于页面中展示重要的提示信息

<br/>

## 基本用法
#### Alert 组件不属于浮层元素，不会自动消失或关闭。Alert 组件提供四种主题，由type属性指定，默认值为info
<div class="source">
  <demo1/>
</div>
<preview compName="alert" demoName="demo1"/>


## 主题
#### Alert 组件提供了两个不同的主题：light和dark。通过设置effect属性来改变主题，默认为light
<div class="source">
  <demo2/>
</div>
<preview compName="alert" demoName="demo2"/>


## 自定义关闭按钮
#### 自定义关闭按钮为文字或其他符号。
你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 closable 属性决定 Alert 组件是否可关闭， 该属性接受一个 Boolean，默认为 true。 你可以设置 close-text 属性来代替右侧的关闭图标， 需要注意的是 close-text 必须是一个字符串。 当 Alert 组件被关闭时会触发 close 事件。
<div class="source">
  <demo3/>
</div>
<preview compName="alert" demoName="demo3"/>


## 带有 icon
#### 表示某种状态时提升可读性。通过设置show-icon属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图
<div class="source">
  <demo4/>
</div>
<preview compName="alert" demoName="demo4"/>


## 文字居中
#### 使用 center 属性让文字水平居中。
<div class="source">
  <demo5/>
</div>
<preview compName="alert" demoName="demo5"/>


## 文字描述
#### 为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。
除了必填的 title 属性外，你可以设置 description 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。
<div class="source">
  <demo6/>
</div>
<preview compName="alert" demoName="demo6"/>


## 带图标和描述
#### 带有 icon 和辅助性文字介绍
<div class="source">
  <demo7/>
</div>
<preview compName="alert" demoName="demo7"/>


## Attributes
| 参数      | 说明          | 类型       | 可选值              | 默认值   |
|---------- |-------------- |---------- |-------------------- |-------- |
| title     | 标题           | string | — | — |
| type | 主题 | string | success/warning/info/error | info |
| description | 辅助性文字。也可通过默认 slot 传入 | string | — | — |
| closable | 是否可关闭 | boolean | — | true |
| center | 文字是否居中 | boolean | — | true |
| close-text | 关闭按钮自定义文本 | string | — | — |
| show-icon | 是否显示图标 | boolean | — | false |
| effect | 选择提供的主题 | string | light/dark | light |

<br/>

### Events
| 事件名称   | 说明    | 回调参数 |
|---------- |-------- |---------- |
| close     | 关闭alert时触发的事件 | — |

<br/>
