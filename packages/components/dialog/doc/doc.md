<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import preview from '@/components/preview.vue';
</script>

# Dialog 对话框

#### 在保留当前页面状态的情况下，告知用户并承载相关操作

<br/>

## 基础用法
#### Dialog 弹出一个对话框,需要设置 v-model 属性，它接收 Boolean，当为 true 时显示 Dialog
<div class="source">
  <demo1/>
</div>
<preview compName="dialog" demoName="demo1"/>


## 居中布局
#### 标题和底部可水平居中
将center设置为true即可使标题和底部居中。 center仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。
<div class="source">
  <demo2/>
</div>
<preview compName="dialog" demoName="demo2"/>


## 自定义内容
#### Dialog 组件的内容可以是任意的，甚至可以是表格或表单
<div class="source">
  <demo3/>
</div>
<preview compName="dialog" demoName="demo3"/>


## 嵌套的 Dialog
#### 如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。
通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。
<div class="source">
  <demo4/>
</div>
<preview compName="dialog" demoName="demo4"/>


## 可拖拽对话框
#### 试着拖动一下header部分吧,设置draggable属性为true以做到拖拽
<div class="source">
  <demo5/>
</div>
<preview compName="dialog" demoName="demo5"/>


## 使用具名插槽自定义
使用具名插槽 #header 、#footer 可对模态框整体根据需要自定义
<div class="source">
  <demo6/>
</div>
<preview compName="dialog" demoName="demo6"/>


<br/>

## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model   | 是否显示 Dialog | boolean | — | false |
| title     | Dialog 的标题，也可通过具名 slot传入 | string    | — | — |
| width     | Dialog 的宽度 | string    | — | 50% |
| top       | Dialog CSS 中的 margin-top 值 | string | — | 15vh |
| append-to-body     | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true   | boolean   | — | false |
| custom-class      | Dialog 的自定义类名 | string    | — | — |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean    | — | true |
| show-close | 是否显示关闭按钮 | boolean    | — | true |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | — | — |
| center | 是否对头部和底部采用居中布局 | boolean | — | false |

<br/>

## Slot
| name | 说明 |
|------|--------|
| — | Dialog 的内容 |
| header | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

<br/>

## Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| open     | Dialog 打开的回调 | — |
| opened   | Dialog 打开动画结束时的回调 | — |
| close    | Dialog 关闭的回调 | — |
| closed   | Dialog 关闭动画结束时的回调 | — |
