
<script>
import { computed, ref,useSlots,h } from 'vue'
export default {
  name: "mSpace",
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    size: [Number,String]
  },
  setup(props) {
    const $slot = useSlots();
    const slotList = ref([]);

    const styles = computed(() => {
      return {
        margin: `0 ${props.size}px ${props.size}px 0`
      }
    })

    $slot.default().forEach(item => {
      slotList.value.push(
        h(
          'div',
          {
            className: 'm-space-item',
            style: styles.value
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
  width: 100%;
  display: inline-flex;
  gap: 10px;
  flex-direction: inherit;
  flex-wrap: wrap;
  margin-bottom: 15px;
}
.m-space-vertical{
  flex-direction: column;
  width: fit-content;
}
.m-space-item{
  width:fit-content;
}
</style>
