<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import preview from '@/components/preview.vue'
</script>

# Rate 评分

#### 评分组件，对评价进行展示。

<br/>

## 基础用法
#### 评分基础用法。
<div class="source">
  <demo1/>
</div>
<preview compName="rate" demoName="demo1"/>


## 半星
#### 设置属性 allow-half 可以选中半星。
<div class="source">
  <demo2/>
</div>
<preview compName="rate" demoName="demo2"/>


## 显示提示
#### 设置属性 show-text 可以显示提示文字。提示内容也可以通过 slot 自定义。
<div class="source">
  <demo3/>
</div>
<preview compName="rate" demoName="demo3"/>


## 只读
#### 设置属性 disabled 开启只读模式，无法交互。
<div class="source">
  <demo4/>
</div>
<preview compName="rate" demoName="demo4"/>


## 清除
#### 支持允许或者禁用清除。设置 clearable 属性，可以允许清除。
<div class="source">
  <demo5/>
</div>
<preview compName="rate" demoName="demo5"/>


## 自定义字符或图标
#### 设置 character 属性，可以自定义字符。设置 icon 属性，可以自定义图标。
<div class="source">
  <demo6/>
</div>
<preview compName="rate" demoName="demo6"/>

<br/>

## Attributes
| 参数            | 说明                         | 类型             | 可选值                  | 默认值  |
|---------------  |----------------------        |---------------- |-----------------------  |-------- |
| v-model         | 绑定值                       | number           |  —                      | 0       |
| count           | star 总数                    | number           |  —                      | 5       |
| allow-half      | 是否允许半选                  | boolean          |  —                      | false   |
| disabled        | 是否只读，无法进行交互         | boolean          |  —                      | false   |
| show-text       | 是否显示提示文字              | boolean          |  —                      | false    |
| clearable       | 是否可以取消选择              | boolean          |  —                      | false    |
| character       | 自定义字符                    | string           |  —                      | —        |
| icon            | 使用图标                      | string           |  —                      | —        |

<br/>

## Events
| 事件名                   | 说明                   | 返回值          |
|---------------------    |--------------          |---------        |
| on-change               | 评分改变时触发          | 	value         |

<br/>