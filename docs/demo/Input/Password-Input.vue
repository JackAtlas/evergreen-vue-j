<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../../src/components/Input/Input.vue'
const test = ref('')
</script>

<template>
  <Input show-password type="password" v-model="test" placeholder="密码输入框" />
</template>
