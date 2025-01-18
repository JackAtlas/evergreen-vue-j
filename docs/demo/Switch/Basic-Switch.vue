<script setup lang="ts">
import { ref } from 'vue'
import Switch from '../../../src/components/Switch/Switch.vue'
const test = ref(true)
</script>

<template>
  <Switch v-model="test"></Switch>
</template>
