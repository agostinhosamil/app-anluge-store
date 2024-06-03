import { z } from 'zod'
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema'

export const FaqFindUniqueSchema = z.object({
  where: FaqWhereUniqueInputObjectSchema
})
