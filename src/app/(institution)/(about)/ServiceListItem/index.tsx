'use client'

import { Service } from '@prisma/client'
import { FaDesktop, FaEye } from 'react-icons/fa6'

type ServiceListItemProps = {
  service: Service
}

type ServiceListItemComponent = React.FunctionComponent<ServiceListItemProps>

export const ServiceListItem: ServiceListItemComponent = ({ service }) => {
  return (
    <li className="size-full flex-grow md:w-1/3 lg:w-1/3 xl:w-1/4 p-2 rounded-xl">
      <div className="w-full h-[428px] flex flex-col justify-between gap-4 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-900 rounded-xl py-8 px-5">
        <div className="w-full flex flex-col gap-4">
          <i>
            <FaDesktop size={60} />
          </i>
          <strong className="line-clamp-3">{service.title}</strong>
          <p className="line-clamp-5">{service.description}</p>
        </div>

        <ol className="flex w-full flex-row gap-2 justify-center items-center">
          <li>
            <button
              type="button"
              role="button"
              className="rounded-xl border-0 outline-none bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700 text-zinc-900 dark:text-zinc-50 py-2 px-3"
            >
              <span>Contratar</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              role="button"
              className="rounded-xl bg-transparent outline-none border-solid border-2 box-border border-zinc-200 hover:border-zinc-300 active:border-zinc-400 dark:border-blue-500 dark:hover:border-blue-600 dark:active:border-blue-700 text-zinc-900 dark:text-blue-600 p-[3px_12px_8px]"
            >
              <FaEye />
            </button>
          </li>
        </ol>
      </div>
    </li>
  )
}
