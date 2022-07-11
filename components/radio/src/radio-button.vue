<template>
  <label 
    class="m-radio-button" 
    :class="[
      { 'is-active': selVal === label },
      { 'is-disabled': isDisabled },
    ]"
  >
    <input 
      type="radio" 
      class="m-radio-button__original"
      :name="name"
      v-model="selVal" 
      :value="label"
      :disabled="isDisabled"
    >
    <span class="m-radio-button__inner">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "mRadioButton"
};
</script>

<script setup>
import { computed,inject } from 'vue'
const props = defineProps({
  name: String,
  label: String | Number,
  disabled: {
    type: Boolean,
    default: false
  }
})

const radioGroup = inject('radioGroup','');
const changeEvent = inject('changeEvent','');
const isGroup = computed(() => {
  return radioGroup
})

const selVal = computed({
  get() {
    return isGroup.value ? radioGroup.val.value : props.label
  },
  set(val) {
    changeEvent(val)
  }
})

const isDisabled = computed(() => {
  return props.disabled
})
</script>

<style lang="scss" scoped>
.m-radio-button{
  position: relative;
  display: inline-block;
  outline: none;
  .m-radio-button__original{
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
  }
  .m-radio-button__inner{
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
    .m-radio-button__inner{
      border-left: 1px solid #dcdfe6;
      border-radius: 4px 0 0 4px;
    }
  }
  &:last-child{
    .m-radio-button__inner{
      border-radius: 0 4px 4px 0;
    }
  }
}
.is-active{
  .m-radio-button__inner{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}

.is-disabled{
  cursor: no-drop;
  color: #c0c4cc;
  .m-radio-button__inner{
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
</style>

