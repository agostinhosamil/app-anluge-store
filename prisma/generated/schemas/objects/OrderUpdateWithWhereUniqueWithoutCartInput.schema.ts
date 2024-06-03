import { z } from 'zod'
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'
import { OrderUpdateWithoutCartInputObjectSchema } from './OrderUpdateWithoutCartInput.schema'
import { OrderUncheckedUpdateWithoutCartInputObjectSchema } from './OrderUncheckedUpdateWithoutCartInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutCartInput> = z
  .object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => OrderUpdateWithoutCartInputObjectSchema),
      z.lazy(() => OrderUncheckedUpdateWithoutCartInputObjectSchema)
    ])
  })
  .strict()

export const OrderUpdateWithWhereUniqueWithoutCartInputObjectSchema = Schema
