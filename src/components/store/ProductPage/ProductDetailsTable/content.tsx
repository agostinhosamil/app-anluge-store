'use client'

import { Fragment } from 'react'

import { Body, Container, Data, Row } from './styles'
import { PropertyMap } from './types'

type ContentProps = {
  props: PropertyMap
}

type ContentComponent = React.FunctionComponent<ContentProps>

export const Content: ContentComponent = ({ props }) => {
  const isHeadingRow = (rowData: PropertyMap | string | undefined | null) => {
    return !(typeof rowData !== 'object')
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
                  <Data>
                    <span>{String(props[property])}</span>
                  </Data>
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
    <Container>
      <Body>{renderProperties(props)}</Body>
    </Container>
  )
}
