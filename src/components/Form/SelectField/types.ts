import { FontAwesome6IconName } from 'Types/react-icons'

export type OptionProps = {
  value?: any
  label: string
  options?: SelectFieldData
  icon?: FontAwesome6IconName
  onSelect?: (props: OptionProps) => void
  onOpen?: (props: OptionProps) => void
}

export type SelectFieldData = Array<OptionProps>
