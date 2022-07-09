<template>
  <div class="m-alert" :class="typeClass" v-show="visible">
    <i class="iconfont m-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
    <div class="m-alert__content">
      <span class="m-alert__title" :class="isBoldTitle">
        <slot name="title">{{ title }}</slot>
      </span>
      <p class="m-alert__description" v-if="$slots.default && !description"><slot></slot></p>
      <p class="m-alert__description" v-if="description && !$slots.default">{{ description }}</p>
      <i class="iconfont m-alert__closebtn" :class="closeIconClass" @click="close" v-show="closable">
        {{closeText}}
      </i>
    </div>
  </div>
</template>


<script>
export default {
  name: "mAlert"
};
</script>

<script setup>
import { computed, ref } from 'vue';

const TYPE_CLASSES_MAP = {
  'success': 'icon-success-filling',
  'warning': 'icon-warning-filling',
  'error': 'icon-delete-filling'
};

const emit = defineEmits(['close'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info'
  },
  effect: {
    type: String,
    default: 'light',
    validator: function(value) {
      return ['light', 'dark'].indexOf(value) !== -1;
    }
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ''
  },
  showIcon: Boolean,
  center: Boolean,
  description: {
    type: String,
    default: ''
  },
})

const visible = ref(true)

const typeClass = computed(() => {
  return {
    [`m-alert--${props.type}`]: props.type,
    [`is-${props.effect}`]:props.effect,
    'is-center': props.center
  }
})

const closeIconClass = computed(() => {
  return {
    'icon-close': props.closeText === '',
    'is-customed': props.closeText !== ''
  }
})

const iconClass = computed(() => {
  return TYPE_CLASSES_MAP[props.type] || 'icon-prompt-filling';
})

const isBigIcon = computed(() => {

})

const isBoldTitle = computed(() => {
  return props.description ? 'is-bold' : '';
})

const close = () => {
  visible.value = false
  emit('close')
}
</script>

<style lang="scss" scoped>
@import '../../styles/components/alert.scss';
</style>
