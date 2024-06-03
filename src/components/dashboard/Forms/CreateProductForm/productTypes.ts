import { SelectFieldData } from '@components/Form/SelectField/types'

export const productTypes: SelectFieldData = [
  {
    label: `Produto digital`,
    icon: 'FaCarBurst',
    value: 1,
    options: [
      {
        label: `Software de faturação`,
        icon: 'FaCarBurst',
        value: 5,
        options: []
      },
      {
        label: `Software de gestão`,
        icon: 'FaCarBurst',
        value: 4,
        options: []
      },
      {
        label: `Antivirus`,
        icon: 'FaVirusSlash',
        value: 3,
        options: []
      }
    ]
  },
  {
    label: `Produto físico`,
    icon: 'FaCarBurst',
    value: 2,
    options: []
  }
]
