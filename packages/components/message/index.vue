<template>
  <transition name="slide-fade">
    <div 
      :class="[
        'm-message',
        customClass, 
        {'is-center': center}
      ]" 
      :style="messagesStyle[type]" 
      v-show="isShow"
    >
      <template v-if="isText">
        <i class="iconfont" :class="[messagesStyle[type].icon]"></i>
        <span class="text">{{ text }}</span>
        <i class="iconfont icon-close" @click="close" v-if="showClose"></i>
      </template>
      <template v-else>
        <slot />
      </template>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref, reactive, computed } from 'vue'
const props = defineProps({
  text: {
    type: [String, Object],
    default: ''
  },
  type: {
    type: String,
    default: 'info'
  },
  timeout: {
    type: Number,
    default: 3000
  },
  icon: String,
  textColor: String,
  bgColor: String,
  customClass: String,
  center: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: false
  }
})

const state = reactive({
  messagesStyle: {
    success: {
      icon: props.icon || 'icon-success',
      color: '#67c23a',
      backgroundColor: '#f0f9eb',
      borderColor: '#f0f9eb'
    },
    warning: {
      icon: props.icon || 'icon-warning',
      color: '#e6a23c',
      backgroundColor: '#fdf6ec',
      borderColor: '#fdf6ec'
    },
    info: {
      icon: props.icon || 'icon-prompt-filling',
      color: '#909399',
      backgroundColor: '#f4f4f5',
      borderColor: '#f4f4f5'
    },
    error: {
      icon: props.icon || 'icon-delete-filling',
      color: '#f56c6c',
      backgroundColor: '#fef0f0',
      borderColor: '#fef0f0'
    },
    custom: {
      icon: props.icon,
      color: props.textColor,
      backgroundColor: props.bgColor,
      borderColor: props.bgColor
    }
  }
})
const isShow = ref(false)
const isText = computed(() => {
  return typeof props.text === 'string'
})

onMounted(() => {
  isShow.value = true
})

const close = () => {
  isShow.value = false
}

const { messagesStyle } = state
</script>

<style lang="scss" scoped>
@import '../../styles/components/message.scss';
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translate3d(-50%, -75px, 0);
}

</style>
