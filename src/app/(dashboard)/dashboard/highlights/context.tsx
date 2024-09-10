'use client'

import { createContext, useContext, useState } from 'react'

import { useApp } from '@components/ApplicationContext'
import { axios } from '@services/axios'

import {
  HighlightCategory,
  HighlightProduct,
  Highlights,
  HighlightsContextDataObject
} from './types'

export const HighlightsContext = createContext<HighlightsContextDataObject>(
  {} as HighlightsContextDataObject
)

export const useHighlightsContext = () => useContext(HighlightsContext)

type HighlightsContextProviderProps = React.PropsWithChildren<{
  highlights: Highlights
}>

type HighlightsContextProviderComponent =
  React.FunctionComponent<HighlightsContextProviderProps>

export const HighlightsContextProvider: HighlightsContextProviderComponent =
  props => {
    const [highlights, setHighlights] = useState<Highlights>(props.highlights)

    const context = useApp()

    if (!context) {
      throw new Error(
        'useHighlights should only be used inside ApplicationContext'
      )
    }

    const highlightsContextDataObject: HighlightsContextDataObject = {
      highlights,

      async addHighlight(highlight): Promise<boolean> {
        const completed = await context.resolvePromise(async () => {
          const response = await axios.post<
            HighlightCategory | HighlightProduct
          >('/store/highlights', {
            highlight: {
              context: 'store',
              ...highlight
            }
          })

          if (response.data && response.data.id) {
            setHighlights(
              'product' in response.data
                ? {
                    ...highlights,
                    products: [...highlights.products, response.data]
                  }
                : {
                    ...highlights,
                    categories: [...highlights.categories, response.data]
                  }
            )

            return true
          }

          return false
        })

        if (!completed) {
          const alertResponse = await context.alert(
            'Erro',
            'Não foi possível adicionar o item a lista de destaques.',
            {
              buttons: ['Buttons.Cancel', 'Buttons.Retry']
            }
          )

          if (alertResponse === 'AlertResponse.Retry') {
            return await this.addHighlight(highlight)
          }

          return false
        }

        return true
      },

      async removeHighlight() {
        return false
      }
    }

    return (
      <HighlightsContext.Provider value={highlightsContextDataObject}>
        {props.children}
      </HighlightsContext.Provider>
    )
  }
