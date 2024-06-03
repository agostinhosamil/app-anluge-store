import { LongTextField } from '@components/Form/LongTextField'

export const RichTextField = ({ name }: { name?: string }) => (
  <LongTextField label="Descrição" rows={8} name={name} />
)
