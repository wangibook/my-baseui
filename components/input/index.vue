<template>
  <div class="m-input-default">
    <div class="m-slot-prepend" v-if="slot && slot.prepend">
      <slot name="prepend"></slot>
    </div>
    <div class="demo-input" :class="groupClass">
      <i :class="['iconfont','left-icon',leftIcon]" v-if="leftIcon && !showPassword"></i>
      <input
        ref="inputRef"
        :class="styleClass"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : 'text' "
        :placeholder="placeholder" 
        :value="modelValue"
        :disabled="disabled"
        :autofocus="autofocus" 
        :readonly="readonly"
        @input="iptChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange">
      <i class="iconfont icon-close" v-if="clearable && modelValue" @click="clear"></i>
      <i :class="['iconfont','right-icon',rightIcon]" v-if="rightIcon && !showPassword"></i>
      <i 
        :class="['iconfont','password-icon','icon-browse']" 
        v-if="showPassword" 
        @click="showPwd(type)">
      </i>
    </div>
    <div class="m-slot-append" v-if="slot && slot.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
import { ref,computed,useSlots } from 'vue';
export default {
  name: 'm-input',
  props: {
    modelValue: String | Number,
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: 'default'
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits:['update:modelValue','input','focus','blur','change','clear'],
  setup(props,{ emit }) {
    const passwordVisible = ref(false)
    const inputRef = ref(null)
    const slot = useSlots()
    
    const styleClass = computed(() => {
      return {
        'm-input-disabled': props.disabled,
        'm-input-leftIcon': props.leftIcon,
        'm-input-rightIcon': props.rightIcon,
        [`m-input--${props.size}`]: props.size
      }
    })

    const groupClass = computed(() => {
      return {
        'm-input-group__prepend': slot.prepend,
        'm-input-group__append': slot.append,
      }
    })

    const iptChange = (e) => {
      emit('update:modelValue',e.target.value)
      emit('input',e.target.value)
    }
    const clear = () => {
      emit('update:modelValue', '')
      emit('clear')
    }
    // 显示隐藏密码
    const showPwd = () => {
      passwordVisible.value = !passwordVisible.value
    }

    const handleFocus = (e) => {
      emit('focus',e)
    }
    const handleBlur = (e) => {
      emit('blur', e)
    }
    const handleChange = (e) => {
      emit('change',e)
    }

    return {
      slot,
      styleClass,
      groupClass,
      iptChange,
      clear,
      passwordVisible,
      showPwd,
      handleFocus,
      handleBlur,
      handleChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/components/input.scss';
</style>
