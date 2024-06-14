import { z } from 'zod'

export const OrderFormDataObjectSchema = z.object({
  user: z
    .object({
      name: z.string().min(5).max(80),
      email: z.string().min(5).max(80).email(),
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
        }),
      password: z.string().min(8).max(80),
      passwordConfirmation: z.string()
    })
    .refine(user => user.password === user.passwordConfirmation),
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
