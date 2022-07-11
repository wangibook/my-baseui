<template>
  <Teleport to="body" :disabled="!appendToBody">
    <transition name="fade-pupop">
      <div class="m-drawer-pupop" v-if="modelValue" @click="handleWrapperClick"></div>
    </transition>
    <transition 
      :name="animateName"
      @after-enter="afterEnter"
      @after-leave="afterLeave">
      <div 
        class="m-drawer__container" 
        v-show="modelValue" 
        :style="drawerStyle"
      >
        <div class="m-drawer" :class="customClass">
          <div class="m-drawer__header" v-if="withHeader">
            <slot name="header">
              <span class="m-drawer__title">{{ title }}</span>
            </slot>
            <i class="iconfont icon-close" @click="handleClose" v-if="showClose"></i>
          </div>
          <div class="m-drawer__body">
            <slot></slot>
          </div>
          <div class="m-drawer__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
export default {
  name: "mDrawer"
};
</script>

<script setup>
import { computed,watch } from 'vue';
const emit = defineEmits(['update:modelValue','close','open','opened','closed'])
const props = defineProps({
  modelValue:Boolean,
  title:{
    type:String,
    default:"标题"
  },
  width:{
    type:String,
    default:"30%"
  },
  height:{
    type:String,
    default:"40%"
  },
  direction:{
    type:String,
    default:'right'
  },
  wrapperClosable: {
    type: Boolean,
    default: true
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  customClass: {
    type: String,
    default: ''
  },
  appendToBody: {
    type: Boolean,
    default: false
  },
})

const drawerStyle = computed(() => {
  return [
    props.direction=="left"?{"top":0,"left":0,"width":props.width,"height":"100%"}:
    props.direction=="top"?{"top":0,"left":0,"width":"100%","height":props.height}:
    props.direction=="right"?{"top":0,"right":0,"width":props.width,"height":"100%"}:
    props.direction=="bottom"?{"bottom":0,"left":0,"width":"100%","height":props.height}:{}
  ]
})

const animateName = computed(()=>{
  return props.direction=="left"?"slide-left":
         props.direction=="top"?"slide-top":
         props.direction=="right"?"slide-right":
         props.direction=="bottom"?"slide-bottom":""
})

watch(() =>props.modelValue,(val) => {
  if(val) {
    emit('open')
  }
})

const handleClose = () => {
  emit('update:modelValue',false)
  emit('close')
}

const handleWrapperClick = (e) => {
  if(props.wrapperClosable){
    if(e.target.className=='m-drawer-pupop'){
      handleClose()
    }
  }
}

const afterEnter = () => {
  emit('opened')
}

const afterLeave = () => {
  emit('closed')
}

</script>

<style lang="scss" scoped>
@import '../../styles/components/drawer.scss';
.fade-pupop-enter-active, .fade-pupop-leave-active {
  opacity: 1;
  transition: opacity .2s ease;
}
.fade-pupop-enter-from, .fade-pupop-leave-to {
  opacity: 0;
  transition: opacity .5s ease;
}
.slide-left-enter-active, .slide-left-leave-active{
  transition: all .3s ease;
  transform: translateX(0);
}
.slide-left-enter-from, .slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-top-enter-active, .slide-top-leave-active{
  transition: all .3s ease;
  transform: translateY(0);
}
.slide-top-enter-from, .slide-top-leave-to {
  transform: translateY(-100%);
}
.slide-right-enter-active, .slide-right-leave-active{
  transition: all .3s ease;
  transform: translateX(0);
}
.slide-right-enter-from, .slide-right-leave-to {
  transform: translateX(100%);
}
.slide-bottom-enter-active, .slide-bottom-leave-active{
  transition: all .3s ease;
  transform: translateY(0);
}
.slide-bottom-enter-from, .slide-bottom-leave-to {
  transform: translateY(100%);
}

</style>
