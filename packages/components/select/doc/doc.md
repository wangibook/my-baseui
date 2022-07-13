<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import preview from '@/components/preview.vue'
</script>

# Select 下拉框

#### 当选项过多时，使用下拉菜单展示并选择内容
<div class="source">
  <demo1/>
</div>
<preview compName="select" demoName="demo1"/>


## 禁用状态

#### 可以设置 disabled 属性来实现禁用状态
<div class="source">
  <demo2/>
</div>
<preview compName="select" demoName="demo2"/>


## 有禁用选项

#### 可以针对 options 下某个选项来添加 disabled 属性实现禁用选项
<div class="source">
  <demo3/>
</div>
<preview compName="select" demoName="demo3"/>


## 可清空单选

#### 包含清空按钮，可将选择器清空为初始状态
<div class="source">
  <demo4/>
</div>
<preview compName="select" demoName="demo4"/>


## 基础多选

#### 通过设置 multiple 属性来开启多选
<div class="source">
  <demo5/>
</div>
<preview compName="select" demoName="demo5"/>


## 可搜索
#### 可以利用搜索功能快速查找选项，通过设置 searchable 属性来开启
<div class="source">
  <demo6/>
</div>
<preview compName="select" demoName="demo6"/>

<br/>

## Attributes 
| 参数          | 说明                   | 类型      | 可选值                           | 默认值  |
|-------------- |---------------------  |---------- |--------------------------------  |-------- |
| v-model       | 下拉框绑定值，开启多选时类型为array  |  string / array  | — | — |
| placeholder   | 占位符                 | string    |     —            | 请选择 |
| multiple      | 是否多选               | boolean   |     —            | false |
| disabled      | 是否禁用               | boolean   |     —            | false |
| clearable     | 是否可以清空选项        | boolean   |     —            | false |
| searchable    | 是否开启过滤搜索        | boolean   |     —            | false |
| options       | 下拉框数据配置          | array     |     —            | []    |

<br/>

## Events
| 事件名称      | 说明                  | 回调参数      |  示例     |
|----------    |---------------        | ----------   | ---------- |
| change       | 下拉框选中事件         | —            | change = (item) =>{console.log(item)} |
