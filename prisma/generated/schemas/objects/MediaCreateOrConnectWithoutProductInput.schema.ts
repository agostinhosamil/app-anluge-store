import { z } from 'zod'
import { MediaWhereUniqueInputObjectSchema } from './MediaWhereUniqueInput.schema'
import { MediaCreateWithoutProductInputObjectSchema } from './MediaCreateWithoutProductInput.schema'
import { MediaUncheckedCreateWithoutProductInputObjectSchema } from './MediaUncheckedCreateWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => MediaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaCreateWithoutProductInputObjectSchema),
      z.lazy(() => MediaUncheckedCreateWithoutProductInputObjectSchema)
    ])
  })
  .strict()

export const MediaCreateOrConnectWithoutProductInputObjectSchema = Schema
