<template>
  <li class="m-breadcrumb-item">
    <a class="m-breadcrumb-item__link" :href="to" @click="handleClick" v-if="to">
      <slot></slot>
    </a>
    <span class="m-breadcrumb-item__span" v-else>
      <slot/>
    </span>
    <span>
      <i class="m-breadcrumb-item__separator iconfont" :class="separatorClass" v-if="separatorClass"></i>
      <span class="m-breadcrumb-item__separator" v-else> {{ separator }} </span>
    </span>
  </li>
</template>

<script>
export default {
  name: "mBreadcrumbItem"
};
</script>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  to: {
    type: [String, Object],
  }
})

const router = useRouter()
const breadcrumbKey = inject('breadcrumbKey')
const { separator,separatorClass } = breadcrumbKey

const handleClick = (e) => {
  event.preventDefault();
  router.push(props.to)
}
</script>

<style lang="scss" scoped>
@import '../../../styles/components/breadcrumb.scss';
</style>
