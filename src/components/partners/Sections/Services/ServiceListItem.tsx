'use client'

import { useEffect, useState } from 'react'
import { FaCogs } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'
import { Icon } from '~/components/Icon'

type ServiceListItemProps = {
  service: {
    title: string
    description: string
  }
}

type ServiceListItemComponent = React.FunctionComponent<ServiceListItemProps>

export const ServiceListItem: ServiceListItemComponent = ({ service }) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  useEffect(() => {
    const removeClassNameFromBodyElement = () =>
      document.body.classList.remove('overflow-y-hidden')

    if (expanded) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      removeClassNameFromBodyElement()
    }

    return () => removeClassNameFromBodyElement()
  }, [expanded])

  const cardContainerClickHandler = () => {
    setExpanded(true)
  }

  const closeButtonClickHandler = () => {
    setExpanded(false)
  }

  const resolveClassName = (className: string): string =>
    className.concat(expanded ? ' expanded' : '').trim()

  return (
    <li className={resolveClassName('')}>
      <div
        className={resolveClassName('service-card')}
        onClick={cardContainerClickHandler}
      >
        <strong>{service.title}</strong>
        <p>{service.description}</p>
        <div>
          <data>
            <FaCogs />
          </data>
          <data>
            <a href="#">
              <FaArrowRight />
            </a>
          </data>
        </div>
      </div>
      {expanded && (
        <div className="fixed right-9 top-5">
          <button
            type="button"
            className="outline-none border-0 bg-zinc-600 text-white rounded-full hover:bg-zinc-700 active:bg-zinc-800 size-10 flex flex-row items-center justify-center"
            onClick={closeButtonClickHandler}
          >
            <Icon name="FaX" />
          </button>
        </div>
      )}
    </li>
  )
}
