'use client'

import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { PlaceHolder } from '@components/styled'
import { useAdvertise } from '@utils/hooks/useAdvertise'
import { AdvertiseGroupsLists } from 'Types/Advertise'

import { AdvertiseCarouselWrapper } from './styles'
import { resolveAdvertiseImageUrl, resolveAdvertiseLinkUrl } from './utils'

type AdvertisingGroupProps = {
  group: keyof AdvertiseGroupsLists
  flexDirection?: 'row' | 'column'
  skyscraper?: boolean
}

export const AdvertiseGroup: React.FunctionComponent<
  AdvertisingGroupProps
> = props => {
  const { group } = props

  const { advertises, loading } = useAdvertise<'group'>(group)

  let rowProps: React.HTMLAttributes<HTMLDivElement> = {}

  if (props.flexDirection === 'column') {
    rowProps = {
      className: 'gap-4'
    }
  }

  const resolveColSize = (defaultSize: number): number => {
    const hasLargeAdvertises = Boolean(
      advertises.large instanceof Array && advertises.large.length > 0
    )
    const hasSmallAdvertises = Boolean(
      advertises.small instanceof Array && advertises.small.length > 0
    )

    if (
      !hasLargeAdvertises ||
      !hasSmallAdvertises ||
      props.flexDirection === 'column'
    ) {
      return 12
    }

    return defaultSize
  }

  if (loading) {
    return (
      <div
        className={`w-full ${props.flexDirection === 'column' ? '' : 'px-[20px]'} py-5`}
      >
        <Row {...rowProps}>
          <Col md={resolveColSize(8)} lg={resolveColSize(7)}>
            <PlaceHolder className="w-full h-[280px] rounded-lg" />
          </Col>
          <Col md={resolveColSize(4)} lg={resolveColSize(5)}>
            <PlaceHolder className="w-full h-[280px] rounded-lg" />
          </Col>
        </Row>
        {props.skyscraper && (
          <Row className="gap-4">
            <Col md={12}>
              <PlaceHolder className="w-full h-[980px] rounded-lg" />
            </Col>
          </Row>
        )}
      </div>
    )
  }

  if (advertises.large.length < 1 && advertises.small.length < 1) {
    if (!(props.skyscraper && advertises.skyscraper.length >= 1)) {
      return null
    }
  }

  return (
    <div
      className={`w-full ${props.flexDirection === 'column' ? 'flex flex-col gap-4' : 'px-[20px]'} pt-4 pb-[40px]`}
    >
      <Row {...rowProps}>
        {advertises.large.length >= 1 && (
          <Col md={resolveColSize(8)} lg={resolveColSize(7)}>
            <div className="w-full h-full rounded-[12px] bg-zinc-300">
              <Carousel controls={false}>
                {advertises.large.map(advertise => (
                  <Carousel.Item key={advertise.id}>
                    <div className="w-full h-auto block">
                      <Link
                        href={resolveAdvertiseLinkUrl(advertise)}
                        className="w-full block relative h-auto"
                      >
                        <div className="block w-full bg-[#bfbfbf] rounded-[12px]">
                          <img
                            className="block w-full h-auto border-none outline-none rounded-[12px] object-fill hover:opacity-90"
                            src={resolveAdvertiseImageUrl(advertise)}
                            alt={advertise.title || 'Untitled'}
                          />
                        </div>
                      </Link>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        )}
        {advertises.small.length >= 1 && (
          <Col md={resolveColSize(4)} lg={resolveColSize(5)}>
            <AdvertiseCarouselWrapper>
              <Carousel controls={false} className="h-full">
                {advertises.small.map(advertise => (
                  <Carousel.Item key={advertise.id} className="h-full">
                    <div className="w-full h-full block">
                      <Link
                        href={resolveAdvertiseLinkUrl(advertise)}
                        className="w-full block relative h-full"
                      >
                        <div className="block w-full h-full bg-[#bfbfbf] rounded-[12px]">
                          <img
                            className="block w-full h-full border-none outline-none rounded-[12px] object-cover hover:opacity-90"
                            src={resolveAdvertiseImageUrl(advertise)}
                            alt={advertise.title || 'Untitled'}
                          />
                        </div>
                      </Link>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </AdvertiseCarouselWrapper>
          </Col>
        )}
      </Row>
      {props.skyscraper && advertises.skyscraper.length >= 1 && (
        <Row className="gap-4">
          {advertises.skyscraper.map(advertise => (
            <div
              key={advertise.id}
              className="w-full h-auto block relative rounded-lg"
            >
              <Link
                className="block w-full h-auto"
                href={resolveAdvertiseLinkUrl(advertise)}
                target="_blank"
              >
                <img
                  className="w-full rounded-lg"
                  src={resolveAdvertiseImageUrl(advertise, 'normal')}
                  alt={String(advertise.title)}
                />
              </Link>
            </div>
          ))}
        </Row>
      )}
    </div>
  )
}
