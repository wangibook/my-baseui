<template>
  <div class="col-default" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import {computed, inject, ref} from 'vue'
export default {
  name: 'm-col',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const widthRef = ref(props.span<=24?props.span%1==0?(100/24)*props.span+'%':'':'')
    const offsetRef = ref(props.offset<=24?props.offset%1==0?(100/24)*props.offset+'%':'':'')
    const gutter = inject('gutter')

    const styles = computed(() => {
      return {
        paddingLeft: gutter.value ? gutter.value / 2 + 'px' : '',
        paddingRight: gutter.value ? gutter.value / 2 + 'px' : ''
      }
    })

    return {
      widthRef,
      offsetRef,
      styles
    }
  }
}
</script>

<style lang="scss" scoped>
.col-default{
  max-width:v-bind(widthRef);
  flex: 0 0 v-bind(widthRef);
  float: left;
  margin-left:v-bind(offsetRef);
  box-sizing: border-box;
}
</style>
