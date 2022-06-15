<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import preview from '@/components/preview.vue';
</script>

# Button 按钮

#### 常用 button 按钮

<br/>

## 基本使用

#### button 按钮的基本使用

<br/>
<div class="source">
  <demo1/>
</div>
<preview compName="button" demoName="demo1"/>


## 禁用状态

#### 按钮不可用状态，通过 _disabled_ 属性设置实现

<br/>
<div class="source">
  <demo2/>
</div>
<preview compName="button" demoName="demo2"/>


## 带图标

#### 带图标类型的按钮，通过 leftIcon 或者 rightIcon 属性设置实现并确定 icon 出现的位置
<br/>
<div class="source">
  <demo3/>
</div>
<preview compName="button" demoName="demo3"/>


## 加载状态

#### 正在加载中的状态按钮，通过 _loading_ 属性设置实现
<br/>
<div class="source">
  <demo4/>
</div>
<preview compName="button" demoName="demo4"/>


## 不同大小

#### 不同大小类型的按钮，通过 _size_ 属性设置实现
<br/>
<div class="source">
  <demo5/>
</div>
<preview compName="button" demoName="demo5"/>

## Attributes 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| leftIcon  | 图标按钮，并且icon展示在左侧 | string   | 参考图标库 |  —  |
| rightIcon  | 图标按钮，并且icon展示在右侧 | string   |  参考图标库  |  —  |

<br/>