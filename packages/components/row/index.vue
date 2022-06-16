<template>
  <div class="row-default">
    <slot></slot>
  </div>
</template>

<script>
import { computed, ref,useSlots,h,provide } from 'vue'
export default {
  name: 'm-row',
  props: {
    gutter: Number
  },
  setup(props) {
    const $slot = useSlots();
    const gutter = computed(() => props.gutter)
    provide('gutter',gutter)
    return () => [
      h(
        'div',
        {
          className: 'row-default'
        },
        $slot.default()
      )
    ]
  }
}
</script>

<style lang="scss" scoped>
.row-default{
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 20px;
}
</style>
