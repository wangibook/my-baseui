<template>
  <div class="m-loading" v-show="isShow" :style="domStyle">
    <div class="m-loading-wrap">
      <i class="iconfont m-loading__icon" :class="icon" :style="{color: iconColor}"></i>
      <div class="m-loading__text" :style="{color: textColor}">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mLoading"
};
</script>

<script setup>
import { ref,reactive, toRefs, computed, nextTick, getCurrentInstance } from 'vue';
const ins = getCurrentInstance()

const isShow = ref(false);
const state = reactive({
  screen: false,
  text: '',
  icon: '',
  textColor: '',
  iconColor: '',
  background: '',
})

nextTick(() => {
  state.screen = ins.exposed.screen
  state.text = ins.exposed.text
  state.icon = ins.exposed.icon
  state.textColor = ins.exposed.textColor
  state.iconColor = ins.exposed.iconColor
  state.background = ins.exposed.background
})

const domStyle = computed(() => {
  return {
    position: state.screen ? 'fixed' : 'absolute',
    background: state.background,
  }
})

const { screen,text,icon,textColor,iconColor,background } = toRefs(state);

defineExpose({
  isShow
})

</script>

<style lang="scss" scoped>
.m-loading{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsla(0,0%,100%,.9);
  transition: opacity .3s;
  z-index: 2000;
  .m-loading-wrap{
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 100%;
    text-align: center;
    .m-loading__icon{
      display: inline-block;
      font-size: 30px;
      animation: rotating 2s linear infinite;
      -webkit-animation: rotating 2s linear infinite;
    }
    .m-loading__text{
      padding-top: 10px;
    }
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
