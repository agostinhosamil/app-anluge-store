'use client'

import Link from 'next/link'
import React from 'react'
import BootstrapContainer from 'react-bootstrap/Container'
import { FaClock, FaLocationArrow, FaPhone } from 'react-icons/fa6'

import { cn } from '~/lib/utils'
import { appModuleLinks } from './appModuleLinks'
import { TopHeaderContainer, TopHeaderData, TopHeaderMenu } from './styles'
import { AppModuleKey } from './types'

type TopHeaderProps = {
  module?: AppModuleKey
}

type TopHeaderComponent = React.FunctionComponent<TopHeaderProps>

export const TopHeader: TopHeaderComponent = props => {
  return (
    <TopHeaderContainer>
      <BootstrapContainer>
        <TopHeaderMenu>
          <ul>
            {appModuleLinks.map((appModuleLink, appModuleLinkIndex) => (
              <li
                className={cn(
                  appModuleLink.key === props.module ? 'selected' : '',
                  '[&.selected_a]:bg-zinc-300 [&.selected_a]:text-zinc-800 dark:[&.selected_a]:bg-zinc-800 dark:[&.selected_a]:text-zinc-50'
                )}
                key={appModuleLinkIndex}
              >
                <Link
                  href={appModuleLink.link}
                  className="text-zinc-700 dark:text-zinc-300"
                >
                  {appModuleLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </TopHeaderMenu>
        <TopHeaderData>
          <ul>
            <li className="text-zinc-400 dark:text-zinc-200">
              <span>Abertos de SEG-SEX</span>
            </li>
            <li className="text-zinc-400 dark:text-zinc-200">
              <i>
                <FaClock />
              </i>
              <span>8H-17H</span>
            </li>
            <li className="text-zinc-400 dark:text-zinc-200">
              <i>
                <FaPhone />
              </i>
              <span>+244 928 250 640</span>
            </li>
            <li className="text-zinc-400 dark:text-zinc-200">
              <i>
                <FaLocationArrow />
              </i>
              <span>Luanda - Kinaxixi, Rua comandante Kwenha</span>
            </li>
          </ul>
        </TopHeaderData>
      </BootstrapContainer>
    </TopHeaderContainer>
  )
}
