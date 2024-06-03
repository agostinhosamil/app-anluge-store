import { z } from 'zod'
import { OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema'
import { OrderUpdateManyMutationInputObjectSchema } from './OrderUpdateManyMutationInput.schema'
import { OrderUncheckedUpdateManyWithoutOrderInputObjectSchema } from './OrderUncheckedUpdateManyWithoutOrderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutProductInput> = z
  .object({
    where: z.lazy(() => OrderScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => OrderUpdateManyMutationInputObjectSchema),
      z.lazy(() => OrderUncheckedUpdateManyWithoutOrderInputObjectSchema)
    ])
  })
  .strict()

export const OrderUpdateManyWithWhereWithoutProductInputObjectSchema = Schema
