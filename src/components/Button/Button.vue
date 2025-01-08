<template>
  <button
    ref="_ref"
    class="ev-button"
    :class="{
      [`ev-button--${appearance}`]: appearance,
      [`ev-button--${intent}`]: intent,
      [`ev-button--${size}`]: size,
      'is-loading': isLoading,
    }"
    :disabled="disabled || isLoading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="isLoading" />
    <Icon :icon="iconBefore" v-if="iconBefore" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types.ts'
import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'ev-button',
})
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref,
})
</script>
