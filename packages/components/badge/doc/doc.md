<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import preview from '@/components/preview.vue';
</script>

# Badge 徽章

#### 按钮和图标上的数字或状态标记。

<br/>

## 基础用法
#### 可以用来展示新消息的数量。通过设置 value 来调整标记所展示的内容，支持 Number 或者 String 作为参数
<div class="source">
  <demo1/>
</div>
<preview compName="badge" demoName="demo1"/>


## 最大值
#### 可自定义最大值。由max属性定义，它接受一个Number， 要注意的是，该值当且仅当在 value 的值也是 Number 时生效。
<div class="source">
  <demo2/>
</div>
<preview compName="badge" demoName="demo2"/>


## 自定义内容
#### 可以显示数字以外的文本内容。定义value为String类型是时可以用于显示自定义文本。
<div class="source">
  <demo3/>
</div>
<preview compName="badge" demoName="demo3"/>


## 小红点
#### 通过一个小红点标记来告知用户有新内容。除了数字外，设置is-dot属性 ，它接受一个Boolean 类型作为参数。
<div class="source">
  <demo4/>
</div>
<preview compName="badge" demoName="demo4"/>

<br/>

## Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| value        | 显示值           | string, number  |          —            |    —    |
| max          | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |         —              |     —    |
| is-dot       | 小圆点           | boolean         |         —             |  false  |
| hidden       | 隐藏 badge       | boolean         |         —             |  false  |
| type         | 类型             | string          | primary / success / warning / danger / info |    —    |

<br/>