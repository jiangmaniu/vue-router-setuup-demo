<template>
    <div>1234123</div>
    <div>{{ text }}</div>
    <HelloWorld :msg="text" class="c"></HelloWorld>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import HelloWorld from './HelloWorld.vue'
const text = ref('router setup test')
</script>

<style>
.c {
  color: red !important;
}
</style>