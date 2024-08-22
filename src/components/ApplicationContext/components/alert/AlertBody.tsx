import { noEmpty } from '~/utils'

import { AlertButtons, AlertDialogProps } from '.'
import { AlertUtilButtonsList } from '../../types'

type AlertBodyProps = AlertDialogProps & {
  closeDialog: (alertResponse: string) => void
}

type AlertBodyComponent = React.FunctionComponent<AlertBodyProps>

function getButtonProps<ButtonKey extends keyof AlertButtons>(
  buttonKey: ButtonKey
): AlertButtons[ButtonKey] {
  buttonKey = buttonKey.toLowerCase().replace(/^(Buttons\.)/i, '') as ButtonKey

  return AlertButtons[buttonKey]
}

export const AlertBody: AlertBodyComponent = ({ options, ...props }) => {
  const alertButtonsList: AlertUtilButtonsList =
    options && options.buttons instanceof Array
      ? options.buttons
      : ['Buttons.Ok']

  return (
    <div className="w-full flex flex-col gap-3">
      {noEmpty(props.title) && (
        <h5 className="text-base select-none pointer-events-none font-extrabold text-zinc-900">
          {props.title}
        </h5>
      )}
      <span className="select-none pointer-events-none">{props.message}</span>
      <div className="w-full flex flex-row gap-2 justify-end items-center">
        {alertButtonsList.map((buttonKey, buttonKeyIndex) => {
          const { label, style } = getButtonProps(
            buttonKey as keyof AlertButtons
          )

          return (
            <button
              key={buttonKeyIndex}
              className={style.concat(
                ' select-none outline-none border-0 text-sm rounded-lg py-2 px-3'
              )}
              onClick={() =>
                props.closeDialog(
                  buttonKey.replace(/^(Buttons\.)/i, 'AlertResponse.')
                )
              }
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
