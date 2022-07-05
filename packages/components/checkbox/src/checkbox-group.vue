<template>
  <div class="m-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mCheckboxGroup"
};
</script>

<script setup>
import { computed,provide,nextTick } from 'vue';
const emit = defineEmits(['update:modelValue','change'])
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const modelValue = computed(() => props.modelValue)
const disabled = computed(() => props.disabled)

const changeEvent = (value) => {
  emit('update:modelValue', value)
  nextTick(() => emit('change', value))
}

provide('checkboxGroup',{
  modelValue,
  disabled,
  changeEvent
})

</script>

<style lang="scss" scoped>

</style>
