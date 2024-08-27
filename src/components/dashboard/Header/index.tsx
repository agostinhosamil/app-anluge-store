import Link from 'next/link'
import { forwardRef, Fragment, useEffect, useRef, useState } from 'react'
import { FaBars, FaHome, FaSearch, FaUserCog, FaUsersCog } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

import { path } from '~/utils'

import { cn } from '~/lib/utils'
import { CommandPrompt } from './CommandPrompt'
import { HeaderNavigationMenu } from './NavigationMenu'
import {
  CommandPromptContainer,
  Container,
  FixedContainer,
  HeaderShadowElement,
  LogoWrapper,
  MenuContainer,
  MenuListWrapper,
  SearchBoxContainer
} from './styles'

type FixedContainerProps = React.PropsWithRef<
  React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>
>

export const Header = () => {
  const [fixed, setFixed] = useState<boolean>(false)
  const [promptOpened, setPromptOpened] = useState<boolean>(false)

  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const windowScrollHandler = () => {
      if (!containerRef.current) {
        return
      }

      if (window.scrollY >= containerRef.current.offsetHeight + 10) {
        return !fixed && setFixed(true)
      }

      fixed && setFixed(false)
    }

    window.addEventListener('scroll', windowScrollHandler)

    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
    }
  })

  useEffect(() => {
    const removeClassName = () =>
      window.document.body.classList.remove('overflow-y-hidden')

    if (promptOpened) {
      window.document.body.classList.add('overflow-y-hidden')
    } else {
      removeClassName()
    }

    return removeClassName
  }, [promptOpened])

  const searchBoxButtonClickHandler = () => {
    setPromptOpened(true)
  }

  const commandPromptCloseButtonClickHandler = () => {
    setPromptOpened(false)
  }

  const ContainerElement = !fixed
    ? Container
    : forwardRef<HTMLElement>(function FixedContainerElement(
        props: FixedContainerProps,
        ref
      ) {
        return (
          <FixedContainer
            {...props}
            ref={ref}
            className={cn('bg-zinc-50 dark:bg-zinc-950', props.className)}
          />
        )
      })

  return (
    <Fragment>
      {fixed && <HeaderShadowElement />}
      <ContainerElement ref={containerRef} className="dark:text-zinc-50">
        <LogoWrapper>
          <div>
            <Link href={path('/')} target="_blank">
              <h3>Anluge</h3>
            </Link>
          </div>
        </LogoWrapper>
        <div className="flex flex-row items-center px-2">
          <HeaderNavigationMenu />
        </div>
        <MenuContainer>
          <SearchBoxContainer>
            <div className="hover:bg-zinc-50 transition-colors bg-zinc-50 border-zinc-400 dark:border-zinc-950 dark:bg-zinc-900">
              <button
                type="button"
                onClick={searchBoxButtonClickHandler}
                className="block w-full px-2 py-3 rounded-3xl outline-none border-0 bg-transparent"
              />
              <i>
                <FaSearch />
              </i>
            </div>
          </SearchBoxContainer>
          <MenuListWrapper>
            <ul className="text-zinc-950 dark:text-zinc-200">
              <li>
                <Link href="#">
                  <FaHome />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaUserCog />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaUsersCog />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaBars />
                </Link>
              </li>
            </ul>
          </MenuListWrapper>
        </MenuContainer>
      </ContainerElement>
      {promptOpened && (
        <CommandPromptContainer className="bg-zinc-50 dark:bg-zinc-900 !bg-opacity-85">
          <div className="fixed top-4 right-4">
            <button
              type="button"
              className="border-0 text-sm flex flex-row items-center justify-center outline-none rounded-full w-9 h-9 bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-900 dark:active:bg-zinc-950 dark:text-zinc-50 hover:bg-zinc-100 active:bg-zinc-200"
              onClick={commandPromptCloseButtonClickHandler}
            >
              <FaX />
            </button>
          </div>
          <CommandPrompt />
        </CommandPromptContainer>
      )}
    </Fragment>
  )
}
