import { z } from 'zod'
import { VerificationRequestWhereUniqueInputObjectSchema } from './objects/VerificationRequestWhereUniqueInput.schema'

export const VerificationRequestFindUniqueSchema = z.object({
  where: VerificationRequestWhereUniqueInputObjectSchema
})
