<template>
  <div class="m-menu-item" :class="menuItemClass" @click="handleClick" :name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mMenuItem"
};
</script>

<script setup>
import { computed,inject } from 'vue';

const props = defineProps({
  activeName: String,
  name: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const rootMenu = inject('rootMenu');

const menuItemClass = computed(() => {
  return {
    'is-active': props.name === rootMenu.activeName.value,
    'is-disabled': props.disabled
  }
})

const handleClick = (e) => {
  e.stopPropagation();
  if(props.disabled) return;
  rootMenu.onSelect(props.name);
}

</script>

<style lang="scss" scoped>
@import '../../../styles/components/menu.scss';
</style>
