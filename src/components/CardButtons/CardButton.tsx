import Link from 'next/link'
import { ButtonElement, ButtonWrapper } from './styles'

type CardButtonProps = {
  href?: string
}

type CardButtonComponent = React.FunctionComponent<
  React.PropsWithChildren &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    CardButtonProps
>

type AnchorElementComponent = React.FunctionComponent<
  React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>
>

export const CardButton: CardButtonComponent = ({ href = null, ...props }) => {
  const validHref = Boolean(typeof href === 'string' && /\S/.test(href))

  const AnchorElement: AnchorElementComponent = props => {
    return <Link href={href || '#'} {...props} />
  }

  const Button = validHref ? AnchorElement : ButtonElement

  return (
    <ButtonWrapper>
      <Button
        {...props}
        type="submit"
        role="button"
        className="text-zinc-800 dark:text-zinc-50 bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-500 dark:bg-[#151517] dark:hover:bg-[#1c1c1f] dark:active:bg-[#212125]"
      >
        {props.children}
      </Button>
    </ButtonWrapper>
  )
}
