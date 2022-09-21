<template>
  <div class="m-menu" :class="menuClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mMenu"
};
</script>

<script setup>
import { ref,reactive, provide, computed, watch } from 'vue';

const emits = defineEmits(['on-select','on-open-change'])
const props = defineProps({
  // 菜单类型, 默认垂直
  mode: {
    type: String,
    default: 'vertical'
  },
  theme: {
    type: String,
    default: 'light'
  },
  // 当前激活的菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 默认展开的submenu
  defaultOpeneds: {
    type: Array,
    default: () => ([]),
  },
  // 是否手风琴模式，（只展开一个）
  accordion: {
    type: Boolean,
    default: false,
  },
})

const activeName = ref(props.defaultActive)
const openedNames = ref([])

watch(activeName,(newVal) => {
  activeName.value = newVal
},{immediate:true})

watch(() => props.defaultOpeneds,(newVal) => {
  openedNames.value = newVal
},{immediate:true})

const menuClass = computed(() => {
  return {
    'm-menu--vertical': props.mode === 'vertical',
    'm-menu--horizontal': props.mode === 'horizontal',
    'm-menu--light': props.theme === 'light',
    'm-menu--dark': props.theme === 'dark'
  }
})

const onSelect = (val) => {
  if (activeName.value === val) return
  activeName.value = val
  emits('on-select',val)
}

const updateOpenKeys = (valName,status) => {
  if(status) {
    if(props.accordion) {
      openedNames.value = [...valName]
    } else {
      openedNames.value.push(valName);
    }
  } else {
    const index = openedNames.value.indexOf(valName);
    openedNames.value.splice(index,1)
  }
  emits('on-open-change',openedNames.value)
}

provide('rootMenu',{
  mode: props.mode,
  openedNames,
  activeName,
  onSelect,
  updateOpenKeys
})

</script>

<style lang="scss" scoped>
@import '../../../styles/components/menu.scss';
</style>
