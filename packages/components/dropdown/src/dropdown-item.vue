<template>
  <li 
    class="m-dropdown-menu__item" 
    :class="[
      {'is-disabled':disabled},
      {'is-divided': divided}
    ]"
    @click.stop="handleChange">
    <i class="iconfont" :class="icon"></i>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "mDropdownItem"
};
</script>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  divided: {
    type: Boolean,
    default: false
  },
  icon: String
})
const changeEvent = inject('changeEvent','');

const handleChange = (e) => {
  console.log(props.disabled);
  if(props.disabled) return;
  changeEvent(e)
}
</script>

<style lang="scss" scoped>
.m-dropdown-menu__item{
  list-style: none;
  line-height: 36px;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  outline: none;
  i{
    margin-right:3px;
  }
  &:hover{
    color: #409eff;
    background-color: #ECF5FF;
  }
}
.is-disabled{
  cursor: no-drop;
  color: #c0c4cc;
  &:hover{
    color: #c0c4cc;
    background:none;
  }
}
.is-divided{
  border-top: 1px solid #eee;
}
</style>
