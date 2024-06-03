import Link from 'next/link'
import {
  AnchorHTMLAttributes,
  FunctionComponent,
  memo,
  PropsWithChildren
} from 'react'

import { Icon } from '~/components/Icon'
import { Partial, PartialProps } from '~/components/Partial'
import {
  CardIconDropDownMenuListItem,
  CardOptionIconWrapper,
  CardOptionLabelWrapper
} from './styles'
import { EntityCardOption } from './types'

type CardIconDropDownMenuListItemElementProps = {
  option: EntityCardOption
}

type CardIconDropDownMenuListItemElementComponent =
  React.FunctionComponent<CardIconDropDownMenuListItemElementProps>

export const CardIconDropDownMenuListItemElement: CardIconDropDownMenuListItemElementComponent =
  memo(function CardIconDropDownMenuListItemElement({ option }) {
    const LinkElement: FunctionComponent<PropsWithChildren> = props => {
      const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> = {}

      if (option.openLinkInNewTab) {
        linkProps.target = '_blank'
      }

      return (
        <Link href={option.href || '#'} {...linkProps}>
          {props.children}
        </Link>
      )
    }

    const ButtonElement: FunctionComponent<PropsWithChildren> = props => {
      const clickHandler = () => {
        if (typeof option.onClick === 'function') {
          option.onClick()
        }
      }

      return (
        <button type="button" role="button" onClick={clickHandler}>
          {props.children}
        </button>
      )
    }

    const WrapperElement =
      typeof option.href === 'string' ? LinkElement : ButtonElement

    const { is, isEither, can, canEither } = option

    const optionGuards = { is, isEither, can, canEither }

    const cardIconDropDownMenuListItemGuards: PartialProps = {}

    for (const key in optionGuards) {
      const optionGuard = optionGuards[key as keyof typeof optionGuards]

      if (optionGuard instanceof Array || typeof optionGuard === 'string') {
        const keyName = key as keyof PartialProps

        Object.assign(cardIconDropDownMenuListItemGuards, {
          [keyName]: optionGuard
        })
      }
    }

    return (
      <Partial {...cardIconDropDownMenuListItemGuards}>
        <CardIconDropDownMenuListItem>
          <WrapperElement>
            {option.icon && (
              <CardOptionIconWrapper>
                <div>
                  <Icon name={option.icon} />
                </div>
              </CardOptionIconWrapper>
            )}
            <CardOptionLabelWrapper>
              <span>{option.label}</span>
            </CardOptionLabelWrapper>
          </WrapperElement>
        </CardIconDropDownMenuListItem>
      </Partial>
    )
  })
