import { FontAwesome6IconName } from 'Types/react-icons'
import { ValidateGuardUtilProp } from '~/utils/validateAuthGuard'

export type IconProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name: FontAwesome6IconName
}

export type IconButtonHandler = () => void

export type IconButtonHandlers = {
  onRemove?: IconButtonHandler
  onEdit?: IconButtonHandler
  onView?: IconButtonHandler
  onViewOptions?: IconButtonHandler
}

export type IconComponent = React.FunctionComponent<IconProps>
export type IconButtonComponent = React.FunctionComponent<
  IconButtonHandlers & {
    options?: EntityCardOptions
    entity?: string
  }
>

export type EntityCardOptionGuards = Partial<{
  is: ValidateGuardUtilProp
  isEither: ValidateGuardUtilProp
  can: ValidateGuardUtilProp
  canEither: ValidateGuardUtilProp
}>

export type EntityCardOption = EntityCardOptionGuards & {
  label: string
  icon?: FontAwesome6IconName
  href?: string
  openLinkInNewTab?: boolean
  onClick?: () => void
}

export type EntityCardOptions = Array<EntityCardOption>
