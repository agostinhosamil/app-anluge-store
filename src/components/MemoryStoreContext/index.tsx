'use client'

import { Fragment } from 'react'
import { MemoryStore } from '~/helpers/MemoryStore'

type MemoryStoreContextWrapperProps = React.PropsWithChildren<{
  apiAccessToken?: string
}>

type MemoryStoreContextWrapperComponent =
  React.FunctionComponent<MemoryStoreContextWrapperProps>

export const MemoryStoreContextWrapper: MemoryStoreContextWrapperComponent =
  props => {
    MemoryStore.set('apiAccessToken', props.apiAccessToken)

    return <Fragment>{props.children}</Fragment>
  }
