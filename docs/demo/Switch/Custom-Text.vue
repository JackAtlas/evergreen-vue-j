<script setup lang="ts">
import { ref } from 'vue'
import Switch from '../../../src/components/Switch/Switch.vue'
const test = ref(true)
</script>

<template>
  <Switch v-model="test" activeText="Yahoo!" inactiveText="Oops!" />
  <h4>model-value: {{ test }}</h4>
</template>
