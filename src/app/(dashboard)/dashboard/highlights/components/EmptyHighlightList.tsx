'use client'

import { Fragment } from 'react'
import { useHighlights } from '../hook'

export const EmptyHighlightList = () => {
  const { highlights } = useHighlights()

  const emptyHighlightList = !(
    highlights.categories.length >= 1 || highlights.products.length >= 1
  )

  return (
    <Fragment>
      {emptyHighlightList && (
        <div>
          <strong>Sem destaques para apresentar</strong>
          <p>
            Ao adicionar produtos em destaque na página inicial da loja, poderá
            geri-los a partir daqui.
          </p>
        </div>
      )}
    </Fragment>
  )
}
