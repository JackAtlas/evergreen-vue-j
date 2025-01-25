<template>
  <div
    class="ev-menu__item"
    :class="{ [`ev-menu__item--${intent}`]: intent }"
    :aria-disabled="disabled"
    :data-isselectable="!disabled"
  >
    <div class="ev-menu__item-icon">
      <Icon :icon="icon" v-if="icon" />
    </div>
    <div class="ev-menu__item-text">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '../Icon/Icon.vue'
import type { MenuItemProps } from './types'
defineOptions({
  name: 'ev-menu-item',
})
defineProps<MenuItemProps>()
</script>
