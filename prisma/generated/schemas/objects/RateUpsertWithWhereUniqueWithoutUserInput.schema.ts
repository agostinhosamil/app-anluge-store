import { z } from 'zod'
import { RateWhereUniqueInputObjectSchema } from './RateWhereUniqueInput.schema'
import { RateUpdateWithoutUserInputObjectSchema } from './RateUpdateWithoutUserInput.schema'
import { RateUncheckedUpdateWithoutUserInputObjectSchema } from './RateUncheckedUpdateWithoutUserInput.schema'
import { RateCreateWithoutUserInputObjectSchema } from './RateCreateWithoutUserInput.schema'
import { RateUncheckedCreateWithoutUserInputObjectSchema } from './RateUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => RateWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RateUpdateWithoutUserInputObjectSchema),
      z.lazy(() => RateUncheckedUpdateWithoutUserInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => RateCreateWithoutUserInputObjectSchema),
      z.lazy(() => RateUncheckedCreateWithoutUserInputObjectSchema)
    ])
  })
  .strict()

export const RateUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
