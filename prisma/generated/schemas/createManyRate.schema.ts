import { z } from 'zod'
import { RateCreateManyInputObjectSchema } from './objects/RateCreateManyInput.schema'

export const RateCreateManySchema = z.object({
  data: z.union([
    RateCreateManyInputObjectSchema,
    z.array(RateCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
})
