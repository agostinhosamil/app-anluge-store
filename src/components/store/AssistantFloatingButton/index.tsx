'use client'

import TawkMessengerReact from '@tawk.to/tawk-messenger-react'

export const AssistantFloatingButton = () => {
  return (
    <TawkMessengerReact
      propertyId={String(process.env.NEXT_PUBLIC_TAWK_TO_PROPERTY_ID)}
      widgetId={String(process.env.NEXT_PUBLIC_TAWK_TO_WIDGET_ID)}
    />
  )
}
