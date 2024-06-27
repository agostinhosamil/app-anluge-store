declare module '@tawk.to/tawk-messenger-react' {
  export type TawkMessengerReactProps = {
    propertyId: string
    widgetId: string
  }

  declare const TawkMessengerReact: React.FunctionComponent<TawkMessengerReactProps>

  export default TawkMessengerReact
}
