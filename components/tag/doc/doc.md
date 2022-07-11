<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import preview from '@/components/preview.vue'
</script>


# Tag 标签

#### 用于标记和选择

<br/>

## 基础用法
由type属性来选择tag的类型，也可以通过bgColor属性来自定义背景颜色，color属性来自定义文字颜色
<div class="source">
  <demo1/>
</div>
<preview compName="tag" demoName="demo1"/>


## 可移除标签

#### 设置 closable 属性可以定义一个标签是否可移除
<div class="source">
  <demo2/>
</div>
<preview compName="tag" demoName="demo2"/>


## 动态编辑标签

#### 动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现
<div class="source">
  <demo3/>
</div>
<preview compName="tag" demoName="demo3"/>


## 不同尺寸

#### Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸
使用 size 属性来设置额外尺寸, 可选值包括 default，medium 或 small.
<div class="source">
  <demo4/>
</div>
<preview compName="tag" demoName="demo4"/>


## 不同主题

#### Tag 组件提供了三个不同的主题：dark、light 和 plain
通过设置effect属性来改变主题，默认为 light
<div class="source">
  <demo5/>
</div>
<preview compName="tag" demoName="demo5"/>


## Attributes
| 参数      | 说明          | 类型      | 可选值                         | 默认值  |
|---------- |-------------- |---------- |------------------------------ |-------- |
| type | 类型 | string | success/info/warning/danger | — |
| closable | 是否可关闭 | boolean | — | false |
| bgColor | 背景色 | string | — | —  |
| color  | 文字色 | string | — | — |
| size  | 尺寸 | string | default / medium / small | — |
| effect | 主题 | string | dark / light / plain | light |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 点击 Tag 时触发的事件 | — |
| close | 关闭 Tag 时触发的事件 | — |


<br/>



