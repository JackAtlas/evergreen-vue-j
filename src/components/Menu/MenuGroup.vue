<template>
  <div class="ev-menu__group">
    <h2 class="ev-menu__group-title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { MenuGroupProps } from './types'
defineOptions({
  name: 'ev-menu-group',
})
defineProps<MenuGroupProps>()
</script>
