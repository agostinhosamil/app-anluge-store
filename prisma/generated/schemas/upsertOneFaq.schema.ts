import { z } from 'zod'
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema'
import { FaqCreateInputObjectSchema } from './objects/FaqCreateInput.schema'
import { FaqUncheckedCreateInputObjectSchema } from './objects/FaqUncheckedCreateInput.schema'
import { FaqUpdateInputObjectSchema } from './objects/FaqUpdateInput.schema'
import { FaqUncheckedUpdateInputObjectSchema } from './objects/FaqUncheckedUpdateInput.schema'

export const FaqUpsertSchema = z.object({
  where: FaqWhereUniqueInputObjectSchema,
  create: z.union([
    FaqCreateInputObjectSchema,
    FaqUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    FaqUpdateInputObjectSchema,
    FaqUncheckedUpdateInputObjectSchema
  ])
})
