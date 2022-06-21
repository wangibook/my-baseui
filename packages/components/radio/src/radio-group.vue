<template>
  <div class="m-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mRadioGroup"
};
</script>

<script setup>
import { provide,nextTick, computed } from 'vue';
const emit = defineEmits(['update:modelValue','change'])
const props = defineProps({
  modelValue: String | Number
})

const val = computed(() =>props.modelValue)

const changeEvent = (value) => {
  emit('update:modelValue', value)
  nextTick(() => emit('change', value))
}

provide('groupVal',val)
provide('changeEvent',changeEvent)

</script>

<style lang="scss" scoped>

</style>
