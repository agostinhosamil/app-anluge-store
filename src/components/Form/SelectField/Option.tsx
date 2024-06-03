import React from 'react'

import { Icon } from '@components/Icon'
import {
  OptionButton,
  OptionContainer,
  OptionElementBody,
  OptionIconWrapper,
  OptionLabel,
  OptionLabelWrapper,
  OptionScreenButton,
  OptionScreenButtonIcon,
  OptionScreenButtonLabel,
  OptionScreenButtonWrapper
} from './styles'
import { OptionProps } from './types'

type OptionComponent = React.FunctionComponent<
  React.PropsWithChildren & OptionProps
>

export const Option: OptionComponent = props => {
  const hasChildren = Boolean(
    props.options instanceof Array && props.options.length >= 1
  )

  const optionButtonClickHandler: React.MouseEventHandler = event => {
    event.preventDefault()

    if (typeof props.onSelect === 'function') {
      props.onSelect(props)
    }
  }

  const optionScreenButtonClickHandler: React.MouseEventHandler = event => {
    event.preventDefault()

    if (typeof props.onOpen === 'function') {
      props.onOpen(props)
    }
  }

  return (
    <OptionContainer>
      <OptionButton
        type="button"
        role="button"
        title={props.label}
        onClick={optionButtonClickHandler}
      >
        <OptionElementBody>
          {props.icon && (
            <OptionIconWrapper>
              <div>
                <Icon name={props.icon} />
              </div>
            </OptionIconWrapper>
          )}
          <OptionLabelWrapper>
            <OptionLabel>{props.label}</OptionLabel>
          </OptionLabelWrapper>
        </OptionElementBody>
      </OptionButton>
      {hasChildren && (
        <OptionScreenButtonWrapper>
          <OptionScreenButton
            type="button"
            role="button"
            onClick={optionScreenButtonClickHandler}
          >
            <OptionScreenButtonLabel>
              <span>Entrar Aqui</span>
            </OptionScreenButtonLabel>
            <OptionScreenButtonIcon>
              <div>
                <Icon name="FaAngleRight" />
              </div>
            </OptionScreenButtonIcon>
          </OptionScreenButton>
        </OptionScreenButtonWrapper>
      )}
    </OptionContainer>
  )
}
