<template>
  <div class="m-space">
  </div>
</template>

<script>
import { computed, ref,useSlots,h } from 'vue'
export default {
  name: "mSpace",
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  setup(props) {
    const $slot = useSlots();
    const slotList = ref([]);

    $slot.default().forEach(item => {
      slotList.value.push(
        h(
          'div',
          {
            className: 'm-space-item'
          },
          item
        )
      )
    })

    return () => [
      h(
        "div",
        {
          className: `m-space-box m-space-${props.direction}`
        },
        slotList.value
      )
    ]
  }
}
</script>

<style lang="scss" scoped>
.m-space-box{
  display: inline-flex;
  gap: 10px;
  flex-direction: inherit;
  flex-wrap: wrap;
  width: 100%;
}
.m-space-vertical{
  flex-direction: column;
  width: fit-content;
}
.m-space-item{
  width:fit-content;
}
</style>
