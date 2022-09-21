<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import preview from '@/components/preview.vue'
</script>

# Menu 导航菜单

#### 为网站提供导航功能的菜单。

<br/>

## 顶部导航
#### 导航菜单默认为垂直模式，通过mode属性可以使导航菜单变更为水平模式。default-active，可以设置激活菜单的 name 值。
#### 菜单中通过submenu组件可以生成二级菜单。通过设置属性 theme 为 light、dark 可以选择主题。
<div class="source">
  <demo1/>
</div>
<preview compName="menu" demoName="demo1"/>


## 侧栏导航 
#### 垂直导航菜单，可以内嵌子菜单。
<div class="source">
  <demo2/>
</div>
<preview compName="menu" demoName="demo2"/>


## 分组
#### 通过m-menu-group组件可以实现菜单进行分组，分组名通过title属性直接设定。
<div class="source">
  <demo3/>
</div>
<preview compName="menu" demoName="demo3"/>


## 禁用
#### 设置 disabled 属性禁用此选项
<div class="source">
  <demo4/>
</div>
<preview compName="menu" demoName="demo4"/>


## 菜单展开
#### 设置 default-openeds 可以展开指定的子菜单。
<div class="source">
  <demo5/>
</div>
<preview compName="menu" demoName="demo5"/>


## Attribute
| 参数              | 说明                         | 类型       | 可选值                  | 默认值     |
|----------------   |-------------------------    |----------  |----------------------   |--------   |
| mode              | 菜单类型，水平或者垂直        | string     | horizontal / vertical   | vertical  |
| theme             | 主题，默认提供了两种主题      | string     | light / dark             | light    |
| name              | 唯一标识，必填               | string     | —                        | —        |
| title             | 分组标题                     | string     | —                         | —        |
| default-active    | 默认选中的菜单项name          | string     | —                         | —        |
| default-openeds   | 默认展开的submenu             | array      | —                         | —        |
| disabled          | 禁用当前菜单项                | boolean    |   —                       | false    |

<br/>

## Events
| 事件名称         | 说明                      | 	返回值                           |
|---------------  |-------------------------  |----------------------------       |
| on-select       | 选择菜单（MenuItem）时触发 | 	name                              |
| on-open-change  | 展开/收起 子菜单时触发     |  当前展开的 Submenu 的 name 值数组  |

<br/>