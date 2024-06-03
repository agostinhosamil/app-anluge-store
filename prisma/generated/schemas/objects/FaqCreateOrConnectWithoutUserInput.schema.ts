import { z } from 'zod'
import { FaqWhereUniqueInputObjectSchema } from './FaqWhereUniqueInput.schema'
import { FaqCreateWithoutUserInputObjectSchema } from './FaqCreateWithoutUserInput.schema'
import { FaqUncheckedCreateWithoutUserInputObjectSchema } from './FaqUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => FaqWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FaqCreateWithoutUserInputObjectSchema),
      z.lazy(() => FaqUncheckedCreateWithoutUserInputObjectSchema)
    ])
  })
  .strict()

export const FaqCreateOrConnectWithoutUserInputObjectSchema = Schema
