import { z } from 'zod'
import { RateCreateWithoutMediasInputObjectSchema } from './RateCreateWithoutMediasInput.schema'
import { RateUncheckedCreateWithoutMediasInputObjectSchema } from './RateUncheckedCreateWithoutMediasInput.schema'
import { RateCreateOrConnectWithoutMediasInputObjectSchema } from './RateCreateOrConnectWithoutMediasInput.schema'
import { RateWhereUniqueInputObjectSchema } from './RateWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateCreateNestedOneWithoutMediasInput> = z
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
    connect: z.lazy(() => RateWhereUniqueInputObjectSchema).optional()
  })
  .strict()

export const RateCreateNestedOneWithoutMediasInputObjectSchema = Schema
