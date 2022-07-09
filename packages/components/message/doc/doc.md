<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import preview from '@/components/preview.vue';
</script>

# Message 消息提示

#### 常用于主动操作后的反馈提示。

<br/>

## 基础用法
#### 从顶部出现，3 秒后自动消失。此外，timeout属性 可以控制关闭时间， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。
<div class="source">
  <demo1/>
</div>
<preview compName="message" demoName="demo1"/>


## 不同状态
#### 可根据 Message 参数的 type 来定义显示不同的状态。
<div class="source">
  <demo2/>
</div>
<preview compName="message" demoName="demo2"/>


## 文字居中
#### 使用 center 属性让文字水平居中。
<div class="source">
  <demo3/>
</div>
<preview compName="message" demoName="demo3"/>


## 可关闭
#### 可以添加关闭按钮。默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用showClose字段
<div class="source">
  <demo4/>
</div>
<preview compName="message" demoName="demo4"/>


## 全局方法
#### 可以通过获取组件实例的方式来调用。
<div class="source">
  <demo5/>
</div>
<preview compName="message" demoName="demo5"/>

<br/>

## Message 配置项
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text      | 消息文字       | string / VNode | — | — |
| type      | 主题           | string | success/warning/info/error | info |
| icon      | 消息提示Icon图标 | 参考图标库 | — | — |
| timeout   | 消息提示框消失时间（单位：毫秒ms） | number | — | 3000 |
| textColor | 文本颜色，type 为 custom 时有效 | string| — | — |
| bgColor   | 背景颜色，type 为 custom 时有效 | string | — | —  |
| customClass| 自定义组件类名  | string   | — | —  |
| showClose | 是否显示关闭按钮 | boolean  | — | false |
| center    | 文字是否居中     | boolean  | — | false |

<br/>