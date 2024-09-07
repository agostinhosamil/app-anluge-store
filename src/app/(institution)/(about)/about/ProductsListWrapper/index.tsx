import { ProductsListItem } from './ProductsListItem'

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious
// } from 'ui@components/carousel'

import { Slide, TouchSlider } from '@components/TouchSlider'

export const ProductsListWrapper = () => {
  return (
    <section className="w-full py-8 antialiased md:py-1">
      <div className="mx-auto w-full px-4 2xl:px-0">
        {/* <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 100 }).map((_, i) => (
            <ProductsListItem key={i} />
          ))}
        </div> */}
        {/* <div className="w-[90%] m-auto px-6 md:px-10 lg:px-20 overflow-x-hidden block">
          <Carousel
            opts={{
              align: 'start'
            }}
            className="w-full"
          >
            <CarouselContent className="w-full">
              {Array.from({ length: 300 }).map((_, i) => (
                <CarouselItem
                  key={i}
                  className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
                >
                  <ProductsListItem id={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div> */}

        <div className="w-[90%] p-2 m-auto px-6 md:px-10 lg:px-20 overflow-x-hidden block">
          <TouchSlider showButtons showIndicators>
            {Array.from({ length: 300 }).map((_, i) => (
              <Slide key={i}>
                <div className="w-[280px] block text-wrap whitespace-normal break-words">
                  <ProductsListItem id={i} />
                </div>
              </Slide>
            ))}
          </TouchSlider>
        </div>
      </div>
    </section>
  )
}
