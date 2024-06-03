import { z } from 'zod'
import { MediaWhereUniqueInputObjectSchema } from './MediaWhereUniqueInput.schema'
import { MediaUpdateWithoutProductInputObjectSchema } from './MediaUpdateWithoutProductInput.schema'
import { MediaUncheckedUpdateWithoutProductInputObjectSchema } from './MediaUncheckedUpdateWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => MediaWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MediaUpdateWithoutProductInputObjectSchema),
        z.lazy(() => MediaUncheckedUpdateWithoutProductInputObjectSchema)
      ])
    })
    .strict()

export const MediaUpdateWithWhereUniqueWithoutProductInputObjectSchema = Schema
