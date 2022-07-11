<template>
  <a class="m-link" :class="styleClass" :href="href" @click="handleClick">
    <i class="iconfont" :class="leftIcon" v-if="leftIcon"></i>
    <span :style="spanStyle">
      <slot />
    </span>
    <i class="iconfont" :class="rightIcon" v-if="rightIcon"></i>
  </a>
</template>

<script>
export default {
  name: "mLink"
};
</script>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  href: String,
  type: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default','primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1;
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  underline: {
    type: Boolean,
    default: true
  },
  leftIcon: String,
  rightIcon: String
})

const styleClass = computed(() => {
  return {
    [`m-link--${props.type}`]: props.type,
    'is-disabled': props.disabled,
    'is-underline': props.underline && !props.disabled
  }
})

const spanStyle = computed(() => {
  return {
    'margin-left': props.leftIcon ? '3px': '' ,
    'margin-right': props.rightIcon ? '3px': ''
  }
})

const handleClick = (e) => {
  console.log(e);
}

</script>

<style lang="scss" scoped>
@import '../../styles/components/link.scss';
</style>
