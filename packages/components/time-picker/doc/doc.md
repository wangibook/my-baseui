<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import preview from '@/components/preview.vue'
</script>


# TimePicker 时间选择器

#### 用于选择时间

<br/>

## 基础用法
<div class="source">
  <demo1/>
</div>
<preview compName="time-picker" demoName="demo1"/>


## 时间格式 
#### 设置属性 format 可以改变时间的显示格式。
#### 注意，format 只是改变显示的格式，并非改变 value 值。
<div class="source">
  <demo2/>
</div>
<preview compName="time-picker" demoName="demo2"/>


## 禁用状态
#### 可以设置 disabled 属性来实现禁用状态
<div class="source">
  <demo3/>
</div>
<preview compName="time-picker" demoName="demo3"/>


## 时间范围
#### 设置type 为 timerange 可开启时间范围选择
<div class="source">
  <demo4/>
</div>
<preview compName="time-picker" demoName="demo4"/>

## 带有确认操作 
#### 设置属性 confirm，选择器会有清空和确定按钮。确认按钮并没有影响时间的正常选择。
<div class="source">
  <demo5/>
</div>
<preview compName="time-picker" demoName="demo5"/>

<br/>

## TimePicker Attributes
| 参数            | 说明                         | 类型             | 可选值                  | 默认值  |
|---------------  |----------------------        |---------------- |-----------------------  |-------- |
|  v-model        | 绑定值                       | string / array   | —                       | —       |
| type            | 类型，支持选择单个时间或者选择时间范围 | string   | time / timerange         | —      |
| placeholder     | 选择时的占位符                | string           |   —                     | —       |
| readonly        | 完全只读，开启后不会弹出选择器 | boolean          | —                       | false    |
| disabled        | 禁用                         | boolean          | —                       | false     |
| format          | 时间格式化                   | string     | 小时：`HH`，分：`mm`，秒：`ss`  | 'HH:mm:ss' |
| separator        | 选择范围时的分隔符           | string            | —                      |  	'-'     |

<br/>

## TimePicker Events
| 事件名                   | 说明                   | 参数          |
|---------------------    |--------------          |---------      |
| on-change               | 时间发生变化时触发      | 格式化后的时间 |
| on-confirm              | 点击确定按钮时触发      | 格式化后的时间 |
| on-clear                | 在清空日期时触发        | —             |