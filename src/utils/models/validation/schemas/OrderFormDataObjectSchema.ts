import { z } from 'zod'

export const OrderFormDataObjectSchema = z.object({
  user: z
    .object({
      id: z.string().nullable().optional(),
      name: z
        .string()
        .min(5, 'O nome não pode ser tão curto')
        .max(80, 'O nome não pode ser tão longo'),
      email: z
        .string()
        .min(5)
        .max(80)
        .email('Precisa fornecer um endereço de email válido'),
      phone: z
        .string()
        .min(5)
        .max(80)
        .transform(phone => {
          const re = /\s+/

          return phone
            .split(re)
            .filter(slice => !re.test(slice))
            .join('')
        })
        .refine(phone => {
          const phoneRe = /^(((\+?244)?9[0-9]{8}))$/
          return phoneRe.test(phone)
        }, 'Precisa fornecer um número de telefone angolano válido'),
      password: z.string().min(8).max(80),
      passwordConfirmation: z.string().optional()
    })
    .refine(
      user =>
        typeof user.passwordConfirmation === 'undefined'
          ? true
          : user.password === user.passwordConfirmation,
      'As palavras passes não são iguais'
    ),
  orders: z
    .array(
      z.object({
        productId: z.string(),
        quantity: z
          .number()
          .min(1)
          .transform(quantity => Number(quantity)),
        productName: z.string(),
        productCode: z.string()
      })
    )
    .min(1)
})

export type OrderFormDataObject = z.infer<typeof OrderFormDataObjectSchema>
