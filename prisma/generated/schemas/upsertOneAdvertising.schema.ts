import { z } from 'zod'
import { AdvertisingWhereUniqueInputObjectSchema } from './objects/AdvertisingWhereUniqueInput.schema'
import { AdvertisingCreateInputObjectSchema } from './objects/AdvertisingCreateInput.schema'
import { AdvertisingUncheckedCreateInputObjectSchema } from './objects/AdvertisingUncheckedCreateInput.schema'
import { AdvertisingUpdateInputObjectSchema } from './objects/AdvertisingUpdateInput.schema'
import { AdvertisingUncheckedUpdateInputObjectSchema } from './objects/AdvertisingUncheckedUpdateInput.schema'

export const AdvertisingUpsertSchema = z.object({
  where: AdvertisingWhereUniqueInputObjectSchema,
  create: z.union([
    AdvertisingCreateInputObjectSchema,
    AdvertisingUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    AdvertisingUpdateInputObjectSchema,
    AdvertisingUncheckedUpdateInputObjectSchema
  ])
})
