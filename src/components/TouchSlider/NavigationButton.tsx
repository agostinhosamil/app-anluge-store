import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

import { NavigationButtonWrapper } from './styles'

const Icons = {
  FaAngleLeft,
  FaAngleRight
}

type Icon = typeof Icons
type IconName = keyof Icon

type NavigationButtonProps = {
  icon: IconName
}

type NavigationButtonComponent = React.FunctionComponent<
  React.ComponentProps<'button'> & NavigationButtonProps
>

export const NavigationButton: NavigationButtonComponent = ({
  icon,
  ...props
}) => {
  const buttonWrapperPosition = icon === 'FaAngleLeft' ? 'left' : 'right'

  const IconElement = Icons[icon]

  return (
    <NavigationButtonWrapper $position={buttonWrapperPosition}>
      <button {...props} type="button" role="button">
        <i>
          <IconElement />
        </i>
      </button>
    </NavigationButtonWrapper>
  )
}
