import { Fragment } from 'react'

import { CopyableText } from '@components/CopyableText'
import { DropZone } from '@components/DropZone'

type BankAccount = {
  id: number
  bank: {
    name: string
  }
  name: string
  nationalNumber: string
  internationalNumber: string
}

export const BankTransferForm = () => {
  const bankAccounts: Array<BankAccount> = [
    // {
    //   id: 1,
    //   name: 'Anluge - Comércio e Prestação de Serviço',
    //   internationalNumber: '00060000889489388499',
    //   nationalNumber: '12299300389940',
    //   bank: {
    //     name: 'Banco de Fomento Angola'
    //   }
    // },

    {
      id: 2,
      name: 'Anluge - Comércio e Prestação de Serviço',
      internationalNumber: 'AO06 0051.0000.9107.0887.1017.5',
      nationalNumber: '9107.0887.1017',
      bank: {
        name: 'Banco BIC'
      }
    }
  ]

  return (
    <Fragment>
      <h2 className="block w-full text-xl h-auto pb-3 font-normal text-zinc-800 dark:text-zinc-200 pr-16">
        Dados de pagamento
      </h2>
      <p className="block w-full h-auto p-0 m-0 text-sm text-zinc-500 pr-16 dark:text-zinc-300">
        Complete seu pedido enviando o valor de pagamento para uma das
        coordenadas bancárias mencionadas abaixo.
        <br />
        Após fazer a transferência, deverá enviar o comprovativo gerado pelo
        aplicativo do seu banco ou uma foto do comprovativo do ATM pelo campo
        abaixo.
      </p>
      <br />
      <ul className="w-full flex flex-col gap-3">
        {bankAccounts.map(bankAccount => (
          <li
            key={bankAccount.id}
            className="text-zinc-800 dark:text-zinc-200 flex flex-col gap-y-3 bg-zinc-400 dark:bg-[#191f17] rounded-2xl p-4"
          >
            <h5 className="mb-2 text-2xl font-extrabold text-white">
              {bankAccount.bank.name}
            </h5>
            <p>Titular da conta: {bankAccount.name}</p>
            <p>
              Número nacional bancário (INB):{' '}
              <CopyableText>
                <span>{bankAccount.nationalNumber}</span>
              </CopyableText>
            </p>
            <p>
              Número internacional bancário:{' '}
              <CopyableText>
                <span>{bankAccount.internationalNumber}</span>
              </CopyableText>
            </p>
          </li>
        ))}
      </ul>
      <div className="block w-full pt-3 -mb-3">
        <strong className="text-zinc-800 dark:text-zinc-200 block pb-3">
          Comprovativo de transferência
        </strong>
        <DropZone height={150} />
      </div>
    </Fragment>
  )
}
