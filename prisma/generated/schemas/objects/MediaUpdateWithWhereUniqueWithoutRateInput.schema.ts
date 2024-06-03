import { z } from 'zod'
import { MediaWhereUniqueInputObjectSchema } from './MediaWhereUniqueInput.schema'
import { MediaUpdateWithoutRateInputObjectSchema } from './MediaUpdateWithoutRateInput.schema'
import { MediaUncheckedUpdateWithoutRateInputObjectSchema } from './MediaUncheckedUpdateWithoutRateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUpdateWithWhereUniqueWithoutRateInput> = z
  .object({
    where: z.lazy(() => MediaWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MediaUpdateWithoutRateInputObjectSchema),
      z.lazy(() => MediaUncheckedUpdateWithoutRateInputObjectSchema)
    ])
  })
  .strict()

export const MediaUpdateWithWhereUniqueWithoutRateInputObjectSchema = Schema
