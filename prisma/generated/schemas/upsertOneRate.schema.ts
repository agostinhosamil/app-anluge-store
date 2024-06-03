import { z } from 'zod'
import { RateWhereUniqueInputObjectSchema } from './objects/RateWhereUniqueInput.schema'
import { RateCreateInputObjectSchema } from './objects/RateCreateInput.schema'
import { RateUncheckedCreateInputObjectSchema } from './objects/RateUncheckedCreateInput.schema'
import { RateUpdateInputObjectSchema } from './objects/RateUpdateInput.schema'
import { RateUncheckedUpdateInputObjectSchema } from './objects/RateUncheckedUpdateInput.schema'

export const RateUpsertSchema = z.object({
  where: RateWhereUniqueInputObjectSchema,
  create: z.union([
    RateCreateInputObjectSchema,
    RateUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    RateUpdateInputObjectSchema,
    RateUncheckedUpdateInputObjectSchema
  ])
})
