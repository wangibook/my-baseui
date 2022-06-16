<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import preview from '@/components/preview.vue'
</script>

# Layout 布局

#### 简单的自适应页面布局

## 基本使用

#### 使用单一分栏创建基础的栅格布局。
通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
<br/>
<div class="source">
  <demo1/>
</div>
<preview compName="layout" demoName="demo1"/>


## 分栏间隔

#### 支持列间距。
行提供 gutter 属性来指定列之间的间距。
<br/>
<div class="source">
  <demo2/>
</div>
<preview compName="layout" demoName="demo2"/>


## 混合布局

#### 通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
<br/>
<div class="source">
  <demo3/>
</div>
<preview compName="layout" demoName="demo3"/>


## 列偏移

#### 通过制定 col 组件的 offset 设置偏移占用指定的列数。
<br/>
<div class="source">
  <demo4/>
</div>
<preview compName="layout" demoName="demo4"/>


## Attributes 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| span     | 栅格占据的列数   | number    |   —      |    	24    |
| offset     | 	栅格左侧的间隔格数   |  number   |   —       |    —     |
| gutter     | 	栅格间隔   |  number   |   —       |    —     |

<br/>

