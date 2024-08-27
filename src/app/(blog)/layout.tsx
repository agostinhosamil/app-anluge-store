import { Col, Row } from 'react-bootstrap'

import { Header } from 'blog@components/Header'
import { Footer } from 'store@components/Footer'
import { LayoutProps } from '~/Types/next'
import { AdvertiseGroup } from '~/components/store/NewsFeed/AdvertiseGroup'

export default async function BlogPagesLayout({ children }: LayoutProps) {
  return (
    <div className="page-section-container flex flex-col gap-5">
      <Header />
      <div className="w-full max-w-6xl m-auto lg:px-6 block px-7">
        <Row>
          <Col md={9}>
            {children}
            <div className="w-full block">
              <AdvertiseGroup group="bottom" />
            </div>
          </Col>
          <Col md={3}>
            <AdvertiseGroup group="top" skyscraper />
          </Col>
        </Row>
      </div>
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  )
}
