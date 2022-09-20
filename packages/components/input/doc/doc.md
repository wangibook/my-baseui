<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import demo7 from './demo7.vue';
import preview from '@/components/preview.vue';
</script>

# Input 输入框

#### 数据输入框类型，通过键盘输入字符

<br/>

## 基本使用

#### input 的基本使用
<div class="source">
  <demo1/>
</div>
<preview compName="input" demoName="demo1"/>


## 禁用状态

#### 通过 _disabled_ 属性指定是否禁用 input 组件 
<div class="source">
  <demo2/>
</div>
<preview compName="input" demoName="demo2"/>


## 可清空数据

#### 使用 _clearable_ 属性即可得到一个可清空的输入框
<div class="source">
  <demo3/>
</div>
<preview compName="input" demoName="demo3"/>


## 带图标

#### 可使用 _leftIcon_ 或者 _rightIcon_ 来定义显示图标并确定显示的位置
<div class="source">
  <demo4/>
</div>
<preview compName="input" demoName="demo4"/>


## 不同大小

#### 通过设置 _size_ 属性来适应不同大小
<div class="source">
  <demo5/>
</div>
<preview compName="input" demoName="demo5"/>


## 密码类型

#### 密码类型的输入框，可通过 _showPassword_ 来启用是否开启显示密码
<div class="source">
  <demo6/>
</div>
<preview compName="input" demoName="demo6"/>


## 复合型输入框

#### 可通过 _slot_ 来指定在 input 中前置或者后置内容。
<div class="source">
  <demo7/>
</div>
<preview compName="input" demoName="demo7"/>


## Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text | text |
| value / v-model | 绑定值           | string / number  | — | — |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| showPassword  | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用             | boolean         | — | false   |
| size          | 尺寸大小          | string          | medium / small / mini  | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |


## Events
| 事件名 | 说明 | 回调参数 |  示例  |
|----------|--------|---------|--------|
| blur   | 在 Input 失去焦点时触发 | (event: Event) | blur=(e)=>{console.log(e)} |
| focus  | 在 Input 获得焦点时触发 | (event: Event) | focus=(e)=>{console.log(e)} |
| change | 在 Input 失去焦点或用户按下回车时触发 | (event: Event) | change=(e)=>{console.log(e)} |
| input  | 在 Input 值改变时触发 | (value: string \| number) | input=(e)=>{console.log(e)} |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |  — | 

<br/>