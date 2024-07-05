'use client'

import { Fragment } from 'react'

import { Body, Container, Data, Row } from './styles'
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
      return <span>{value}</span>
    }

    return (
      <Fragment>
        {valueParagraphs.map((valueParagraph, index) => (
          <p key={index} className="w-full block first:pt-0 last:pb-0 py-2.5">
            <span>{valueParagraph}</span>
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
            ? 'heading'
            : undefined

          return (
            <Fragment key={propertyIndex}>
              <Row className={rowClassName}>
                <Data>
                  <strong>{property}</strong>
                </Data>
                {typeof props[property] !== 'object' && (
                  <Data>{renderPropertyValue(String(props[property]))}</Data>
                )}
              </Row>
              {typeof props[property] === 'object' &&
                renderProperties(props[property] as PropertyMap)}
            </Fragment>
          )
        })}
    </Fragment>
  )

  return (
    <Fragment>
      <h2 className="text-4xl pointer-events-none text-zinc-600 font-semibold my-4">
        Ficha técnica
      </h2>
      <Container>
        <Body>{renderProperties(props)}</Body>
      </Container>
    </Fragment>
  )
}
