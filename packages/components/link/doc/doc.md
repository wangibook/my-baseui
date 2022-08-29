<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import preview from '@/components/preview.vue';
</script>

# Link 链接

#### 文字超链接

<br/>

## 基础用法
#### 基础的文字链接用法
<div class="source">
  <demo1/>
</div>
<preview compName="link" demoName="demo1"/>


## 禁用状态
#### 文字链接不可用状态
<div class="source">
  <demo2/>
</div>
<preview compName="link" demoName="demo2"/>


## 下划线
#### 文字链接下划线
<div class="source">
  <demo3/>
</div>
<preview compName="link" demoName="demo3"/>


## 图标
#### 带图标的链接
<div class="source">
  <demo4/>
</div>
<preview compName="link" demoName="demo4"/>


## Attributes 参数
| 参数          | 说明            | 类型            | 可选值         | 默认值   |
|------------   |---------------- |----------------|-------------- |-------- |
| type          | 类型            | string          |	primary / success / warning / danger / info      | default      |
| href          | 原生 href 属性   | string         | —       | —          |
| underline     | 是否下划线       | boolean         | —      | 	true     |
| disabled      | 是否禁用状态     | boolean         | —      | false      |
| leftIcon      | 图标类名,并且展示在左侧   | string     | 参考图标库      | 	—     |
| rightIcon     | 图标类名,并且展示在右侧   | string     | 参考图标库      |  —     |
  
<br/>

