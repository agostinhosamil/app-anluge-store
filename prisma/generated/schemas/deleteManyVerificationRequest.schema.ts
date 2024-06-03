import { z } from 'zod'
import { VerificationRequestWhereInputObjectSchema } from './objects/VerificationRequestWhereInput.schema'

export const VerificationRequestDeleteManySchema = z.object({
  where: VerificationRequestWhereInputObjectSchema.optional()
})
