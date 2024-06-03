import { z } from 'zod'
import { VerificationRequestCreateManyInputObjectSchema } from './objects/VerificationRequestCreateManyInput.schema'

export const VerificationRequestCreateManySchema = z.object({
  data: z.union([
    VerificationRequestCreateManyInputObjectSchema,
    z.array(VerificationRequestCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
})
