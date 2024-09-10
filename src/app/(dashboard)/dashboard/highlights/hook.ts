// import { useState } from 'react'

import { useHighlightsContext } from './context'

// import { useApp } from '@components/ApplicationContext'
// import { axios } from '@services/axios'

// import {
//   HighlightCategory,
//   HighlightInput,
//   HighlightProduct,
//   Highlights
// } from './types'

// const DEFAULT_HIGHLIGHTS: Highlights = {
//   categories: [],
//   products: []
// }

export const useHighlights = () => useHighlightsContext()
// initialHighlightsData: Highlights = DEFAULT_HIGHLIGHTS
// ) => {
// const [highlights, setHighlights] = useState<Highlights>(
//   initialHighlightsData
// )

// const context = useApp()

// if (!context) {
//   throw new Error(
//     'useHighlights should only be used inside ApplicationContext'
//   )
// }

// const responseDataObject = {
//   highlights,

//   async addHighlight(highlight: HighlightInput): Promise<boolean> {
//     const completed = await context.resolvePromise(async () => {
//       const response = await axios.post<HighlightCategory | HighlightProduct>(
//         '/store/highlights',
//         {
//           highlight: {
//             context: 'store',
//             ...highlight
//           }
//         }
//       )

//       if (response.data && response.data.id) {
//         setHighlights(
//           'medias' in response.data
//             ? {
//                 ...highlights,
//                 products: [...highlights.products, response.data]
//               }
//             : {
//                 ...highlights,
//                 categories: [...highlights.categories, response.data]
//               }
//         )

//         return true
//       }

//       return false
//     })

//     if (!completed) {
//       const alertResponse = await context.alert(
//         'Erro',
//         'Não foi possível adicionar o item a lista de destaques.',
//         {
//           buttons: ['Buttons.Cancel', 'Buttons.Retry']
//         }
//       )

//       if (alertResponse === 'AlertResponse.Retry') {
//         return await this.addHighlight(highlight)
//       }

//       return false
//     }

//     return true
//   }
// }

// return responseDataObject
// }
