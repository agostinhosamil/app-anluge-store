import { z } from 'zod'
import { RateUpdateWithoutMediasInputObjectSchema } from './RateUpdateWithoutMediasInput.schema'
import { RateUncheckedUpdateWithoutMediasInputObjectSchema } from './RateUncheckedUpdateWithoutMediasInput.schema'
import { RateCreateWithoutMediasInputObjectSchema } from './RateCreateWithoutMediasInput.schema'
import { RateUncheckedCreateWithoutMediasInputObjectSchema } from './RateUncheckedCreateWithoutMediasInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateUpsertWithoutMediasInput> = z
  .object({
    update: z.union([
      z.lazy(() => RateUpdateWithoutMediasInputObjectSchema),
      z.lazy(() => RateUncheckedUpdateWithoutMediasInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => RateCreateWithoutMediasInputObjectSchema),
      z.lazy(() => RateUncheckedCreateWithoutMediasInputObjectSchema)
    ])
  })
  .strict()

export const RateUpsertWithoutMediasInputObjectSchema = Schema
