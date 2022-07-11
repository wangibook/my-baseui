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
  modelValue: String | Number,
  disabled: {
    type: Boolean,
    default: false
  }
})

const val = computed(() =>props.modelValue)
const disabled = computed(() =>props.disabled)

const changeEvent = (value) => {
  emit('update:modelValue', value)
  nextTick(() => emit('change', value))
}

provide('radioGroup',{
  val,
  disabled
})
provide('changeEvent',changeEvent)

</script>

<style lang="scss" scoped>
.m-radio-group{
  display: inline-flex;
  line-height: 1;
  vertical-align: middle;
  font-size: 0;
}
</style>
