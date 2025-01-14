<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../../src/components/Input/Input.vue'
const test = ref('123321')
</script>

<template>
  <Input clearable type="text" v-model="test" placeholder="密码输入框" />
</template>
