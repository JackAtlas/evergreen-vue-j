<template>
  <div class="ev-popover">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :closeDelay="closeDelay"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot />
      <template #content>
        <ul class="ev-popover__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
            <li
              class="ev-popover__item"
              :class="{
                'is-disabled': item.disabled,
                'is-divided': item.divided,
              }"
              :id="`popover-item-${item.key}`"
              @click="() => itemClick(item)"
            >
              <RenderVNode :vNode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { PopoverEmits, PopoverInstance, PopoverProps, MenuOption } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import RenderVNode from '../Common/RenderVNode'
import type { TooltipInstance } from '../Tooltip/types'
defineOptions({
  name: 'ev-popover',
})
const props = withDefaults(defineProps<PopoverProps>(), {
  hideAfterClick: true,
})
const emits = defineEmits<PopoverEmits>()
const tooltipRef = ref() as Ref<TooltipInstance>
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOption) => {
  if (e.disabled) return
  emits('select', e)
  if (props.hideAfterClick) tooltipRef.value.hide()
}
defineExpose<PopoverInstance>({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide(),
})
</script>
