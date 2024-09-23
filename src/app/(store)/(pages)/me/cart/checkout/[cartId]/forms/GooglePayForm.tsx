import { Fragment } from 'react'

type GooglePayFormProps = object

type GooglePayFormComponent = React.FunctionComponent<GooglePayFormProps>

export const GooglePayForm: GooglePayFormComponent = () => {
  return (
    <Fragment>
      <h2 className="block w-full text-xl h-auto pb-3 font-normal text-zinc-800 dark:text-zinc-200 pr-16">
        Google Pay
      </h2>
      <p className="block w-full h-auto p-0 m-0 text-sm text-zinc-500 pr-16 dark:text-zinc-300">
        Complete seu pedido enviando o valor de pagamento para uma das
        coordenadas bancárias mencionadas abaixo.
      </p>
      <br />
      Google Pay Button
    </Fragment>
  )
}
