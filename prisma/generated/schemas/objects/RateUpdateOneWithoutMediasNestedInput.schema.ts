import { z } from 'zod'
import { RateCreateWithoutMediasInputObjectSchema } from './RateCreateWithoutMediasInput.schema'
import { RateUncheckedCreateWithoutMediasInputObjectSchema } from './RateUncheckedCreateWithoutMediasInput.schema'
import { RateCreateOrConnectWithoutMediasInputObjectSchema } from './RateCreateOrConnectWithoutMediasInput.schema'
import { RateUpsertWithoutMediasInputObjectSchema } from './RateUpsertWithoutMediasInput.schema'
import { RateWhereUniqueInputObjectSchema } from './RateWhereUniqueInput.schema'
import { RateUpdateWithoutMediasInputObjectSchema } from './RateUpdateWithoutMediasInput.schema'
import { RateUncheckedUpdateWithoutMediasInputObjectSchema } from './RateUncheckedUpdateWithoutMediasInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateUpdateOneWithoutMediasNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RateCreateWithoutMediasInputObjectSchema),
        z.lazy(() => RateUncheckedCreateWithoutMediasInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RateCreateOrConnectWithoutMediasInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => RateUpsertWithoutMediasInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => RateWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => RateUpdateWithoutMediasInputObjectSchema),
        z.lazy(() => RateUncheckedUpdateWithoutMediasInputObjectSchema)
      ])
      .optional()
  })
  .strict()

export const RateUpdateOneWithoutMediasNestedInputObjectSchema = Schema
