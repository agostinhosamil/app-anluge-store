import { z } from 'zod'
import { MediaWhereUniqueInputObjectSchema } from './MediaWhereUniqueInput.schema'
import { MediaUpdateWithoutProductInputObjectSchema } from './MediaUpdateWithoutProductInput.schema'
import { MediaUncheckedUpdateWithoutProductInputObjectSchema } from './MediaUncheckedUpdateWithoutProductInput.schema'
import { MediaCreateWithoutProductInputObjectSchema } from './MediaCreateWithoutProductInput.schema'
import { MediaUncheckedCreateWithoutProductInputObjectSchema } from './MediaUncheckedCreateWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => MediaWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MediaUpdateWithoutProductInputObjectSchema),
        z.lazy(() => MediaUncheckedUpdateWithoutProductInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => MediaCreateWithoutProductInputObjectSchema),
        z.lazy(() => MediaUncheckedCreateWithoutProductInputObjectSchema)
      ])
    })
    .strict()

export const MediaUpsertWithWhereUniqueWithoutProductInputObjectSchema = Schema
