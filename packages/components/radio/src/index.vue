<template>
  <label 
    class="m-radio" 
    :class="[
      {'is-disabled': isDisabled},
      {'is-checked': selVal == label}
    ]">
    <span 
      class="m-radio__input" 
      :class="{
        'is-checked': selVal == label,
        'is-disabled': isDisabled
      }">
      <span class="m-radio__inner"></span>
      <input 
        class="m-radio__original"
        type="radio" 
        v-model="selVal" 
        :value="label"
        :disabled="isDisabled" 
        @change="handleChange">
    </span>
    
    <span class="m-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "mRadio"
};
</script>

<script setup>
import { ref,nextTick, computed, inject } from 'vue'

const emit = defineEmits(['update:modelValue','change'])
const props = defineProps({
  modelValue: String | Number,
  label: String | Number,
  disabled: {
    type: Boolean,
    default: false
  }
})

const groupVal = inject('groupVal','')
const changeEvent = inject('changeEvent','');
const isGroup = computed(() => {
  return groupVal
})

const selVal = computed({
  get() {
    return isGroup.value ? groupVal.value : props.modelValue
  },
  set(val) {
    if(isGroup.value) {
      changeEvent(val)
    } else {
      emit('update:modelValue',val)
    }
  }
})

const isDisabled = computed(() => {
  return props.disabled
})

const handleChange = (e) => {
  // if(props.disabled) return
  // console.log(selVal);
  // emit('update:modelValue',e.target.value)
  // nextTick(() => emit('change', e.target.value))
}

</script>

<style lang="scss" scoped>
@import '../../../styles/components/radio.scss';
</style>
