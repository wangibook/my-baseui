<script setup>
// import demo1 from './demo1.vue'
// import demo2 from './demo2.vue'
// import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
// import demo5 from './demo5.vue'
// import demo6 from './demo6.vue'
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


## 其他日期单位
#### 通过扩展基础的日期选择，可以选择周、月、年
<div class="source">
  <demo6/>
</div>
<preview compName="date-picker" demoName="demo6"/>

<br/>