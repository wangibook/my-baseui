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

# InputNumber 计数器

#### 仅允许输入标准的数字值，可定义范围

<br/>

## 基础用法
#### 要使用它，只需要在m-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值
<div class="source">
  <demo1/>
</div>
<preview compName="input-number" demoName="demo1"/>


## 禁用状态
#### disabled属性接受一个Boolean，设置为true即可禁用整个组件
<div class="source">
  <demo2/>
</div>
<preview compName="input-number" demoName="demo2"/>


## 步数
#### 允许定义递增递减的步数控制,设置step属性可以控制步长，接受一个Number
<div class="source">
  <demo3/>
</div>
<preview compName="input-number" demoName="demo3"/>


## 严格步数
#### step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数
<div class="source">
  <demo4/>
</div>
<preview compName="input-number" demoName="demo4"/>


## 精度
#### 设置 precision 属性可以控制数值精度，接收一个 Number
<div class="source">
  <demo5/>
</div>
<preview compName="input-number" demoName="demo5"/>


## 按钮位置
#### 设置 controls-position 属性可以控制按钮位置
<div class="source">
  <demo6/>
</div>
<preview compName="input-number" demoName="demo6"/>


## 尺寸
#### 使用 size 属性额外配置尺寸，可选的尺寸大小为：medium 或 small
<div class="source">
  <demo7/>
</div>
<preview compName="input-number" demoName="demo7"/>


<br/>

## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| v-model  | 绑定值         | number | — | —    |
| min      | 设置计数器允许的最小值 | number | — | -Infinity |
| max      | 设置计数器允许的最大值 | number | — | Infinity |
| step     | 计数器步长           | number   | — | 1 |
| step-strictly | 是否只能输入 step 的倍数 | boolean   | — | false |
| precision| 数值精度             | number   | — | — |
| size     | 计数器尺寸           | string   | medium, small | — |
| disabled | 是否禁用计数器        | boolean | — | false |
| controls | 是否使用控制按钮        | boolean | — | true |
| controls-position | 控制按钮位置 | string | right | - |
| name | 原生属性 | string | — | — |

<br/>

## Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 绑定值被改变时触发 | currentValue |
| blur | 在组件 Input 失去焦点时触发 | (event: Event) |
| focus | 在组件 Input 获得焦点时触发 | (event: Event) |

<br/>




