import { z } from 'zod'
import { FaqWhereUniqueInputObjectSchema } from './FaqWhereUniqueInput.schema'
import { FaqCreateWithoutProductInputObjectSchema } from './FaqCreateWithoutProductInput.schema'
import { FaqUncheckedCreateWithoutProductInputObjectSchema } from './FaqUncheckedCreateWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => FaqWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FaqCreateWithoutProductInputObjectSchema),
      z.lazy(() => FaqUncheckedCreateWithoutProductInputObjectSchema)
    ])
  })
  .strict()

export const FaqCreateOrConnectWithoutProductInputObjectSchema = Schema
