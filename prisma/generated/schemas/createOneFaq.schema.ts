import { z } from 'zod'
import { FaqCreateInputObjectSchema } from './objects/FaqCreateInput.schema'
import { FaqUncheckedCreateInputObjectSchema } from './objects/FaqUncheckedCreateInput.schema'

export const FaqCreateOneSchema = z.object({
  data: z.union([
    FaqCreateInputObjectSchema,
    FaqUncheckedCreateInputObjectSchema
  ])
})
