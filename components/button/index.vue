<template>
  <button 
    class="m-button" 
    :class="styleClass"
    :disabled="disabled"
    :round="round">
    <i class="iconfont icon-loading" v-if="loading"></i>
    <i :class="isIconClass" v-if="leftIcon && !loading"></i>
    <span ref="slotRef" :style="slotStyle" :class=" isHaveSlot ? 'noText': '' ">
      <slot></slot>
    </span>
    <i :class="isIconClass" v-if="rightIcon"></i>
  </button>
</template>

<script>
export default {
  name: "mButton"
};
</script>

<script setup>
import { computed, ref, onMounted } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default','primary', 'success', 'info', 'warning', 'danger','text'].indexOf(value) > -1;
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  leftIcon: {
    type: String,
    default: ""
  },
  rightIcon: {
    type: String,
    default: ""
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: "default"
  }
})

const slotRef = ref(null)
const isHaveSlot = ref(null)
const styleClass = computed(() => {
  return {
    [`m-button--${props.type}`]: props.type,
    'is-disabled': props.disabled,
    'is-round': props.round,
    'is-circle': props.circle,
    [`m-button--${props.size}`]: props.size
  }
})

const isIconClass = computed(() => {
  return [
    'iconfont',
    props.leftIcon || props.rightIcon
  ]
})

const slotStyle = computed(() => {
  return {
    'margin-left': props.leftIcon ? '4px' : '0',
    'margin-right': props.rightIcon ? '4px' : '0'
  }
})

onMounted(() => {
  if(!slotRef.value.innerText) {
    isHaveSlot.value = true
  }
})

</script>

<style lang="scss" scoped>
@import '../../styles/components/button.scss';
</style>
