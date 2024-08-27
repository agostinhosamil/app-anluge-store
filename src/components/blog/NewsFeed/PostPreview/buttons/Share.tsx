import { Fragment, useState } from 'react'
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaShare,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa6'
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share'

import { Dialog } from '@components/Dialog'

import { Post } from '../types'

type ShareButtonProps = {
  post: Post
}

type SocialMediaShareButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  url: string
}

type ShareButtonComponent = React.FunctionComponent<ShareButtonProps>

export const ShareButton: ShareButtonComponent = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false)

  const dialogCloseHandler = () => {
    setShowDialog(false)
  }

  const shareButtonClickHandler = () => {
    setShowDialog(true)
  }

  const shareButtons = [
    {
      icon: FaFacebook,
      label: 'Facebook',
      color: '#025aa7',
      element: FacebookShareButton
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      color: '#00bfff',
      element: TwitterShareButton
    },
    {
      icon: FaLinkedin,
      label: 'Linkedin',
      color: '#0377b9',
      element: LinkedinShareButton
    },
    {
      icon: FaPinterest,
      label: 'Pinterest',
      color: '#0377b9',
      element: ({ children, ...props }: SocialMediaShareButtonProps) => (
        <PinterestShareButton {...props} media="as">
          {children}
        </PinterestShareButton>
      )
    },
    {
      icon: FaWhatsapp,
      label: 'Whatsapp',
      color: '#00ba5c',
      element: WhatsappShareButton
    }
  ]

  return (
    <Fragment>
      <button
        type="button"
        className="bg-zinc-200 text-sm rounded-full size-9 border-0 outline-none dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 flex flex-row items-center justify-center"
        onClick={shareButtonClickHandler}
      >
        <FaShare />
      </button>
      <Dialog
        show={showDialog}
        onClose={dialogCloseHandler}
        size="medium"
        title="Partilhar publicação"
      >
        <div className="w-full flex flex-col gap-2">
          <ul className="w-full flex flex-row gap-3 py-4 flex-wrap justify-center">
            {shareButtons.map(shareButton => (
              <li key={shareButton.label} className="size-max rounded-full">
                <shareButton.element url="a" className="size-max rounded-full">
                  <i
                    title={`Partilhar publicação no ${shareButton.label}`}
                    className="outline-none border-0 rounded-full size-10 lg:size-16 lg:text-2xl flex flex-row justify-center items-center bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 active:scale-125 transition-transform dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-600 cursor-pointer"
                  >
                    <shareButton.icon color={shareButton.color} />
                  </i>
                </shareButton.element>
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </Fragment>
  )
}
