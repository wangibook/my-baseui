<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'

import demo9 from './demo9.vue'
import demo10 from './demo10.vue'
import preview from '@/components/preview.vue'
</script>


# Table 表格

#### 用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

<br/>

## 基础表格
#### 基础的表格展示用法。
<div class="source">
  <demo1/>
</div>
<preview compName="table" demoName="demo1"/>


## 斑马纹
#### stripe属性可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用。
<div class="source">
  <demo2/>
</div>
<preview compName="table" demoName="demo2"/>


## 带边框 
#### 添加表格的边框线。可以使用border属性，它接受一个Boolean，设置为true即可启用。
<div class="source">
  <demo3/>
</div>
<preview compName="table" demoName="demo3"/>


## 特定样式
#### 行：通过属性 rowClassName 可以给某一行指定一个样式名称。
#### 列：通过给列 columns 设置字段 className 可以给某一列指定一个样式。
#### 单元格：通过给数据 data 设置字段 cellClassName 可以给任意一个单元格指定样式。
<div class="source">
  <demo4/>
</div>
<preview compName="table" demoName="demo4"/>


## 固定表头
#### 通过设置属性 height 给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用。
<div class="source">
  <demo5/>
</div>
<preview compName="table" demoName="demo5"/>


<!-- ## 固定列
#### 通过给数据 columns 的项设置 fixed 为 left 或 right，可以左右固定需要的列。当横向内容过多时可以使用。
<div class="source">
  <demo6/>
</div>
<preview compName="table" demoName="demo6"/>


## 固定表头和列
#### 同时应用上述两个属性，可以同时固定表头和列。
暂无


## 多级表头
#### 数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。只需要在 m-table-column 里面嵌套 m-table-column，就可以实现多级表头。
暂无 -->


## 单选 
#### 通过设置属性 highlight-current-row，可以选中某一行。
#### 当选择时，触发事件 @on-current-change，可以自定义操作，事件返回两个值 currentRow 和 oldCurrentRow，分别为当前行的数据和上一次选择的数据。
#### 如果需要显示索引，可以增加一列 m-table-column，设置type属性为index即可显示从 1 开始的索引号
<div class="source">
  <demo9/>
</div>
<preview compName="table" demoName="demo9"/>


## 多选
#### 选择多行数据时使用 Checkbox。传入数据列表每项需指定唯一id。
#### 手动添加一个el-table-column，指定 type: 'selection'，即可自动开启多选功能。
#### @on-selection-change，只要选中项发生变化时就会触发，返回值为 selection，已选项。
<div class="source">
  <demo10/>
</div>
<preview compName="table" demoName="demo10"/>
