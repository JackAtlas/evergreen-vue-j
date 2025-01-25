<template>
  <ul class="ev-menu">
    <template v-for="item in menuOptions" :key="item.key">
      <li v-if="item.divided" role="seperator" class="divided-placeholder"></li>
      <li
        class="ev-menu__item"
        :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
        :id="`ev-item-${item.key}`"
        @click="() => itemClick(item)"
      >
        <RenderVNode :v-node="item.label" />
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import RenderVNode from '../Common/RenderVNode'
import type { MenuEmits, MenuOption, MenuProps } from './types'
defineOptions({
  name: 'ev-menu',
})
const props = defineProps<MenuProps>()
const emits = defineEmits<MenuEmits>()

const itemClick = (item: MenuOption) => {
  if (item.disabled) return
  emits('select', item)
  if (props.onItemClick) props.onItemClick(item)
}
</script>
