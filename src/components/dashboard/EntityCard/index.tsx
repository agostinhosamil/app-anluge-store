'use client'

// import * as Icons from "react-icons/fa6";
import Image from '@components/Image'

import * as CardIcons from './card-icons'
import { EntityCardOptions, IconButtonHandlers } from './card-icons/types'
import {
  AvatarWrapper,
  Body,
  CardAvatarSize,
  cardAvatarSizesMap,
  Container,
  Content,
  IconsWrapper,
  SubTitle,
  Title
} from './styles'

type CardIcons = typeof import('./card-icons')

type EntityCardIcon = keyof CardIcons

type EntityCardProps = IconButtonHandlers & {
  icons?: Array<EntityCardIcon>
  options?: EntityCardOptions
  subTitle?: string | Array<string>
  title: string
  avatar?: string
  entity?: string
  avatarSize?: CardAvatarSize
}

type EntityCardComponent = React.FunctionComponent<
  React.PropsWithChildren & EntityCardProps
>

export type EntityCardActionHandler<EntityData extends object = any> = (
  entity: EntityData
) => Promise<void> | void

export type { EntityCardOption, EntityCardOptions } from './card-icons/types'

export const EntityCard: EntityCardComponent = ({
  icons,
  children,
  title,
  subTitle,
  ...props
}) => {
  const avatarSize = cardAvatarSizesMap[props.avatarSize || 'normal']

  return (
    <Container>
      <Body>
        {props.avatar && (
          <AvatarWrapper $avatarSize={props.avatarSize}>
            <div>
              <Image
                src={props.avatar}
                alt="user name"
                width={avatarSize}
                height={avatarSize}
              />
            </div>
          </AvatarWrapper>
        )}
        <Content>
          <Title>{title}</Title>
          <SubTitle>
            {subTitle instanceof Array ? subTitle.join(' | ') : subTitle}
          </SubTitle>
          {children}
        </Content>
        {icons instanceof Array && icons.length >= 1 && (
          <IconsWrapper>
            <ul>
              {icons.map((iconName, iconIndex) => {
                const IconButtonElement = CardIcons[iconName]

                if (!IconButtonElement) {
                  return null
                }

                return (
                  <li key={iconIndex}>
                    <IconButtonElement {...props} />
                  </li>
                )
              })}
            </ul>
          </IconsWrapper>
        )}
      </Body>
    </Container>
  )
}
