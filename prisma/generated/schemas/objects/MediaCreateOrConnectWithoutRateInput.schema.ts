import { z } from 'zod'
import { MediaWhereUniqueInputObjectSchema } from './MediaWhereUniqueInput.schema'
import { MediaCreateWithoutRateInputObjectSchema } from './MediaCreateWithoutRateInput.schema'
import { MediaUncheckedCreateWithoutRateInputObjectSchema } from './MediaUncheckedCreateWithoutRateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaCreateOrConnectWithoutRateInput> = z
  .object({
    where: z.lazy(() => MediaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MediaCreateWithoutRateInputObjectSchema),
      z.lazy(() => MediaUncheckedCreateWithoutRateInputObjectSchema)
    ])
  })
  .strict()

export const MediaCreateOrConnectWithoutRateInputObjectSchema = Schema
