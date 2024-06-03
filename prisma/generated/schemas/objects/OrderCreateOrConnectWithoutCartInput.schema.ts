import { z } from 'zod'
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'
import { OrderCreateWithoutCartInputObjectSchema } from './OrderCreateWithoutCartInput.schema'
import { OrderUncheckedCreateWithoutCartInputObjectSchema } from './OrderUncheckedCreateWithoutCartInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderCreateOrConnectWithoutCartInput> = z
  .object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrderCreateWithoutCartInputObjectSchema),
      z.lazy(() => OrderUncheckedCreateWithoutCartInputObjectSchema)
    ])
  })
  .strict()

export const OrderCreateOrConnectWithoutCartInputObjectSchema = Schema
