<template>
  <div class="m-menu-group">
    <div class="m-menu-group-title" v-if="title">{{title}}</div>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mMenuGroup"
};
</script>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
@import '../../../styles/components/menu.scss';
</style>
