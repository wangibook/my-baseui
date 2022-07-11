<template>
  <div 
    class="m-input-number"
    :class="[
      { 'is-disabled': inputNumberDisabled },
      { 'is-controls-right': controlsAtRight },
      inputNumberSize ? 'm-input-number--' + inputNumberSize : '',
    ]">
    <span
      v-if="controls" 
      class="m-input-number__decrease"
      :class="{'is-disabled':minDisabled}" 
      role="button" 
      @click="handleClick('decrease')"
    >
      <i class="iconfont" :class="[controlsAtRight ? 'icon-arrow-down-bold' : 'icon-minus']"></i>
    </span>
    <input 
      type="text" 
      class="m-input__inner" 
      :name="name"
      :value="inputVal"
      :disabled="inputNumberDisabled"
      @change="handleInputChange"
      @blur="handleBlur"
      @focus="handleFocus">
    <span
      v-if="controls"
      class="m-input-number__increase"
      :class="{'is-disabled':maxDisabled}" 
      role="button" 
      @click="handleClick('increase')"
    >
      <i class="iconfont" :class="[controlsAtRight ? 'icon-arrow-up-bold' : 'icon-add']"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "mInputNumber"
};
</script>

<script setup>
import { ref,computed, getCurrentInstance } from 'vue';
const emit = defineEmits(['update:modelValue','change','focus','blur'])
const props = defineProps({
  modelValue: [Number,String],
  name: String,
  step: {
    type: Number,
    default: 1
  },
  max: {
    type: Number,
    default: Infinity
  },
  min: {
    type: Number,
    default: -Infinity
  },
  disabled: {
    type: Boolean,
    default: false
  },
  stepStrictly: {
    type: Boolean,
    default: false
  },
  precision: {
    type: Number,
    validator(val) {
      return val >= 0 && val === parseInt(val, 10);
    }
  },
  controls: {
    type: Boolean,
    default: true
  },
  controlsPosition: {
    type: String,
    default: ''
  },
  size: String
})
const instance = getCurrentInstance();

const inputVal = computed({
  get: () => props.modelValue,
  set: (newVal) => {
    let {min,max} = props
    let limit = [
      {
        validate: (value) => value <= min,
        res: min
      },
      {
        validate: (value) => value >= max,
        res: max
      },
      {
        validate: value => true,
        res: newVal * 1
      }
    ]
    let _val = limit.find(v => v.validate(newVal)).res
    // console.log('_val',_val);
    if(props.precision) {
      emit('update:modelValue',_val.toFixed(props.precision))
      emit('change',_val.toFixed(props.precision))
    } else {
      emit('update:modelValue',_val)
      emit('change',_val)
    }
  }
})

const controlsAtRight = computed(() => {
  return props.controls && props.controlsPosition === 'right'
})

const inputNumberSize = computed(() => {
  return props.size
})

const minDisabled = computed(() => {
  return props.disabled || props.modelValue <= props.min
})

const maxDisabled = computed(() => {
  return props.disabled || props.modelValue >= props.max
})

const inputNumberDisabled = computed(() => {
  return props.disabled
})

const handleInputChange = (e) => {
  let value = e.target.value;
  const newVal = Number(value);
  if (!isNaN(newVal) || value === '') {
    setCurrentValue(newVal)
  } else {
    // 如果输入的非数字，则保留之前的数据
    e.target.value = inputVal.value
  }
}

const setCurrentValue = (val) => {
  const newVal = verifyValue(val)
  emit('update:modelValue',newVal)
  emit('change',newVal)
  // 针对只有第一次改值生效的问题
  instance.proxy.$forceUpdate();
}

const verifyValue = (value) => {
  const { min, max, step, precision, stepStrictly } = props
  let newVal = Number(value)
  if(newVal <= min) newVal = min
  if(newVal >= max) newVal = max
  if (stepStrictly) {
    newVal = Math.round(newVal / step) * step
  }
  return newVal
}

const handleClick = (type) => {
  if(props.disabled) return
  if(type === 'decrease') {
    inputVal.value = Number(inputVal.value) - props.step
  } else {
    inputVal.value = Number(inputVal.value) + props.step
  }
}

const handleBlur = (e) => {
  emit('blur',e)
}

const handleFocus = (e) => {
  emit('focus',e)
}

</script>

<style lang="scss" scoped>
@import '../../styles/components/input-number.scss';
</style>
