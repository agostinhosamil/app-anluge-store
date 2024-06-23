import { z } from 'zod'

export const DefineUserPasswordFormDataObjectSchema = z.object({
  user: z
    .object({
      password: z
        .string()
        .min(8, 'A palavra passe não pode ser tão curta')
        .max(80, 'A palavra passe não pode ser tão longa'),
      passwordConfirmation: z.string()
    })
    .refine(
      user => user.password === user.passwordConfirmation,
      'As palavras passes não são iguais'
    )
})

export type DefineUserPasswordFormDataObject = z.infer<
  typeof DefineUserPasswordFormDataObjectSchema
>
