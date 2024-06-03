import { z } from 'zod'
import { RateUpdateManyMutationInputObjectSchema } from './objects/RateUpdateManyMutationInput.schema'
import { RateWhereInputObjectSchema } from './objects/RateWhereInput.schema'

export const RateUpdateManySchema = z.object({
  data: RateUpdateManyMutationInputObjectSchema,
  where: RateWhereInputObjectSchema.optional()
})
