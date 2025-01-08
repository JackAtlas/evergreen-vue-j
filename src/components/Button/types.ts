export type ButtonAppearance = 'default' | 'primary' | 'minimal'
export type ButtonIntent = 'none' | 'success' | 'danger'
export type ButtonSize = 'small' | 'medium' | 'large'

export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  appearance?: ButtonAppearance
  intent?: ButtonIntent
  size?: ButtonSize
  disabled?: boolean
  isLoading?: boolean
  nativeType?: NativeType
  autofocus?: boolean
  iconBefore?: string
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}
