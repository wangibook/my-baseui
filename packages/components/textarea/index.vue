<template>
  <div class="m-textarea-default">
    <textarea
      :class="styleClass"
      :cols="cols" 
      :rows="rows" 
      :placeholder="placeholder" 
      :value="modelValue" 
      :disabled="disabled"
      :maxlength="maxlength"
      :showWordLimit="showWordLimit"
      :readonly="readonly"
      @input="input" 
      @focus="focus" 
      @blur="blur">
    </textarea>
    <div class="max-length-box" v-if="maxLengthBoxFlag">{{`${n}/${maxlength}`}}</div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  name: "mTextarea"
};
</script>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['update:modelValue','input','focus','blur'])

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请输入'
  },
  rows:{
    type:Number,
    default:4
  },
  cols:{
    type:Number,
    default:50
  },
  disabled: {
    type: Boolean,
    default: false
  },
  maxlength: Number,
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false
  }
})

const n = ref(props.modelValue.length || 0)

const styleClass = computed(() => {
  return {
    'm-textarea-disabled': props.disabled,
  }
})

const maxLengthBoxFlag = computed(() => {
  return props.maxlength != undefined && props.maxlength > 0 && props.showWordLimit
})

const input = (e)=>{
  n.value = e.target.value.length
  if(n.value >= props.maxlength){
    n.value = props.maxlength
  }
  emit('update:modelValue',e.target.value)
  emit('input',e.target.value)
}

const focus = (e)=>{
  emit('focus',e)
}
const blur = (e)=>{
  emit('blur',e)
}

</script>

<style lang="scss" scoped>
@import '../../styles/components/textarea.scss';
</style>
