import { z } from 'zod'
import { AdvertisingWhereInputObjectSchema } from './objects/AdvertisingWhereInput.schema'

export const AdvertisingDeleteManySchema = z.object({
  where: AdvertisingWhereInputObjectSchema.optional()
})
