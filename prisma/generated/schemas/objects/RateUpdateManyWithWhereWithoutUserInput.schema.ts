import { z } from 'zod'
import { RateScalarWhereInputObjectSchema } from './RateScalarWhereInput.schema'
import { RateUpdateManyMutationInputObjectSchema } from './RateUpdateManyMutationInput.schema'
import { RateUncheckedUpdateManyWithoutRatesInputObjectSchema } from './RateUncheckedUpdateManyWithoutRatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => RateScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RateUpdateManyMutationInputObjectSchema),
      z.lazy(() => RateUncheckedUpdateManyWithoutRatesInputObjectSchema)
    ])
  })
  .strict()

export const RateUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
