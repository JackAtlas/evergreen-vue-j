import type { VNode } from 'vue'

export interface MenuProps {
  menuOptions: MenuOption[]
  onItemClick?: (item: MenuOption) => void
}

export interface MenuOption {
  label: string | VNode
  key: string | number
  disabled?: boolean
  divided?: boolean
}

export interface MenuEmits {
  (e: 'select', value: MenuOption): void
}
