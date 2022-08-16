<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import preview from '@/components/preview.vue'
</script>


# Tree 树形控件

#### 用清晰的层级结构展示信息，可展开或折叠。

<br/>

## 基础用法
#### 基础的树形结构展示。
<div class="source">
  <demo1/>
</div>
<preview compName="tree" demoName="demo1"/>


## 可选择
#### 适用于需要选择层级时使用。设置show-checkbox 属性为true。并且可自定义数据结构的键名，默认为label 和 children
<div class="source">
  <demo2/>
</div>
<preview compName="tree" demoName="demo2"/>


## 默认展开和选中
#### 支持默认展开和选中，但是必须要设置node-key属性。 支持默认展开所有选项
<div class="source">
  <demo3/>
</div>
<preview compName="tree" demoName="demo3"/>


## 禁用状态
#### 通过 disabled 属性，可将 Tree 的某些节点设置为禁用状态。
<div class="source">
  <demo4/>
</div>
<preview compName="tree" demoName="demo4"/>


## 树节点的设置和获取
<div class="source">
  <demo5/>
</div>
<preview compName="tree" demoName="demo5"/>


## 自定义节点内容
#### 节点的内容支持自定义，可以在节点区添加按钮或图标等内容。
<div class="source">
  <demo6/>
</div>
<preview compName="tree" demoName="demo6"/>


<br/>

## Attributes
| 参数                  | 说明                                               | 类型                        | 可选值 | 默认值 |
| --------------------- | ------------------------------------------------  | --------------------------- | ---- | ----- |
| data                  | 展示数据                                           | array                       | —    | —     |
| label                 | 定义子节点名称在data数据对象中的键名                 | string                      | —    | label  |
| children              | 定义子节点数据在data数据对象中的键名                 | string                      | —    | children|
| show-checkbox         | 节点是否可被选择                                    | boolean                     | —    | false |
| node-key              | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的   | string                      | —    | —     |
| default-expand-all    | 是否默认展开所有节点                                | boolean                     | —    | false |
| default-expanded-keys | 默认的展开项                                       | array                       | —    | —     |
| default-checked-keys  | 默认的选中项                                       | array                       | —    | —     |
| disabled              | 是否禁用                                           | boolean                     | —    | false |
| render-content        | 自定义树节点的内容区的渲染 Function         | Function(h, { data, parentData })   | —    | —     |

<br/>

## Events
| 事件名         | 说明                  | 回调函数参数                     |
| -------------  | --------------------  | ------------------------------- |
| toggle-change  | 展开/收起子节点时触发  | 当前节点                         |
| checked-change | 节点选中/取消时触发    | 所有选中节点的数组、当前节点数据  |

<br/>

## Methods
| 方法名          | 说明                             | 参数         |
| --------------  | ------------------------------- | -----------  |
| setCheckedKeys  | 通过key设置选中的节点            | key数组      |
| getCheckedKeys  | 返回所有选中节点的key组成的数组   | -            |
| getCheckedNodes | 返回所有选中节点的数据组成的数组  | -            |
