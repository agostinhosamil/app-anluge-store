import { z } from 'zod'
import { AdvertisingCreateInputObjectSchema } from './objects/AdvertisingCreateInput.schema'
import { AdvertisingUncheckedCreateInputObjectSchema } from './objects/AdvertisingUncheckedCreateInput.schema'

export const AdvertisingCreateOneSchema = z.object({
  data: z.union([
    AdvertisingCreateInputObjectSchema,
    AdvertisingUncheckedCreateInputObjectSchema
  ])
})
