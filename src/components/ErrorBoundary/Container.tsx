'use client'

import { Fragment, PropsWithChildren } from 'react'

import { GlobalStyles } from '@styles/rootLayout'
import StyledComponentsRegistry from '~/app/lib/registry'

export const Container = ({ children }: PropsWithChildren) => (
  <Fragment>
    <StyledComponentsRegistry>
      <GlobalStyles />
      {children}
    </StyledComponentsRegistry>
  </Fragment>
)
