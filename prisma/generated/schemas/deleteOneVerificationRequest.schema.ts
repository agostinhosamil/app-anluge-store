import { z } from 'zod'
import { VerificationRequestWhereUniqueInputObjectSchema } from './objects/VerificationRequestWhereUniqueInput.schema'

export const VerificationRequestDeleteOneSchema = z.object({
  where: VerificationRequestWhereUniqueInputObjectSchema
})
