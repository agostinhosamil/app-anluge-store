import { z } from 'zod'
import { FaqWhereUniqueInputObjectSchema } from './FaqWhereUniqueInput.schema'
import { FaqUpdateWithoutProductInputObjectSchema } from './FaqUpdateWithoutProductInput.schema'
import { FaqUncheckedUpdateWithoutProductInputObjectSchema } from './FaqUncheckedUpdateWithoutProductInput.schema'
import { FaqCreateWithoutProductInputObjectSchema } from './FaqCreateWithoutProductInput.schema'
import { FaqUncheckedCreateWithoutProductInputObjectSchema } from './FaqUncheckedCreateWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqUpsertWithWhereUniqueWithoutProductInput> = z
  .object({
    where: z.lazy(() => FaqWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => FaqUpdateWithoutProductInputObjectSchema),
      z.lazy(() => FaqUncheckedUpdateWithoutProductInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => FaqCreateWithoutProductInputObjectSchema),
      z.lazy(() => FaqUncheckedCreateWithoutProductInputObjectSchema)
    ])
  })
  .strict()

export const FaqUpsertWithWhereUniqueWithoutProductInputObjectSchema = Schema
