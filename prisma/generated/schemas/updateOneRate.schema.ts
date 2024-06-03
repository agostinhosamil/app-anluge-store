import { z } from 'zod'
import { RateUpdateInputObjectSchema } from './objects/RateUpdateInput.schema'
import { RateUncheckedUpdateInputObjectSchema } from './objects/RateUncheckedUpdateInput.schema'
import { RateWhereUniqueInputObjectSchema } from './objects/RateWhereUniqueInput.schema'

export const RateUpdateOneSchema = z.object({
  data: z.union([
    RateUpdateInputObjectSchema,
    RateUncheckedUpdateInputObjectSchema
  ]),
  where: RateWhereUniqueInputObjectSchema
})
