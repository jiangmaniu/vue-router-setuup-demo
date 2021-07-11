<template>
  <div>
    <h1>{{ msg }}</h1>
    <a href="http://github.com" v-bind="$attrs">{{ msg }}</a>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, defineComponent } from 'vue'
withDefaults(defineProps<{
  msg: string
}>(), {
  msg: 'default msg'
})
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false
})
</script>

