import { z } from 'zod'
import { OrderCreateManyInputObjectSchema } from './objects/OrderCreateManyInput.schema'

export const OrderCreateManySchema = z.object({
  data: z.union([
    OrderCreateManyInputObjectSchema,
    z.array(OrderCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
})
