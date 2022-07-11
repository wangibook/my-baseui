<template>
  <Teleport to="body" :disabled="!appendToBody">
    <transition 
      name="fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div class="m-dialog" v-show="modelValue" @click.self="handleWrapperClick">
        <div
          ref="dialogRef"
          role="dialog" 
          class="m-dialog__contentbox" 
          :class="[
            {'m-dialog--center': center },
            {'is-draggable': draggable },
            customClass
          ]"
          :style="contentboxStyle"
        >
          <div class="m-dialog__header" ref="headerRef">
            <slot name="header">
              <span class="m-dialog__title">{{ title }}</span>
            </slot>
            <i class="iconfont icon-close" @click="handleClose" v-if="showClose"></i>
          </div>
          <div class="m-dialog__body">
            <slot></slot>
          </div>
          <div class="m-dialog__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport> 
</template>


<script>
export default {
  name: "mDialog"
};
</script>

<script setup>
import { computed, ref, watch } from 'vue';
import { useDraggable } from '~/hooks/use-draggable';
const emit = defineEmits(['update:modelValue','close','open','opened','closed'])
const props = defineProps({
  modelValue:Boolean,
  title: {
    type: String,
    default: ''
  },
  width: String,
  top: {
    type: String,
    default: '15vh'
  },
  center: {
    type: Boolean,
    default: false
  },
  draggable: {
    type: Boolean,
    default: false
  },
  appendToBody: {
    type: Boolean,
    default: false
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  customClass: {
    type: String,
    default: ''
  },
  showClose: {
    type: Boolean,
    default: true
  }
})

const dialogRef = ref(null)
const headerRef = ref(null)
const draggable = computed(() => props.draggable)
useDraggable(dialogRef, headerRef, draggable)

const contentboxStyle = computed(() => {
  return {
    marginTop: props.top,
    width: props.width
  }
})

watch(() =>props.modelValue,(val) => {
  if(val) {
    emit('open')
  }
})

const handleClose = () =>{
  emit('close')
  emit('update:modelValue',false)
}

const handleWrapperClick = () => {
  if (!props.closeOnClickModal) return;
  handleClose()
}

const afterEnter = () => {
  emit('opened')
}

const afterLeave = () => {
  emit('closed')
}

</script>

<style lang="scss" scoped>
@import '../../styles/components/dialog.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
