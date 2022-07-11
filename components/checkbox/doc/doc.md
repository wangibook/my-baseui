<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import preview from '@/components/preview.vue';
</script>

# Checkbox 多选

#### 常用从一组数据中选择多个数据

<br/>

## 基础用法
#### 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍
单一的checkbox中，默认绑定变量的值会是Boolean，选中为true
<div class="source">
  <demo1/>
</div>
<preview compName="checkbox" demoName="demo1"/>


## 禁用状态
多选框不可用状态，设置disabled属性即可
<div class="source">
  <demo2/>
</div>
<preview compName="checkbox" demoName="demo2"/>


## 多选框组
#### 适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项
<div class="source">
  <demo3/>
</div>
<preview compName="checkbox" demoName="demo3"/>


## 中间状态
#### indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果
<div class="source">
  <demo4/>
</div>
<preview compName="checkbox" demoName="demo4"/>


## 按钮样式
#### 按钮样式的多选组合
<div class="source">
  <demo5/>
</div>
<preview compName="checkbox" demoName="demo5"/>


## 带有边框
#### 设置border属性可以渲染为带有边框的多选框
<div class="source">
  <demo6/>
</div>
<preview compName="checkbox" demoName="demo6"/>


## Checkbox Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|  v-model  | 绑定值   |  boolean | — | — |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |   —    |    —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| border    | 是否显示边框  | boolean   | — | false   |
| name      | 原生 name 属性 | string    |      —         |     —    |
| checked   | 当前是否勾选    | boolean   |  — | false   |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制    | boolean   |  — | false   |

<br/>

## Checkbox Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

<br/>

## Checkbox-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | array | — | — |
| disabled  | 是否禁用    | boolean   | — | false   |

<br/>

## Checkbox-group Events
| 事件名称      | 说明    | 回调参数      |
|----------     |--------|----------     |
| change        | 当绑定值变化时触发的事件 | 更新后的值 |

<br/>

## Checkbox-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |  —     |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |