import { createContext } from 'react'
import { RichTextFieldContextProps } from './types'

export const RichTextFieldContext = createContext<RichTextFieldContextProps>(
  {} as RichTextFieldContextProps
)

type RichTextFieldContextProviderProps = {
  value: RichTextFieldContextProps
}

type RichTextFieldContextProviderComponent = React.FunctionComponent<
  React.PropsWithChildren & RichTextFieldContextProviderProps
>

export const RichTextFieldContextProvider: RichTextFieldContextProviderComponent =
  ({ value, ...props }) => {
    return (
      <RichTextFieldContext.Provider value={value}>
        {props.children}
      </RichTextFieldContext.Provider>
    )
  }
