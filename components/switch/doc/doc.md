<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import preview from '@/components/preview.vue'
</script>

# Switch 开关

#### 表示两种相互对立的状态间的切换，多用于触发「开/关」

<br/>

## 基本用法
绑定v-model到一个Boolean类型的变量
<div class="source">
  <demo1/>
</div>
<preview compName="switch" demoName="demo1"/>


## 禁用状态
设置disabled属性，接受一个Boolean，设置true即可禁用
<div class="source">
  <demo2/>
</div>
<preview compName="switch" demoName="demo2"/>


## 文字描述
使用active-text属性与inactive-text属性来设置开关的文字描述，使用active-color属性与inactive-color属性来设置开关的背景色
<div class="source">
  <demo3/>
</div>
<preview compName="switch" demoName="demo3"/>


## 尺寸大小
使用 size 属性改变尺寸大小。 除了默认大小外，还有另外两个选项： large, small
<div class="source">
  <demo4/>
</div>
<preview compName="switch" demoName="demo4"/>



## Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model   | 绑定值   | boolean  | true / false | — |
| disabled  | 是否禁用    | boolean   | true / false | false   |
| active-text  | switch 打开时的文字描述    | string   | — | — |
| inactive-text  | switch 关闭时的文字描述    | string   | — | — |
| active-color  | switch 打开时的背景色    | string   | — | #409EFF |
| inactive-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
| size  | 	switch 的大小    | string   | large / default / small | — |

<br/>

## Events
| 事件名称      | 说明    | 回调参数      |
|----------     |-------- |----------    |
| change         | switch 状态发生变化时的回调函数    | 新状态的值 |

<br/>