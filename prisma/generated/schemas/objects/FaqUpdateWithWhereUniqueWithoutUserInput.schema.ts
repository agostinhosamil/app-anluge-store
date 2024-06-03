import { z } from 'zod'
import { FaqWhereUniqueInputObjectSchema } from './FaqWhereUniqueInput.schema'
import { FaqUpdateWithoutUserInputObjectSchema } from './FaqUpdateWithoutUserInput.schema'
import { FaqUncheckedUpdateWithoutUserInputObjectSchema } from './FaqUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => FaqWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => FaqUpdateWithoutUserInputObjectSchema),
      z.lazy(() => FaqUncheckedUpdateWithoutUserInputObjectSchema)
    ])
  })
  .strict()

export const FaqUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
