import { z } from 'zod'
import { VerificationRequestUpdateInputObjectSchema } from './objects/VerificationRequestUpdateInput.schema'
import { VerificationRequestUncheckedUpdateInputObjectSchema } from './objects/VerificationRequestUncheckedUpdateInput.schema'
import { VerificationRequestWhereUniqueInputObjectSchema } from './objects/VerificationRequestWhereUniqueInput.schema'

export const VerificationRequestUpdateOneSchema = z.object({
  data: z.union([
    VerificationRequestUpdateInputObjectSchema,
    VerificationRequestUncheckedUpdateInputObjectSchema
  ]),
  where: VerificationRequestWhereUniqueInputObjectSchema
})
