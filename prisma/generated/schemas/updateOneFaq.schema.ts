import { z } from 'zod'
import { FaqUpdateInputObjectSchema } from './objects/FaqUpdateInput.schema'
import { FaqUncheckedUpdateInputObjectSchema } from './objects/FaqUncheckedUpdateInput.schema'
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema'

export const FaqUpdateOneSchema = z.object({
  data: z.union([
    FaqUpdateInputObjectSchema,
    FaqUncheckedUpdateInputObjectSchema
  ]),
  where: FaqWhereUniqueInputObjectSchema
})
