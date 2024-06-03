import { z } from 'zod'
import { RateWhereUniqueInputObjectSchema } from './RateWhereUniqueInput.schema'
import { RateCreateWithoutUserInputObjectSchema } from './RateCreateWithoutUserInput.schema'
import { RateUncheckedCreateWithoutUserInputObjectSchema } from './RateUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => RateWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RateCreateWithoutUserInputObjectSchema),
      z.lazy(() => RateUncheckedCreateWithoutUserInputObjectSchema)
    ])
  })
  .strict()

export const RateCreateOrConnectWithoutUserInputObjectSchema = Schema
