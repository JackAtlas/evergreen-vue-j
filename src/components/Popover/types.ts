import type { VNode } from 'vue'
import type { TooltipProps } from '../Tooltip/types'

export interface PopoverProps extends TooltipProps {
  menuOptions: MenuOption[]
  hideAfterClick?: boolean
}

export interface MenuOption {
  label: string | VNode
  key: string | number
  disabled?: boolean
  divided?: boolean
}

export interface PopoverEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'select', value: MenuOption): void
}

export interface PopoverInstance {
  show: () => void
  hide: () => void
}
