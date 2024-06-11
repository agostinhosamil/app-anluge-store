import Link from 'next/link'
import React from 'react'
import BootstrapContainer from 'react-bootstrap/Container'
import { FaClock, FaLocationArrow, FaPhone } from 'react-icons/fa6'

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
                className={
                  appModuleLink.key === props.module ? 'selected' : undefined
                }
                key={appModuleLinkIndex}
              >
                <Link href={appModuleLink.link}>{appModuleLink.label}</Link>
              </li>
            ))}
          </ul>
        </TopHeaderMenu>
        <TopHeaderData>
          <ul>
            <li>
              <span>Abertos de SEG-SEX</span>
            </li>
            <li>
              <i>
                <FaClock />
              </i>
              <span>8H-17H</span>
            </li>
            <li>
              <i>
                <FaPhone />
              </i>
              <span>+244 928 250 640</span>
            </li>
            <li>
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
