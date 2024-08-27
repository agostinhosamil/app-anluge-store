import * as Icons from 'react-icons/fa6'

import { IconComponent } from './types'

export const IconElement: IconComponent = ({ name, ...props }) => {
  const Icon = Icons[name]

  return (
    <button
      {...props}
      type="button"
      role="button"
      className="hover:bg-zinc-300 active:bg-zinc-400 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
    >
      <i className="text-zinc-600 dark:text-zinc-300">
        <Icon />
      </i>
    </button>
  )
}
