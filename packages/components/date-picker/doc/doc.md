<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import preview from '@/components/preview.vue'
</script>


# DatePicker 日期选择器

#### 用于选择日期

<br/>

## 基础用法
<div class="source">
  <demo1/>
</div>
<preview compName="date-picker" demoName="demo1"/>


## 日期格式
#### 设置属性 format 可以改变日期的显示格式。
#### 注意，format 只是改变显示的格式，并非改变 value 值。
<div class="source">
  <demo2/>
</div>
<preview compName="date-picker" demoName="demo2"/>


## 禁用状态
#### 可以设置 disabled 属性来实现禁用状态
<div class="source">
  <demo3/>
</div>
<preview compName="date-picker" demoName="demo3"/>


## 日期范围
#### 设置type 为 daterange 可开启日期范围选择
#### 在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动。
<div class="source">
  <demo4/>
</div>
<preview compName="date-picker" demoName="demo4"/>


## 带有确认操作
#### 设置属性 confirm，选择器会有清空和确定按钮。确认按钮并没有影响日期的正常选择。
<div class="source">
  <demo5/>
</div>
<preview compName="date-picker" demoName="demo5"/>


## 快捷方式
#### 设置属性 shortcuts 可以设置快捷选项，详见示例代码。
<div class="source">
  <demo6/>
</div>
<preview compName="date-picker" demoName="demo6"/>


<br/>

## DatePicker Attributes
| 参数            | 说明                         | 类型             | 可选值                  | 默认值  |
|---------------  |----------------------        |---------------- |-----------------------  |-------- |
|  v-model        | 绑定值                       | string / array   | —                       | —       |
| type            | 类型，支持选择单个日期或者选择日期范围 | string   | date / daterange         | —       |
| placeholder     | 选择时的占位符                | string           |   —                     | —       |
| readonly        | 完全只读，开启后不会弹出选择器 | boolean          | —                       | false    |
| disabled        | 禁用                         | boolean          | —                       | false     |
| format          | 日期格式化                   | string     | 年：`yyyy`，月：`MM`，日：`dd`  | 'yyyy-MM-dd' |
| separator       | 选择范围时的分隔符           | string            | —                       |  	'-'     |
| unlink-panels   | 在范围选择器里取消两个日期面板之间的联动    | boolean                | —     |  	false   |
| confirm         | 是否显示底部控制栏            | boolean           | —                       |  false    |
| clearable       | 是否显示清除按钮              | boolean           | —                       |  true     |
| shortcuts       | 设置快捷选项，需要传入数组对象 | [{ text: string, value: function }] | —      |  —       |

<br/>

## DatePicker Events
| 事件名                   | 说明                   | 参数          |
|---------------------    |--------------          |---------      |
| on-change               | 日期发生变化时触发      | 格式化后的日期 |
| on-confirm              | 点击确定按钮时触发      | 格式化后的日期 |
| on-clear                | 在清空日期时触发        | —             |