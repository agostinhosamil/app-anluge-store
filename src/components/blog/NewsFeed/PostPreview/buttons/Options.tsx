import { Fragment } from 'react'
import { FaEllipsisVertical } from 'react-icons/fa6'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from 'ui@components/dropdown-menu'

import { useApp } from '@components/ApplicationContext'
import { Post } from '../types'

type OptionsButtonProps = {
  post: Post
}

type OptionsButtonComponent = React.FunctionComponent<OptionsButtonProps>

export const OptionsButton: OptionsButtonComponent = () => {
  const { alert } = useApp()

  return (
    <Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="bg-zinc-200  rounded-full text-sm size-9 border-0 outline-none dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 flex flex-row items-center justify-center"
          >
            <FaEllipsisVertical />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-zinc-50 dark:!border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50">
          <DropdownMenuLabel>Opções</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onSelect={() => alert('Open Profile', 'Mine here')}
            >
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Fragment>
  )
}
