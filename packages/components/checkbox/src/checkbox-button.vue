<template>
  <label 
    class="m-checkbox-button"
    :class="[
    { 'is-checked': isChecked },
    { 'is-disabled': isDisabled }
    ]"
  >
    <input 
      type="checkbox" 
      class="m-checkbox-button__original"
      :name="name"
      v-model="model"
      :value="label"
      :disabled="isDisabled"
    >
    <span class="m-checkbox-button__inner">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "mCheckboxButton"
};
</script>

<script setup>
import { computed,inject } from 'vue';
const props = defineProps({
  name: String,
  label: String | Number,
  disabled: {
    type: Boolean,
    default: false
  }
})

const checkboxGroup = inject('checkboxGroup',{});

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
  return props.disabled
})

</script>

<style lang="scss" scoped>
.m-checkbox-button{
  position: relative;
  display: inline-block;
  outline: none;
  .m-checkbox-button__original{
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    z-index: -1;
  }
  .m-checkbox-button__inner{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    background: #fff;
    border: 1px solid #dcdfe6;
    font-weight: 500;
    border-left: 0;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 0;
  }
  &:first-child{
    .m-checkbox-button__inner{
      border-left: 1px solid #dcdfe6;
      border-radius: 4px 0 0 4px;
    }
  }
  &:last-child{
    .m-checkbox-button__inner{
      border-radius: 0 4px 4px 0;
    }
  }
}
.is-checked{
  .m-checkbox-button__inner{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
.is-disabled{
  cursor: no-drop;
  color: #c0c4cc;
  .m-checkbox-button__inner{
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
</style>
