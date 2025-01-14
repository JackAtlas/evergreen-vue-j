<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../../src/components/Input/Input.vue'
const test = ref('')
</script>

<template>
  <Input disabled type="text" v-model="test" placeholder="禁用文本框，无法输入" />
</template>
