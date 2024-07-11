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
}

export const AdvertiseGroup: React.FunctionComponent<
  AdvertisingGroupProps
> = props => {
  const { group } = props

  const { advertises, loading } = useAdvertise<'group'>(group)

  if (loading) {
    return (
      <div className="w-full px-[20px] py-4">
        <Row>
          <Col md={8} lg={7}>
            <PlaceHolder className="w-full h-[280px] rounded-lg" />
          </Col>
          <Col md={4} lg={5}>
            <PlaceHolder className="w-full h-[280px] rounded-lg" />
          </Col>
        </Row>
      </div>
    )
  }

  const resolveColSize = (defaultSize: number): number => {
    if (advertises.large.length < 1 || advertises.small.length < 1) {
      return 12
    }

    return defaultSize
  }

  if (advertises.large.length < 1 && advertises.small.length < 1) {
    return null
  }

  return (
    <div className="w-full px-[20px] pt-4 pb-[40px]">
      <Row>
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
    </div>
  )
}
