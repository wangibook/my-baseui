<template>
  <div 
    class="m-submenu"
    :class="submenuClass" 
    @mouseover="mouseover"
    @mouseleave="mouseleave"
    @click="handleSubClick"
  >
    <div class="m-submenu-title">
      <slot name="title"></slot>
      <i class="iconfont" :class="[opened ? 'icon-arrow-up-bold' : 'icon-arrow-down-bold']" v-if="subLen<2"></i>
      <i class="iconfont" :class="[opened ? 'icon-arrow-down-bold' : 'icon-arrow-right-bold']" v-else></i>
    </div>
    <transition name="slide-fade">
      <ul class="m-select-dropdown" :style="subStyle" v-show="opened">
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "mSubmenu"
};
</script>

<script setup>
import { ref,computed,inject, watch } from 'vue';

const props = defineProps({
  activeName: String,
  name: {
    type: String,
    required: true
  }
})

const rootMenu = inject('rootMenu');
const opened = ref(rootMenu.openedNames.value.includes(props.name));

const submenuClass = computed(() => {
  let spVal = rootMenu.activeName.value.split('-')
  return {
    'is-active': props.name === spVal[0]
  }
})

const subStyle = computed(() => {
  const len = props.name.split('-').length
  return {
    'left': (len-1) * 200 + 'px',
    'top': len > 1 ? '0px': '61px'
  }
})

const subLen = computed(() => {
  const len = props.name.split('-').length
  return len
})

const mouseover = () => {
  if(rootMenu.mode === 'horizontal') {
    opened.value = true
  }
}

const mouseleave = () => {
  if(rootMenu.mode === 'horizontal') {
    opened.value = false
  }
}

// 展开、收起submenu
const handleSubClick = () => {
  opened.value = !opened.value
  rootMenu.updateOpenKeys(props.name,opened.value);
}
</script>

<style lang="scss" scoped>
@import '../../../styles/components/menu.scss';
// 动画
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

</style>
