<script setup lang="ts">
import { ref } from 'vue'
import Button from '../../../src/components/Button/Button.vue'
import Tooltip from '../../../src/components/Tooltip/Tooltip.vue'
const tooltipRef = ref()

const open = () => {
  if (tooltipRef.value) tooltipRef.value.show()
}

const close = () => {
  if (tooltipRef.value) tooltipRef.value.hide()
}
</script>

<template>
  <Tooltip placement="top" ref="tooltipRef" manual>
    <img src="https://picsum.photos/200" alt="example2" />
    <template #content>Example 2</template>
  </Tooltip>
  <Button @click="open">OPEN</Button>
  <Button @click="close">CLOSE</Button>
</template>
