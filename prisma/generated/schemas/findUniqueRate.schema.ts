import { z } from 'zod'
import { RateWhereUniqueInputObjectSchema } from './objects/RateWhereUniqueInput.schema'

export const RateFindUniqueSchema = z.object({
  where: RateWhereUniqueInputObjectSchema
})
