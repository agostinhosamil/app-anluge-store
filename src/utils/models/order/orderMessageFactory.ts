import { noEmpty } from '~/utils'
import { OrderFormDataObject } from '.'

type User = OrderFormDataObject['user']
type Orders = OrderFormDataObject['orders']

type OrderMessageFactoryProps = {
  user: User
  orders: Orders
}

export const orderMessageFactory = ({
  user,
  orders
}: OrderMessageFactoryProps) =>
  encodeURIComponent(
    `
      Assunto: Solicitação de Orçamento para Lista de Produtos

      Prezados,

      Espero que estejam bem. Meu nome é ${user.name}. Gostaria de solicitar um orçamento para os seguintes produtos:

      ${orders.map(order => `- [${order.productCode}] ${order.productName} (${order.quantity})`).join('\n')}
      ...
      Por favor, incluam no orçamento o preço unitário, quaisquer descontos disponíveis para compra em volume.

      Além disso, se houver produtos similares ou recomendações que vocês acreditem serem adequados às nossas necessidades, por favor, não hesitem em incluí-los no orçamento.

      Fico à disposição para fornecer qualquer informação adicional necessária. Por favor, enviem o orçamento para o meu e-mail [Seu endereço de e-mail] até [Data limite para entrega do orçamento].

      Agradecemos antecipadamente pela atenção e aguardamos ansiosos pela sua resposta.

      Atenciosamente,
      ${user.name}
      [${user.email}]
      [${user.phone}]
    `
      .trim()
      .split(/\n/)
      .map(line => (noEmpty(line) ? line.trim() : line))
      .join('\n')
  )
