<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import preview from '@/components/preview.vue';
</script>

# Space 间距

#### 常用于多个组件，或多个元素之间的间距设置，避免紧贴在一起

<br/>

## 基本使用

#### space 的基本使用
<div class="source">
  <demo1/>
</div>
<preview compName="space" demoName="demo1"/>


## 纵向布局

#### 使用 direction 来控制布局的方式
<div class="source">
  <demo2/>
</div>
<preview compName="space" demoName="demo2"/>


## 自定义 Size

#### 通过调整 size 的值来控制间距的大小
<div class="source">
  <demo3/>
</div>
<preview compName="space" demoName="demo3"/>


## Attributes 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction     | 排列的方向   | string    |   vertical/horizontal      |    	horizontal    |
| size     | 间隔大小   | string / number   |   -      |    10     |

<br/>
