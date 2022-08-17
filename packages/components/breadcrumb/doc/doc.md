<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import preview from '@/components/preview.vue'
</script>

# Breadcrumb 面包屑

#### 显示当前页面的路径，快速返回之前的任意页面。

<br/>


## 基础用法
<div class="source">
  <demo1/>
</div>
<preview compName="breadcrumb" demoName="demo1"/>


## 带图标
#### 可自定义每项的内容，比如带有一个图标。
<div class="source">
  <demo2/>
</div>
<preview compName="breadcrumb" demoName="demo2"/>


## 分隔符
#### 通过设置 separator 属性来自定义分隔符，比如>
#### 也可以通过 separator-class 设置相应的 iconfont 作为分隔符，注意这将使 separator 设置失效
<div class="source">
  <demo3/>
</div>
<preview compName="breadcrumb" demoName="demo3"/>

<br/>

## Breadcrumb Attributes
| 参数             | 说明             | 类型        | 可选值            | 默认值  |
|---------------   |--------------    |----------  |-----------------  |-------- |
| separator        | 分隔符           |  string     | —                 | 斜杠'/' |
| separator-class  | 图标分隔符 class | string      | —                 | -       |

<br/>

## Breadcrumb Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |

<br/>