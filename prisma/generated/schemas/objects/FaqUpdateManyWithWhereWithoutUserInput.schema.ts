import { z } from 'zod'
import { FaqScalarWhereInputObjectSchema } from './FaqScalarWhereInput.schema'
import { FaqUpdateManyMutationInputObjectSchema } from './FaqUpdateManyMutationInput.schema'
import { FaqUncheckedUpdateManyWithoutFaqInputObjectSchema } from './FaqUncheckedUpdateManyWithoutFaqInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => FaqScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => FaqUpdateManyMutationInputObjectSchema),
      z.lazy(() => FaqUncheckedUpdateManyWithoutFaqInputObjectSchema)
    ])
  })
  .strict()

export const FaqUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
