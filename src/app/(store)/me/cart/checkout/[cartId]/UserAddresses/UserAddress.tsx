import { cn } from '~/lib/utils'

type UserAddressProps = {
  id: number | string
  label: string
  selected?: boolean
}

type UserAddressComponent = React.FunctionComponent<
  React.LabelHTMLAttributes<HTMLLabelElement> & UserAddressProps
>

export const UserAddress: UserAddressComponent = props => {
  return (
    <li className="w-full block" id={`data-user-address:${props.id}`}>
      <label
        {...props}
        className="w-full flex flex-row gap-2 items-center p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 cursor-pointer hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-800 [&>i]:dark:hover:border-zinc-700 [&>i]:dark:active:border-zinc-800 dark:active:bg-zinc-700 dark:text-zinc-300 active:scale-105 transition-transform"
      >
        <i
          className={cn(
            'block size-5 rounded-full border-solid border-[1px] border-zinc-400 dark:border-zinc-800',
            props.selected ? 'bg-blue-500 border-blue-900' : null
          )}
        />
        <span className="text-sm font-medium select-none">{props.label}</span>
      </label>
    </li>
  )
}
