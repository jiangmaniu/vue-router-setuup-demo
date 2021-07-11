<template>
    <div>test router</div>
    <div>{{ text }}</div>
    <HelloWorld :msg="text" class="text-color"></HelloWorld>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import HelloWorld from './HelloWorld.vue'
const text = ref('router setup test')
</script>

<style>
.text-color {
  color: red !important;
}
</style>