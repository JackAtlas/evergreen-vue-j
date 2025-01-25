export type MenuItemIntent = 'none' | 'success' | 'danger'

export interface MenuGroupProps {
  title: string
}

export interface MenuItemProps {
  disabled?: boolean
  intent?: MenuItemIntent
  icon?: string
  secondaryText?: string
  onSelect?: () => void
}
