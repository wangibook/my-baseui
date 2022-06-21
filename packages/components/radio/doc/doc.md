<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import preview from '@/components/preview.vue';
</script>

# Radio 单选框

#### 在一组备选项中进行单选


## 基础用法
要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean
<div class="source">
  <demo1/>
</div>
<preview compName="radio" demoName="demo1"/>


## 禁用状态

#### 单选框不可用的状态，通过设置 disabled 属性实现
<div class="source">
  <demo2/>
</div>
<preview compName="radio" demoName="demo2"/>


## 单选框组

#### 适用于在多个互斥的选项中选择的场景
<div class="source">
  <demo3/>
</div>
<preview compName="radio" demoName="demo3"/>


## 按钮样式

#### 按钮样式的单选组合
