<template>
  <div class="col-default">
    <slot></slot>
  </div>
</template>

<script>
import {ref} from 'vue'
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

    return {
      widthRef,
      offsetRef
    }
  }
}
</script>

<style lang="scss" scoped>
.col-default{
  width:v-bind(widthRef);
  float: left;
  margin-left:v-bind(offsetRef)
}
</style>
