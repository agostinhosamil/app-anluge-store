import { z } from 'zod'
import { AdvertisingWhereUniqueInputObjectSchema } from './objects/AdvertisingWhereUniqueInput.schema'

export const AdvertisingDeleteOneSchema = z.object({
  where: AdvertisingWhereUniqueInputObjectSchema
})
