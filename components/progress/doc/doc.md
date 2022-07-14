<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import preview from '@/components/preview.vue';
</script>

# Progress 进度条

#### 用于展示操作进度，告知用户当前状态和预期

<br/>

## 直线进度条
#### Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过 format 属性来指定进度条文字内容
<div class="source">
  <demo1/>
</div>
<preview compName="progress" demoName="demo1"/>


## 百分比内显
#### 百分比不占用额外控件，适用于文件上传等场景。Progress 组件可通过 stroke-height 属性更改进度条的高度，并可通过 text-inside 属性来改变进度条内部的文字。
<div class="source">
  <demo2/>
</div>
<preview compName="progress" demoName="demo2"/>


## 自定义颜色
#### 可以通过 color 属性来设置进度条的颜色。 该属性可以接受十六进制颜色值，函数和数组
<div class="source">
  <demo3/>
</div>
<preview compName="progress" demoName="demo3"/>


## 环形进度条
#### Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小
<div class="source">
  <demo4/>
</div>
<preview compName="progress" demoName="demo4"/>


## 仪表盘形进度条
#### 通过指定 type 属性到 dashboard 使用控制面板进度栏
<div class="source">
  <demo5/>
</div>
<preview compName="progress" demoName="demo5"/>


## Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| **percentage** | **百分比（必填）**   | number         |     0-100          |     0    |
| type          | 进度条类型            | string         | line/circle/dashboard | line |
| stroke-width  | 进度条的宽度，单位 px  | number          | — | 6 |
| text-inside   | 进度条显示文字内置在进度条内（只在 type=line 时可用） | boolean | — | false |
| status        | 进度条当前状态 | string | success/warning/error | — |
| color         | 进度条背景色（会覆盖 status 状态颜色） | string/function/array | — | '' |
| width         | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） | number |  | 126 |
| show-text     | 是否显示进度条文字内容   | boolean | — | true |
| stroke-linecap  | circle/dashboard 类型路径两端的形状 | string | butt/round/square | round |
| format          | 指定进度条文字内容     | function(percentage) | — | — |

<br/>