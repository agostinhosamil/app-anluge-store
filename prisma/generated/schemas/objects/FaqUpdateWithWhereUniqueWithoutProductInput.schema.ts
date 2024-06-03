import { z } from 'zod'
import { FaqWhereUniqueInputObjectSchema } from './FaqWhereUniqueInput.schema'
import { FaqUpdateWithoutProductInputObjectSchema } from './FaqUpdateWithoutProductInput.schema'
import { FaqUncheckedUpdateWithoutProductInputObjectSchema } from './FaqUncheckedUpdateWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqUpdateWithWhereUniqueWithoutProductInput> = z
  .object({
    where: z.lazy(() => FaqWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => FaqUpdateWithoutProductInputObjectSchema),
      z.lazy(() => FaqUncheckedUpdateWithoutProductInputObjectSchema)
    ])
  })
  .strict()

export const FaqUpdateWithWhereUniqueWithoutProductInputObjectSchema = Schema
