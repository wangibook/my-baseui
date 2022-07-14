<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import preview from '@/components/preview.vue';
</script>

# Card 卡片

#### 将信息聚合在卡片容器中展示

<br/>

## 基础用法
#### 卡片包含标题，内容以及操作区域。
#### Card 组件由 header 和 body 组成。 header 是可选的，其内容取决于一个具名的 slot。
<div class="source">
  <demo1/>
</div>
<preview compName="card" demoName="demo1"/>


## 简单卡片
#### 卡片可以只有内容区域。
<div class="source">
  <demo2/>
</div>
<preview compName="card" demoName="demo2"/>


## 有图片内容的卡片
#### 可配置定义更丰富的内容展示。配置body-style属性来自定义body部分的样式
<div class="source">
  <demo3/>
</div>
<preview compName="card" demoName="demo3"/>


## 卡片阴影
#### 可对阴影的显示进行配置。通过shadow属性设置卡片阴影出现的时机：always、hover或never
<div class="source">
  <demo4/>
</div>
<preview compName="card" demoName="demo4"/>


## Attributes
| 参数      | 说明     | 类型      | 可选值        | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header     | 设置 header，也可以通过 `slot#header` 传入 DOM节点 | string| — | — |
| body-style | 设置 body 的样式    | object| — | { padding: '20px' } |
| shadow     | 设置阴影显示时机     | string | always / hover / never | always |

<br/>