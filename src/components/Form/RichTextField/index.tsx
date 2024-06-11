import { LongTextField } from '@components/Form/LongTextField'

export const RichTextField = ({
  name,
  defaultValue
}: {
  name?: string
  defaultValue?: string
}) => (
  <LongTextField
    label="Descrição"
    rows={8}
    name={name}
    defaultValue={defaultValue}
  />
)
