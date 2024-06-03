import { z } from 'zod'
import { RateWhereInputObjectSchema } from './objects/RateWhereInput.schema'

export const RateDeleteManySchema = z.object({
  where: RateWhereInputObjectSchema.optional()
})
