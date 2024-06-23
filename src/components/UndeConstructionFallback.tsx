'use client'

import UnderConstruction from '../app/assets/under-construction.svg'
import { UnderConstructionFallbackContainer } from './styled'

export const UnderConstructionFallback = () => (
  <UnderConstructionFallbackContainer>
    <UnderConstruction />
    <h1>Página em manutenção</h1>
  </UnderConstructionFallbackContainer>
)
