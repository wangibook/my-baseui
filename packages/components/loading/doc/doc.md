<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import preview from '@/components/preview.vue'
</script>

# Loading 加载

#### 加载数据时显示动效。

<br/>

## 基本使用
#### loading 基本使用。
<div class="source">
  <demo1/>
</div>
<preview compName="loading" demoName="demo1"/>


## 自定义
#### 可自定义加载文案、图标和背景色。
<div class="source">
  <demo2/>
</div>
<preview compName="loading" demoName="demo2"/>


## 全屏加载
#### 作为指令打开全屏loading时，需要screen修饰符。
<div class="source">
  <demo3/>
</div>
<preview compName="loading" demoName="demo3"/>


## 更多配置
#### 可以通过获取组件实例的方式来调用。打开全屏loading时，需要设置screen属性
<div class="source">
  <demo4/>
</div>
<preview compName="loading" demoName="demo4"/>

<br/>

## Options
| 参数       | 说明                                | 类型              | 可选值 | 默认值           |
| ---------  | ---------------------------------- | ------------------| -----  | -------------   |
| screen     | 是否作为全屏loading                 | boolean           | —     | `false`          |
| text       | Loading的文字提示                   | string            | —     | `正在加载中...`   |
| icon       | Loading的加载图标                   | string            | —     | —                | 
| text-color | Loading的文字颜色                   | string            | —     | `#515a6e`        |
| icon-color | Loading的图标颜色                   | string            | —     | `#2d8cf0`        |
| background | Loading的背景色                     | string            | —     | `#fff`           |

<br/>