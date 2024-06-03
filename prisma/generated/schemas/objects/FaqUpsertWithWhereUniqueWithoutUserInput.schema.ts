import { z } from 'zod'
import { FaqWhereUniqueInputObjectSchema } from './FaqWhereUniqueInput.schema'
import { FaqUpdateWithoutUserInputObjectSchema } from './FaqUpdateWithoutUserInput.schema'
import { FaqUncheckedUpdateWithoutUserInputObjectSchema } from './FaqUncheckedUpdateWithoutUserInput.schema'
import { FaqCreateWithoutUserInputObjectSchema } from './FaqCreateWithoutUserInput.schema'
import { FaqUncheckedCreateWithoutUserInputObjectSchema } from './FaqUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => FaqWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => FaqUpdateWithoutUserInputObjectSchema),
      z.lazy(() => FaqUncheckedUpdateWithoutUserInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => FaqCreateWithoutUserInputObjectSchema),
      z.lazy(() => FaqUncheckedCreateWithoutUserInputObjectSchema)
    ])
  })
  .strict()

export const FaqUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
