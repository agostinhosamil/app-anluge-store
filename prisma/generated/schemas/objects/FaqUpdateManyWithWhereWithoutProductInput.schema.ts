import { z } from 'zod'
import { FaqScalarWhereInputObjectSchema } from './FaqScalarWhereInput.schema'
import { FaqUpdateManyMutationInputObjectSchema } from './FaqUpdateManyMutationInput.schema'
import { FaqUncheckedUpdateManyWithoutFaqsInputObjectSchema } from './FaqUncheckedUpdateManyWithoutFaqsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqUpdateManyWithWhereWithoutProductInput> = z
  .object({
    where: z.lazy(() => FaqScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => FaqUpdateManyMutationInputObjectSchema),
      z.lazy(() => FaqUncheckedUpdateManyWithoutFaqsInputObjectSchema)
    ])
  })
  .strict()

export const FaqUpdateManyWithWhereWithoutProductInputObjectSchema = Schema
