import { z } from 'zod'
import { AdvertisingCreateManyInputObjectSchema } from './objects/AdvertisingCreateManyInput.schema'

export const AdvertisingCreateManySchema = z.object({
  data: z.union([
    AdvertisingCreateManyInputObjectSchema,
    z.array(AdvertisingCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
})
