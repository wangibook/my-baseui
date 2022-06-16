<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import preview from '@/components/preview.vue'
</script>

# Textarea 文本域

#### 用于段落文本的填写或输入

<br/>

## 基本使用

#### Textarea 文本域基本使用
<div class="source">
  <demo1/>
</div>
<preview compName="textarea" demoName="demo1"/>


## 禁用状态

#### 通过 disabled 属性指定是否禁用
<div class="source">
  <demo2/>
</div>
<preview compName="textarea" demoName="demo2"/>


## 限制长度

#### 使用 maxlength 属性来控制输入最大字数, 允许通过设置 show-word-limit 到 true 来显示剩余字数
<div class="source">
  <demo3/>
</div>
<preview compName="textarea" demoName="demo3"/>


## Attributes
| 参数          | 说明            | 类型            | 可选值         | 默认值   |
|------------   |---------------- |---------------- |-------------- |-------- |
| value / v-model | 绑定值         | string / number | —      | —      |
| placeholder   | 输入框占位文本    | string          | —      | —      |
| disabled      | 禁用             | boolean         | —      | false   |
| rows          | textarea可见区域高度   | number         | —      | 4   |
| cols          | textarea可见区域宽度   | number         | —      | 50   |
| maxlength     | 文本区域的最大字符数    | number         | —      | —    |
| show-word-limit | 是否显示输入字数统计    | boolean       | —      | false    |
| readonly      | 原生属性，是否只读      | boolean        | —      | false |


## Events
| 事件名 | 说明 | 回调参数 |  示例  |
|----------|--------|---------|--------|
| input  | 在 Input 值改变时触发  | (value: string \| number) | input=(e)=>{console.log(e)} |
| blur   | 在 Input 失去焦点时触发 | (event: Event) | blur=(e)=>{console.log(e)} |
| focus  | 在 Input 获得焦点时触发 | (event: Event) | focus=(e)=>{console.log(e)} |

<br/>


