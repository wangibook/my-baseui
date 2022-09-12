<template>
  <m-row>
    <m-col>
      <m-rate v-model="value1" show-text></m-rate>
    </m-col>
    <m-col style="margin-top:20px">
      <m-rate v-model="value2" show-text>
        <span>{{ texts[value2 - 1] }}</span>
      </m-rate>
    </m-col>
  </m-row>
</template>

<script setup>
import { computed, ref } from 'vue';
const value1 = ref(2);
const value2 = ref(2);

const texts = ['极差', '失望', '一般', '满意', '惊喜']

</script>