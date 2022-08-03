<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import preview from '@/components/preview.vue'
</script>


# Tabs 标签页

#### 用于多个视图、数据切换展示操作


## 基本使用
#### 基础的、简洁的标签页。Tabs 组件提供了选项卡功能， 默认选中第一个标签页。
<div class="source">
  <demo1/>
</div>
<preview compName="tabs" demoName="demo1"/>


## 选项卡样式
#### 选项卡样式的标签页。只需要设置 type 属性为 card 就可以使选项卡改变为标签风格。
<div class="source">
  <demo2/>
</div>
<preview compName="tabs" demoName="demo2"/>


## 选项卡加图标
#### 可以通过设置 icon 属性为选项卡添加图标。
<div class="source">
  <demo3/>
</div>
<preview compName="tabs" demoName="demo3"/>


## 禁用
#### 设置 disabled 属性禁用此选项卡
<div class="source">
  <demo4/>
</div>
<preview compName="tabs" demoName="demo4"/>


## 位置
#### 可以通过 tab-position 设置标签的位置。标签一共有四个方向的设置 tabPosition="left|right|top|bottom"
<div class="source">
  <demo5/>
</div>
<preview compName="tabs" demoName="demo5"/>


## 自定义颜色
#### 可以通过设置 activeColor 自定义选中状态的字体颜色，以及指示器的颜色。
<div class="source">
  <demo6/>
</div>
<preview compName="tabs" demoName="demo6"/>

<br/>

## Tabs Attributes
| 参数       | 说明    | 类型      | 可选值        | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model   | 绑定值，选中选项卡的 name  | string   |  —  |  第一个选项卡的 name |
| type      | 选项卡类型   | string   | line/card  |     line   |
| tab-position  | 选项卡所在位置 | string   |  top/right/bottom/left  |  top |
| activeColor   | 选中状态的字体颜色，以及指示器的颜色 | string   |  —   |  —  |

<br/>

## Tabs Events
| 事件名称   |  说明   | 回调参数   |
|---------- |-------- |---------- |
| tab-click  | tab 被选中时触发 | 被选中的标签 tab 实例 |

<br/>

## Tab-pane Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |--------   |---------- |-------------  |-------- |
| label     | 选项卡标题    | string   | — |    —     |
| name      | 选项卡name    | string   | — |   —      |
| icon      | 选项卡的图标   | string   | — |   —      |
| disabled  | 是否禁用      | boolean   | — | false   |

