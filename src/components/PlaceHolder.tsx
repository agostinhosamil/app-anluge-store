'use client'

import { PlaceHolder as StyledPlaceHolder } from './styled'

export const PlaceHolder: React.FunctionComponent<
  React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
> = props => <StyledPlaceHolder {...props} />
