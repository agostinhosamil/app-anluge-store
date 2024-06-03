import { z } from 'zod'
import { OrderCreateWithoutCartInputObjectSchema } from './OrderCreateWithoutCartInput.schema'
import { OrderUncheckedCreateWithoutCartInputObjectSchema } from './OrderUncheckedCreateWithoutCartInput.schema'
import { OrderCreateOrConnectWithoutCartInputObjectSchema } from './OrderCreateOrConnectWithoutCartInput.schema'
import { OrderCreateManyCartInputEnvelopeObjectSchema } from './OrderCreateManyCartInputEnvelope.schema'
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderCreateNestedManyWithoutCartInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrderCreateWithoutCartInputObjectSchema),
        z.lazy(() => OrderCreateWithoutCartInputObjectSchema).array(),
        z.lazy(() => OrderUncheckedCreateWithoutCartInputObjectSchema),
        z.lazy(() => OrderUncheckedCreateWithoutCartInputObjectSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OrderCreateOrConnectWithoutCartInputObjectSchema),
        z.lazy(() => OrderCreateOrConnectWithoutCartInputObjectSchema).array()
      ])
      .optional(),
    createMany: z
      .lazy(() => OrderCreateManyCartInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => OrderWhereUniqueInputObjectSchema),
        z.lazy(() => OrderWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const OrderCreateNestedManyWithoutCartInputObjectSchema = Schema
