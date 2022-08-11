<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'
import preview from '@/components/preview.vue'
</script>


# Pagination 分页

#### 当数据量过多时，使用分页分解数据。

<br/>


## 基础用法
#### 基本的分页，页数过多时会自动折叠。
<div class="source">
  <demo1/>
</div>
<preview compName="pagination" demoName="demo1"/>


## 带有背景色的分页
#### 设置background属性可以为分页按钮添加背景色。
<div class="source">
  <demo2/>
</div>
<preview compName="pagination" demoName="demo2"/>


## 小型分页
#### 在空间有限的情况下，可以使用简单的小型分页。设置size为small即可。
<div class="source">
  <demo3/>
</div>
<preview compName="pagination" demoName="demo3"/>


## 显示总数
#### 显示总共多少条数据，传递total，并设置show-total 为true即可。
<div class="source">
  <demo4/>
</div>
<preview compName="pagination" demoName="demo4"/>


## 每页数量
#### 可以切换每页显示的数量。设置show-sizer 为 true
<div class="source">
  <demo5/>
</div>
<preview compName="pagination" demoName="demo5"/>


## 电梯
#### 快速跳转到某一页。设置show-elevator 为 true
<div class="source">
  <demo6/>
</div>
<preview compName="pagination" demoName="demo6"/>


## 完整功能
<div class="source">
  <demo7/>
</div>
<preview compName="pagination" demoName="demo7"/>

<br/>

## Attributes
| 参数           | 说明                           | 类型              | 可选值      | 默认值 |
|----------------|-------------------------------|-------------------|-------------|--------|
| total          | 总条目数                       |  number  | — | —     |
| background     | 是否为分页按钮添加背景色         | boolean | — | false |
| small          | 	可选值为small或不填（默认）     | string  | — | —     |
| current-page   | 当前页数                       | number    | — | 1    |
| page-size      | 每页显示条目个数                | number   | — | 10    |
| page-size-opts | 每页显示个数选择器的选项设置     | array    | — |  [10, 20, 30, 40] |
| show-total     | 显示总数                       |  boolean  | — | false  |
| show-elevator  | 显示电梯，可以快速切换到某一页   | boolean  | — | false  |
| show-sizer     | 显示分页，用来改变page-size     | boolean  | — | false  |

<br/>

## Events
| 事件名称 | 说明 | 回调参数 |
|---------|-------|---------|
| size-change    | pageSize 改变时会触发  | 每页条数 |
| current-change | currentPage 改变时会触发 | 当前页 |

<br/>