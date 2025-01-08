<template>
  <i class="ev-icon" v-bind="$attrs" :class="{ [`ev-icon--${type}`]: type }" :style="customStyles">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { omit } from 'radash'
import type { IconProps } from './types.ts'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'
defineOptions({
  name: 'ev-icon',
  inheritAttrs: false,
})
const props = defineProps<IconProps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>
