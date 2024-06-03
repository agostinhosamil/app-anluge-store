import { z } from 'zod'
import { AdvertisingUpdateManyMutationInputObjectSchema } from './objects/AdvertisingUpdateManyMutationInput.schema'
import { AdvertisingWhereInputObjectSchema } from './objects/AdvertisingWhereInput.schema'

export const AdvertisingUpdateManySchema = z.object({
  data: AdvertisingUpdateManyMutationInputObjectSchema,
  where: AdvertisingWhereInputObjectSchema.optional()
})
