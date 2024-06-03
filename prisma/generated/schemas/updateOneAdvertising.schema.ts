import { z } from 'zod'
import { AdvertisingUpdateInputObjectSchema } from './objects/AdvertisingUpdateInput.schema'
import { AdvertisingUncheckedUpdateInputObjectSchema } from './objects/AdvertisingUncheckedUpdateInput.schema'
import { AdvertisingWhereUniqueInputObjectSchema } from './objects/AdvertisingWhereUniqueInput.schema'

export const AdvertisingUpdateOneSchema = z.object({
  data: z.union([
    AdvertisingUpdateInputObjectSchema,
    AdvertisingUncheckedUpdateInputObjectSchema
  ]),
  where: AdvertisingWhereUniqueInputObjectSchema
})
