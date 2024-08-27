import Link from 'next/link'
import { Fragment } from 'react'

import { PlaceHolder } from '@components/PlaceHolder'
import { prisma } from '@services/prisma'
import Image from '~/components/Image'
import { Marquee } from '~/components/Marquee'
import { arraySplit, resolveCategoryImageUrl } from '~/utils'

type CategoryMapSliderProps = {
  rows?: number | `${number}`
}

export const CategoryMapSlider = async (props: CategoryMapSliderProps) => {
  const categories = await prisma.category.findMany({
    select: {
      slag: true,
      icon: true,
      title: true
    }
  })

  if (categories.length <= 0) {
    return null
  }

  const isOdd = (num: number) => Boolean(num / 2 !== parseInt(String(num / 2)))

  const categoriesRowsCount =
    props.rows && !isNaN(Number(props.rows)) ? Number(props.rows) : 2
  const categoriesRows = arraySplit(
    categories,
    Math.ceil(categories.length / categoriesRowsCount)
  )

  // console.log(categoriesRows)

  return (
    <Fragment>
      <h1 className="text-pretty px-[20px] font-light uppercase mb-[50px] dark:text-zinc-100">
        Comprar por categorias
      </h1>
      <div className="w-full h-max mb-[calc(6*24px)] mt-[calc(4*24px)] flex flex-col gap-3 relative">
        <Marquee>
          {categoriesRows.map((categoryRow, categoryRowIndex) => (
            <div
              key={categoryRowIndex}
              className={`w-full flex flex-row gap-[150px] flex-nowrap`.concat(
                isOdd(categoryRowIndex) ? ' pl-[150px]' : ''
              )}
            >
              {categoryRow.map(category => (
                <Link
                  key={category.slag}
                  href={`/categories/${category.slag}?ref=categories.slider@map`}
                  className="w-[150px] h-max block relative"
                >
                  <PlaceHolder className="bg-zinc-200 rounded-full size-[150px]">
                    <Image
                      src={resolveCategoryImageUrl(category)}
                      width={150}
                      height={150}
                      alt={category.title}
                      className="rounded-full pointer-events-none select-none dark:border-solid dark:border-1 dark:border-zinc-700"
                    />
                    <span className="w-[150px] break-words whitespace-break-spaces px-2 line-clamp-6 absolute top-full mt-[+20px] text-center font-light text-zinc-900 select-none pointer-events-none dark:text-zinc-50">
                      {category.title}
                    </span>
                  </PlaceHolder>
                </Link>
              ))}
            </div>
          ))}
        </Marquee>
      </div>
    </Fragment>
  )
}
