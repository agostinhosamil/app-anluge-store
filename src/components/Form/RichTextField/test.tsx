// import EditorJS from '@editorjs/editorjs'
// import { useEffect, useRef } from 'react'

// import CheckList from '@editorjs/checklist'
// import Code from '@editorjs/code'
// import Delimiter from '@editorjs/delimiter'
// import Embed from '@editorjs/embed'
// import Header from '@editorjs/header'
// import Image from '@editorjs/image'
// import InlineCode from '@editorjs/inline-code'
// import LinkTool from '@editorjs/link'
// import List from '@editorjs/list'
// import Marker from '@editorjs/marker'
// import Quote from '@editorjs/quote'
// import Raw from '@editorjs/raw'
// import SimpleImage from '@editorjs/simple-image'
// import Table from '@editorjs/table'
// import Warning from '@editorjs/warning'

// import { generateRandomId } from '~/utils'

// export const Editor = () => {
//   const elementId = generateRandomId()

//   const containerRef = useRef<EditorJS>()

//   useEffect(() => {
//     if (containerRef.current) {
//       return
//     }

//     containerRef.current = new EditorJS({
//       /**
//        * Id of Element that should contain Editor instance
//        */
//       holder: elementId,

//       tools: {
//         embed: Embed,
//         table: Table,
//         list: List,
//         warning: Warning,
//         code: Code,
//         linkTool: LinkTool,
//         image: {
//           class: Image,
//           config: {
//             /**
//              * handle image upload
//              */
//             uploader: {
//               /**
//                * handle image upload by file object
//                */
//               uploadByFile: (file: File) => {
//                 console.log('>>> may upload file: ', file)
//               },

//               uploadByUrl: (url: string) => {
//                 console.log('>>> may upload url: ', url)
//               }
//             }
//           }
//         },
//         raw: Raw,
//         header: Header,
//         quote: Quote,
//         marker: Marker,
//         checklist: CheckList,
//         delimiter: Delimiter,
//         inlineCode: InlineCode,
//         simpleImage: SimpleImage
//       }
//     })

//     return () => {
//       // editor.destroy()
//     }
//   })

//   return <div id={elementId} />
// }
