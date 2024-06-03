import { z } from 'zod'
import { VerificationRequestWhereUniqueInputObjectSchema } from './objects/VerificationRequestWhereUniqueInput.schema'
import { VerificationRequestCreateInputObjectSchema } from './objects/VerificationRequestCreateInput.schema'
import { VerificationRequestUncheckedCreateInputObjectSchema } from './objects/VerificationRequestUncheckedCreateInput.schema'
import { VerificationRequestUpdateInputObjectSchema } from './objects/VerificationRequestUpdateInput.schema'
import { VerificationRequestUncheckedUpdateInputObjectSchema } from './objects/VerificationRequestUncheckedUpdateInput.schema'

export const VerificationRequestUpsertSchema = z.object({
  where: VerificationRequestWhereUniqueInputObjectSchema,
  create: z.union([
    VerificationRequestCreateInputObjectSchema,
    VerificationRequestUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    VerificationRequestUpdateInputObjectSchema,
    VerificationRequestUncheckedUpdateInputObjectSchema
  ])
})
