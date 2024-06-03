import { z } from 'zod'
import { MediaScalarWhereInputObjectSchema } from './MediaScalarWhereInput.schema'
import { MediaUpdateManyMutationInputObjectSchema } from './MediaUpdateManyMutationInput.schema'
import { MediaUncheckedUpdateManyWithoutMediasInputObjectSchema } from './MediaUncheckedUpdateManyWithoutMediasInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUpdateManyWithWhereWithoutRateInput> = z
  .object({
    where: z.lazy(() => MediaScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MediaUpdateManyMutationInputObjectSchema),
      z.lazy(() => MediaUncheckedUpdateManyWithoutMediasInputObjectSchema)
    ])
  })
  .strict()

export const MediaUpdateManyWithWhereWithoutRateInputObjectSchema = Schema
