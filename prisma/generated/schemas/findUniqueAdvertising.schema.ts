import { z } from 'zod'
import { AdvertisingWhereUniqueInputObjectSchema } from './objects/AdvertisingWhereUniqueInput.schema'

export const AdvertisingFindUniqueSchema = z.object({
  where: AdvertisingWhereUniqueInputObjectSchema
})
