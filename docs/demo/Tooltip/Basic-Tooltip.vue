<script setup lang="ts">
import Tooltip from '../../../src/components/Tooltip/Tooltip.vue'
</script>

<template>
  <Tooltip placement="right">
    <img src="https://picsum.photos/200" alt="example1" />
    <template #content>Example 1</template>
  </Tooltip>
</template>
