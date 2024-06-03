import { z } from 'zod'
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'
import { OrderUpdateWithoutCartInputObjectSchema } from './OrderUpdateWithoutCartInput.schema'
import { OrderUncheckedUpdateWithoutCartInputObjectSchema } from './OrderUncheckedUpdateWithoutCartInput.schema'
import { OrderCreateWithoutCartInputObjectSchema } from './OrderCreateWithoutCartInput.schema'
import { OrderUncheckedCreateWithoutCartInputObjectSchema } from './OrderUncheckedCreateWithoutCartInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutCartInput> = z
  .object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => OrderUpdateWithoutCartInputObjectSchema),
      z.lazy(() => OrderUncheckedUpdateWithoutCartInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => OrderCreateWithoutCartInputObjectSchema),
      z.lazy(() => OrderUncheckedCreateWithoutCartInputObjectSchema)
    ])
  })
  .strict()

export const OrderUpsertWithWhereUniqueWithoutCartInputObjectSchema = Schema
