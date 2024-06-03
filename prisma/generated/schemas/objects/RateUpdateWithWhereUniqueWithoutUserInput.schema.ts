import { z } from 'zod'
import { RateWhereUniqueInputObjectSchema } from './RateWhereUniqueInput.schema'
import { RateUpdateWithoutUserInputObjectSchema } from './RateUpdateWithoutUserInput.schema'
import { RateUncheckedUpdateWithoutUserInputObjectSchema } from './RateUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => RateWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RateUpdateWithoutUserInputObjectSchema),
      z.lazy(() => RateUncheckedUpdateWithoutUserInputObjectSchema)
    ])
  })
  .strict()

export const RateUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
