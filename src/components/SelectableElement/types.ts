export type SelectableElementContextDataObject = {
  selected: boolean
  inputProps: SelectableElementInputProps
}

export type SelectableElementInputProps =
  React.InputHTMLAttributes<HTMLInputElement>
