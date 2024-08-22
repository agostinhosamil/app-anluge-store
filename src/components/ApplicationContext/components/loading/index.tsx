import { Spinner } from 'react-bootstrap'
import { FaExclamation } from 'react-icons/fa'

import CheckIcon from './check.svg'

export const loadingStateIcons = {
  loading: () => <Spinner />,
  complete: () => <CheckIcon />,
  error: () => <FaExclamation />
}

export type LoadingStateIcons = typeof loadingStateIcons

export type LoadingStateIcon = keyof LoadingStateIcons

type LoadingDialogIconComponentProps = {
  name: LoadingStateIcon
}

type LoadingDialogIconComponent =
  React.FunctionComponent<LoadingDialogIconComponentProps>

export const LoadingDialogIcon: LoadingDialogIconComponent = ({ name }) => {
  const IconElement = loadingStateIcons[name]

  return <IconElement />
}
