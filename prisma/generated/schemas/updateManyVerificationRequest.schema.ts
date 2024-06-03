import { z } from 'zod'
import { VerificationRequestUpdateManyMutationInputObjectSchema } from './objects/VerificationRequestUpdateManyMutationInput.schema'
import { VerificationRequestWhereInputObjectSchema } from './objects/VerificationRequestWhereInput.schema'

export const VerificationRequestUpdateManySchema = z.object({
  data: VerificationRequestUpdateManyMutationInputObjectSchema,
  where: VerificationRequestWhereInputObjectSchema.optional()
})
