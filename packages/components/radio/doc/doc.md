<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import preview from '@/components/preview.vue';
</script>

# Radio 单选框

#### 在一组备选项中进行单选


## 基础用法
要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean
<div class="source">
  <demo1/>
</div>
<preview compName="radio" demoName="demo1"/>


## 禁用状态

#### 单选框不可用的状态，通过设置 disabled 属性实现
<div class="source">
  <demo2/>
</div>
<preview compName="radio" demoName="demo2"/>


## 单选框组

#### 适用于在多个互斥的选项中选择的场景
<div class="source">
  <demo3/>
</div>
<preview compName="radio" demoName="demo3"/>


## 按钮样式

#### 按钮样式的单选组合
<div class="source">
  <demo4/>
</div>
<preview compName="radio" demoName="demo4"/>


## 带有边框

#### 设置 border 属性为 true 可以渲染为带有边框的单选框
<div class="source">
  <demo5/>
</div>
<preview compName="radio" demoName="demo5"/>


## Radio Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |

<br/>

## Radio Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

<br/>

## Radio-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| size     | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效   | string  | medium / small / mini |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |

<br/>

## Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

<br/>

## Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string / number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |

<br/>