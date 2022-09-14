<template>
  <div :class="classes" @mouseleave="handleMouseleave">
    <div
      v-for="item in count" 
      :key="item" 
      :class="starCls(item)" 
      @mousemove="handleMousemove(item, $event)"
      @click="handleClick(item)">
      <span class="iconfont favorite" v-if="!character && !icon">
        <span class="iconfont favorite-half" type="half"></span>
      </span>
      <template v-if="character">
        <span class="m-rate-star-first" type="half">{{ character }}</span>
        <span class="m-rate-star-second">{{ character }}</span>
      </template>
      <i class="iconfont other-icon" :class="['icon-'+ icon]" v-if="icon">
        <i class="iconfont other-icon-half" :class="['icon-'+ icon]" type="half"></i>
      </i>
    </div>
    <div class="m-rate-text" v-if="showText && currentValue > 0">
      <slot>{{currentValue}} 星</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mRate"
};
</script>

<script setup>
import { computed, reactive, toRefs, watch } from 'vue';

const emits = defineEmits(['update:modelValue','on-change'])
const props = defineProps({
  count: {
    type: Number,
    default: 5
  },
  modelValue: {
    type: Number,
    default: 0
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  showText: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  character: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
})

const state = reactive({
  hoverIndex: -1,
  isHover: false,
  currentValue: props.modelValue,
  isHalf: props.allowHalf && props.modelValue.toString().indexOf('.') > -1,
})

watch(() => props.modelValue,(newVal) => {
  state.currentValue = newVal
},{immediate:true})

const classes = computed(() => {
  return [
    'm-rate',
    {
      'm-rate-disabled': props.disabled
    }
  ]
})

const starCls = (value) => {
  const currentIndex = state.isHover ? state.hoverIndex : state.currentValue;

  let full = false;
  let isLast = false;

  if (currentIndex >= value) full = true;

  if (state.isHover) {
    isLast = currentIndex === value;
  } else {
    isLast = Math.ceil(state.currentValue) === value;
  }
  return [
    'm-rate-star',
    {
      'm-rate-star-full': (!isLast && full) || (isLast && !state.isHalf),
      'm-rate-star-zero': !full,
      'm-rate-star-half': isLast && state.isHalf,
    }
  ]
}

const handleMousemove = (value, event) => {
  if (props.disabled) return;
  state.isHover = true;
  if (props.allowHalf) {
    const type = event.target.getAttribute('type') || false;
    state.isHalf = type === 'half';
  } else {
    state.isHalf = false;
  }
  // hoverIndex 为整
  state.hoverIndex = value;
}

const handleMouseleave = () => {
  if (props.disabled) return;
  state.isHover = false;
  setHalf(state.currentValue);
  state.hoverIndex = -1;
}

const setHalf = (val) => {
  state.isHalf = props.allowHalf && val.toString().indexOf('.') > -1;
}

const handleClick = (value) => {
  if (props.disabled) return;
  if (state.isHalf) value -= 0.5;

  if(props.clearable && Math.abs(value - state.currentValue) < 0.01) {
    value = 0
  }

  state.currentValue = value;
  emits('update:modelValue',value)
  emits('on-change',value)
}

const { currentValue } = toRefs(state);

</script>

<style lang="scss" scoped>
@import '../../styles/components/rate.scss';
</style>
