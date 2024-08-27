'use client'

import { Fragment } from 'react'

import { PropertyMap } from './types'

type ContentProps = {
  props: PropertyMap
}

type ContentComponent = React.FunctionComponent<ContentProps>

export const Content: ContentComponent = ({ props }) => {
  const isHeadingRow = (rowData: string | PropertyMap) => {
    return rowData && typeof rowData === 'object'
  }

  const renderPropertyValue = (value: string): React.ReactNode => {
    const re = /(\s*(;|\n+)\s*)/
    const valueParagraphs = value.split(re).filter(p => !re.test(p))

    if (valueParagraphs.length < 2) {
      return <span className="dark:text-zinc-300">{value}</span>
    }

    return (
      <Fragment>
        {valueParagraphs.map((valueParagraph, index) => (
          <p
            key={index}
            className="w-full block first:pt-0 last:pb-0 py-2.5 dark:text-zinc-300"
          >
            <span className="text-inherit">{valueParagraph}</span>
          </p>
        ))}
      </Fragment>
    )
  }

  const renderProperties = (props: PropertyMap) => (
    <Fragment>
      {props &&
        Object.keys(props).map((property, propertyIndex) => {
          const rowClassName = isHeadingRow(props[property])
            ? 'bg-zinc-100 text-dark-900 dark:bg-zinc-900 dark:text-zinc-50 '
            : ''

          return (
            <Fragment key={propertyIndex}>
              <tr
                className={rowClassName.concat(
                  'w-full py-[18px] px-[14px] border-t first:border-t-0 border-gray-300 dark:border-gray-600 flex justify-stretch'
                )}
              >
                <td className="w-full">
                  <strong className="font-extrabold dark:text-zinc-100">
                    {property}
                  </strong>
                </td>
                {typeof props[property] !== 'object' && (
                  <td className="w-full ml-3 pl-3 border-l border-l-gray-300 dark:border-l-gray-600 border-solid">
                    {renderPropertyValue(String(props[property]))}
                  </td>
                )}
              </tr>
              {typeof props[property] === 'object' &&
                renderProperties(props[property] as PropertyMap)}
            </Fragment>
          )
        })}
    </Fragment>
  )

  return (
    <Fragment>
      <h2 className="text-4xl pointer-events-none text-zinc-600 dark:text-zinc-300 font-semibold my-4">
        Ficha técnica
      </h2>
      <table className="w-full flex h-auto border-[1px] border-solid border-gray-300 dark:border-gray-600 rounded-lg my-[25px] shadow-[1px_2px_3px_0px_rgba(0,0,0,0.09)]">
        <tbody className="w-full h-auto">{renderProperties(props)}</tbody>
      </table>
    </Fragment>
  )
}
