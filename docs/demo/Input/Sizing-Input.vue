<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../../src/components/Input/Input.vue'
const test1 = ref('')
const test2 = ref('')
const test3 = ref('')
</script>

<template>
  <Input size="large" type="text" v-model="test1" placeholder="大尺寸" />
  <Input type="text" v-model="test2" placeholder="普通尺寸" />
  <Input size="small" type="text" v-model="test3" placeholder="小尺寸" />
</template>
