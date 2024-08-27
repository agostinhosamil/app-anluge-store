'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { FaEllipsisVertical } from 'react-icons/fa6'

import { cn } from '~/lib/utils'

export const SearchBox = () => {
  const [fixed, setFixed] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const windowScrollHandler = () => {
      if (!containerRef.current) {
        return
      }

      const { y } = containerRef.current.getBoundingClientRect()

      if (y <= 0 && !fixed) {
        return setFixed(true)
      }

      if (window.scrollY <= 0) {
        setFixed(false)
      }
    }

    window.addEventListener('scroll', windowScrollHandler)

    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
    }
  })

  const Container = !fixed
    ? Fragment
    : (props: React.PropsWithChildren) => {
        return (
          <div className="w-full m-auto block px-3 shadow-xl z-20 lg:px-9 py-3 fixed top-0 left-0 right-0 bg-zinc-50 dark:bg-zinc-900">
            <Row>
              <Col sm={8} md={9}>
                {props.children}
              </Col>
              <Col sm={4} md={3} className="flex flex-col justify-center">
                <ul className="w-full flex flex-row justify-end items-center gap-2">
                  <li className="size-11 rounded-full bg-zinc-200 text-zinc-900 dark:text-neutral-50 dark:bg-zinc-800 flex justify-center items-center">
                    A
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        )
      }

  return (
    <Container>
      <div
        ref={containerRef}
        className={cn(
          'w-full flex transition-all  gap-3',
          fixed ? 'flex-row items-center' : 'flex-col'
        )}
      >
        <strong
          className={cn(
            'dark:font-extrabold transition-all dark:text-zinc-50',
            fixed ? 'text-2xl' : 'text-4xl'
          )}
        >
          Pesquisar
        </strong>
        <div className="w-full shadow-lg px-4 py-2 flex flex-row items-center gap-3 text-zinc-900 dark:text-zinc-50 rounded-full bg-zinc-50 border-zinc-100 dark:bg-zinc-800 dark:border-zinc-700">
          <i>
            <FaSearch />
          </i>
          <input
            type="text"
            className="outline-none border-0 bg-transparent text-2xl dark:text-zinc-50 w-full"
            autoCapitalize="off"
            autoComplete="off"
            spellCheck={false}
          />
          <i>
            <FaEllipsisVertical />
          </i>
        </div>
      </div>
    </Container>
  )
}
