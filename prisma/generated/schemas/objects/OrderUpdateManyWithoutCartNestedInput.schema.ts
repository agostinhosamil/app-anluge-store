import { z } from 'zod'
import { OrderCreateWithoutCartInputObjectSchema } from './OrderCreateWithoutCartInput.schema'
import { OrderUncheckedCreateWithoutCartInputObjectSchema } from './OrderUncheckedCreateWithoutCartInput.schema'
import { OrderCreateOrConnectWithoutCartInputObjectSchema } from './OrderCreateOrConnectWithoutCartInput.schema'
import { OrderUpsertWithWhereUniqueWithoutCartInputObjectSchema } from './OrderUpsertWithWhereUniqueWithoutCartInput.schema'
import { OrderCreateManyCartInputEnvelopeObjectSchema } from './OrderCreateManyCartInputEnvelope.schema'
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'
import { OrderUpdateWithWhereUniqueWithoutCartInputObjectSchema } from './OrderUpdateWithWhereUniqueWithoutCartInput.schema'
import { OrderUpdateManyWithWhereWithoutCartInputObjectSchema } from './OrderUpdateManyWithWhereWithoutCartInput.schema'
import { OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderUpdateManyWithoutCartNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => OrderUpsertWithWhereUniqueWithoutCartInputObjectSchema),
        z
          .lazy(() => OrderUpsertWithWhereUniqueWithoutCartInputObjectSchema)
          .array()
      ])
      .optional(),
    createMany: z
      .lazy(() => OrderCreateManyCartInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => OrderWhereUniqueInputObjectSchema),
        z.lazy(() => OrderWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => OrderWhereUniqueInputObjectSchema),
        z.lazy(() => OrderWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => OrderWhereUniqueInputObjectSchema),
        z.lazy(() => OrderWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => OrderWhereUniqueInputObjectSchema),
        z.lazy(() => OrderWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => OrderUpdateWithWhereUniqueWithoutCartInputObjectSchema),
        z
          .lazy(() => OrderUpdateWithWhereUniqueWithoutCartInputObjectSchema)
          .array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => OrderUpdateManyWithWhereWithoutCartInputObjectSchema),
        z
          .lazy(() => OrderUpdateManyWithWhereWithoutCartInputObjectSchema)
          .array()
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => OrderScalarWhereInputObjectSchema),
        z.lazy(() => OrderScalarWhereInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const OrderUpdateManyWithoutCartNestedInputObjectSchema = Schema
