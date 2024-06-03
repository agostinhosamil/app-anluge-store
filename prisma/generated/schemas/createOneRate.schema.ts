import { z } from 'zod'
import { RateCreateInputObjectSchema } from './objects/RateCreateInput.schema'
import { RateUncheckedCreateInputObjectSchema } from './objects/RateUncheckedCreateInput.schema'

export const RateCreateOneSchema = z.object({
  data: z.union([
    RateCreateInputObjectSchema,
    RateUncheckedCreateInputObjectSchema
  ])
})
