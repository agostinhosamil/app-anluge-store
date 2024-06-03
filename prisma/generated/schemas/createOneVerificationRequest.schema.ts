import { z } from 'zod'
import { VerificationRequestCreateInputObjectSchema } from './objects/VerificationRequestCreateInput.schema'
import { VerificationRequestUncheckedCreateInputObjectSchema } from './objects/VerificationRequestUncheckedCreateInput.schema'

export const VerificationRequestCreateOneSchema = z.object({
  data: z.union([
    VerificationRequestCreateInputObjectSchema,
    VerificationRequestUncheckedCreateInputObjectSchema
  ])
})
