import { z } from 'zod'
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema'

export const FaqDeleteOneSchema = z.object({
  where: FaqWhereUniqueInputObjectSchema
})
