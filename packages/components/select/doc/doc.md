<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import preview from '@/components/preview.vue'
</script>

# Select 下拉框

#### 当选项过多时，使用下拉菜单展示并选择内容
<div class="source">
  <demo1/>
</div>
<preview compName="select" demoName="demo1"/>


## 禁用状态

#### 可以设置 disabled 属性来实现禁用状态
<div class="source">
  <demo2/>
</div>
<preview compName="select" demoName="demo2"/>


## 有禁用选项

#### 可以针对 options 下某个选项来添加 disabled 属性实现禁用选项
<div class="source">
  <demo3/>
</div>
<preview compName="select" demoName="demo3"/>


## 可清空单选

#### 包含清空按钮，可将选择器清空为初始状态
<div class="source">
  <demo4/>
</div>
<preview compName="select" demoName="demo4"/>


<br/>


