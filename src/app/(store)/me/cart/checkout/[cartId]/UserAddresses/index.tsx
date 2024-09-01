import { useState } from 'react'
import { range } from '~/utils'
import { UserAddress } from './UserAddress'

type UserAddressesProps = {
  onChange?: (userAddressId: string) => void
}

type UserAddressesComponent = React.FunctionComponent<UserAddressesProps>

export const UserAddresses: UserAddressesComponent = props => {
  const [selectedAddress, setSelectedAddress] = useState<string>(':none')

  const randomId = 'generateRandomId()'

  return (
    <ul className="w-full flex flex-col gap-2">
      {range(10).map(i => (
        <UserAddress
          key={i}
          id={String(i)}
          label={`Meu Endereço nº ${i}`}
          selected={selectedAddress == String(i)}
          onClick={() => {
            const value = String(i)
            setSelectedAddress(value)

            if (typeof props.onChange === 'function') {
              props.onChange(value)
            }
          }}
        />
      ))}
      <UserAddress
        key={randomId}
        id={randomId}
        label="Outro"
        selected={selectedAddress == ':none'}
        onClick={() => {
          const value = ':none'
          setSelectedAddress(value)

          if (typeof props.onChange === 'function') {
            props.onChange(value)
          }
        }}
      />
    </ul>
  )
}
