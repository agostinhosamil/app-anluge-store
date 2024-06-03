import { z } from 'zod'
import { MediaWhereUniqueInputObjectSchema } from './MediaWhereUniqueInput.schema'
import { MediaUpdateWithoutRateInputObjectSchema } from './MediaUpdateWithoutRateInput.schema'
import { MediaUncheckedUpdateWithoutRateInputObjectSchema } from './MediaUncheckedUpdateWithoutRateInput.schema'
import { MediaCreateWithoutRateInputObjectSchema } from './MediaCreateWithoutRateInput.schema'
import { MediaUncheckedCreateWithoutRateInputObjectSchema } from './MediaUncheckedCreateWithoutRateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUpsertWithWhereUniqueWithoutRateInput> = z
  .object({
    where: z.lazy(() => MediaWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MediaUpdateWithoutRateInputObjectSchema),
      z.lazy(() => MediaUncheckedUpdateWithoutRateInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => MediaCreateWithoutRateInputObjectSchema),
      z.lazy(() => MediaUncheckedCreateWithoutRateInputObjectSchema)
    ])
  })
  .strict()

export const MediaUpsertWithWhereUniqueWithoutRateInputObjectSchema = Schema
