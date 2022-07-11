<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import preview from '@/components/preview.vue';
</script>

# Drawer 抽屉

#### 从屏幕四边出现的蒙版组件

<br/>

## 基本用法
#### 呼出一个临时的侧边栏, 可以从多个方向呼出
<div class="source">
  <demo1/>
</div>
<preview compName="drawer" demoName="demo1"/>


## 不添加 Title
#### 当你不需要标题到时候, 你还可以去掉标题
<div class="source">
  <demo2/>
</div>
<preview compName="drawer" demoName="demo2"/>


## 自定义内容
#### 像 Dialog 组件一样，Drawer 也可以用来显示多种不同的交互
<div class="source">
  <demo3/>
</div>
<preview compName="drawer" demoName="demo3"/>


## 嵌套抽屉
#### Drawer 组件也拥有多层嵌套的方法
<div class="source">
  <demo4/>
</div>
<preview compName="drawer" demoName="demo4"/>


## 使用具名插槽自定义
#### 使用具名插槽 #header 、#footer 可对抽屉整体根据需要自定义
<div class="source">
  <demo5/>
</div>
<preview compName="drawer" demoName="demo5"/>

<br/>

## Attributes
| 参数      | 说明            | 类型          | 可选值                           | 默认值  |
|---------- |--------------  |----------     |--------------------------------  |-------- |
| v-model   | 是否显示 Drawer | 	boolean    | —      | 	false   |
| title     | Drawer 的标题，也可通过具名 slot传入     | string    | — | — |
| direction | Drawer 打开的方向 | string | left / top / right / bottom | right |
| width     | 抽屉区域宽度，direction 为 left 和 right 时有效 | string    | — | 30% |
| height    | 抽屉区域高度，direction 为 top 和 bottom 时有效 | string    | — | 40% |
| show-close| 是否显示关闭按钮 | boolean          | — | true |
| append-to-body  | Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true   | boolean   | — | false |
| wrapperClosable | 点击遮罩层是否可以关闭 Drawer  | boolean | - | true |
| withHeader | 控制是否显示 header 栏, 默认为 true | boolean | - | true |
| custom-class | Drawer 的自定义类名 | string    | — | — |

<br/>

## Slot
| name   | 说明          |
|------  |-------------- |
| —      | Drawer 的内容 |
| header | Drawer 标题区的内容     |
| footer | Drawer 按钮操作区的内容 |

<br/>

## Events
| 事件名称      | 说明    | 回调参数      |
|----------|-----------  |---------- |
| open     | Drawer 打开的回调 | —    | 
| opened   | Drawer 打开动画结束时的回调 | — |
| close    | Drawer 关闭的回调 | — |
| closed   | Drawer 关闭动画结束时的回调 | — |
