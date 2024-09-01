import { CreditCardIcon, LandmarkIcon } from 'lucide-react'
import { FaReact } from 'react-icons/fa6'

import { BankTransferForm } from './forms/BankTransferForm'
import { CreditCardForm } from './forms/CreditCardForm'
// import { GooglePayForm } from './forms/GooglePayForm'
import { MulticaixaExpressForm } from './forms/MulticaixaExpressForm'
// import { PaypalForm } from './forms/PaypalForm'

export type PaymentMethodListItemKey = `form:${string}`

export type PaymentMethodListItem = {
  form: React.ElementType
  icon: React.ElementType
  label: string
  key: PaymentMethodListItemKey
}

export type PaymentMethodList = Array<PaymentMethodListItem>

export const paymentMethodList: PaymentMethodList = [
  {
    form: CreditCardForm,
    icon: CreditCardIcon,
    label: 'Cartão de crédito',
    key: 'form:credit-card'
  },
  {
    form: BankTransferForm,
    icon: LandmarkIcon,
    label: 'Transferência Bancária',
    key: 'form:bank-transfer'
  },
  {
    form: MulticaixaExpressForm,
    icon: FaReact,
    label: 'Multicaixa Express',
    key: 'form:msx-express'
  }
  // {
  //   form: GooglePayForm,
  //   icon: FaGooglePay,
  //   label: 'Google Pay',
  //   key: 'form:google-pay'
  // },
  // {
  //   form: PaypalForm,
  //   icon: FaPaypal,
  //   label: 'Paypal',
  //   key: 'form:paypal'
  // }
]
