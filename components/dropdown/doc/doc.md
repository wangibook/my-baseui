<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import preview from '@/components/preview.vue';
</script>


# Dropdown 下拉菜单

#### 将动作或菜单折叠到下拉菜单中

<br/>

## 基础用法
#### 移动到下拉菜单上，展开更多操作。通过组件slot来设置下拉触发的元素以及需要通过具名slot为dropdown 来设置下拉菜单。
<div class="source">
  <demo1/>
</div>
<preview compName="dropdown" demoName="demo1"/>


## 禁用状态
#### 可以设置 disabled 属性来实现禁用状态。作用于m-dropdown，表示禁用整个下拉菜单；作用于m-dropdown-item，表示禁用单个项。
<div class="source">
  <demo2/>
</div>
<preview compName="dropdown" demoName="demo2"/>



## 触发对象
#### 可以配置 click 激活或者 hover 激活。将 trigger 属性设置为 click 即可， 默认为 hover。
<div class="source">
  <demo3/>
</div>
<preview compName="dropdown" demoName="demo3"/>


## 图标类型
#### 通过设置 icon 属性展示图标
<div class="source">
  <demo4/>
</div>
<preview compName="dropdown" demoName="demo4"/>


## 头像类型
#### 通过插槽 #Img 设置头像类型的下拉菜单
<div class="source">
  <demo5/>
</div>
<preview compName="dropdown" demoName="demo5"/>

<br/>

## Dropdown Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| trigger       | 触发下拉的行为   | string          | hover, click          | hover   |
| title         | 下拉菜单标题     | string          | —                     | —       |
| disabled      | 是否禁用        | boolean         | —                      | false   |

<br/>

## Dropdown Slots
| Name | 说明 |
|------|--------|
| img      | 设置头像类型的插槽  |
| dropdown | 下拉列表，通常是 `<el-dropdown-menu>` 组件     |

<br/>

## Dropdown Events
| 事件名称      | 说明            | 回调参数      |
|----------     |------------    |---------- |
| change        | 下拉菜单选择事件 | —        |

<br/>

## Dropdown Menu Item Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| disabled      | 禁用            | boolean          | — | false |
| divided       | 显示分割线       | boolean          | — | false |
| icon          | 图标类名         | string           |  —  |  —  |

<br/>