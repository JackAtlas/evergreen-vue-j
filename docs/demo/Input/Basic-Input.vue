<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../../src/components/Input/Input.vue'
const test = ref('')
</script>

<template>
  <Input type="text" v-model="test" placeholder="基础文本框，请输入" />
</template>
