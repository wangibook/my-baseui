<template>
  <label 
    class="m-checkbox"
    :class="[
      { 'is-checked': isChecked },
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
    ]">
    <span 
      class="m-checkbox__input"
      :class="{
        'is-checked': isChecked,
        'is-disabled': isDisabled,
        'is-indeterminate': indeterminate,
      }">
      <span class="m-checkbox__inner"></span>
      <input 
        class="m-checkbox__original" 
        type="checkbox"
        v-model="model"
        :disabled="isDisabled"
        :value="label"
        @change="handleChange">
    </span>
    <span class="m-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "mCheckbox"
};
</script>

<script setup>
import { computed,useSlots,inject,nextTick } from 'vue';
const emit = defineEmits(['update:modelValue','change'])
const props = defineProps({
  modelValue: Boolean,
  label: String | Number,
  disabled: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  }
})

const slots = useSlots()
const checkboxGroup = inject('checkboxGroup',{});

// 是不是group分组
const isGroup = computed(() => {
  return checkboxGroup.modelValue ? true : false
})

const model = computed({
  get() {
    return isGroup.value ? checkboxGroup.modelValue.value : props.modelValue
  },
  set(val) {
    if(isGroup.value) {
      checkboxGroup.changeEvent(val)
    } else {
      emit('update:modelValue',val)
    }
  }
})

const isChecked = computed(() => {
  if(isGroup.value) {
    return model.value.includes(props.label);
  } else {
    return model.value
  }
})

const isDisabled = computed(() => {
  return isGroup.value ? checkboxGroup.disabled.value || props.disabled :  props.disabled
})

const handleChange = () => {
  nextTick(() => emit('change', model.value))
}

</script>

<style lang="scss" scoped>
@import '../../../styles/components/checkbox.scss';
</style>
