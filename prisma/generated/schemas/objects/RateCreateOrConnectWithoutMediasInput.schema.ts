import { z } from 'zod'
import { RateWhereUniqueInputObjectSchema } from './RateWhereUniqueInput.schema'
import { RateCreateWithoutMediasInputObjectSchema } from './RateCreateWithoutMediasInput.schema'
import { RateUncheckedCreateWithoutMediasInputObjectSchema } from './RateUncheckedCreateWithoutMediasInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateCreateOrConnectWithoutMediasInput> = z
  .object({
    where: z.lazy(() => RateWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RateCreateWithoutMediasInputObjectSchema),
      z.lazy(() => RateUncheckedCreateWithoutMediasInputObjectSchema)
    ])
  })
  .strict()

export const RateCreateOrConnectWithoutMediasInputObjectSchema = Schema
