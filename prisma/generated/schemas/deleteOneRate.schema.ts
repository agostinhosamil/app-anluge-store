import { z } from 'zod'
import { RateWhereUniqueInputObjectSchema } from './objects/RateWhereUniqueInput.schema'

export const RateDeleteOneSchema = z.object({
  where: RateWhereUniqueInputObjectSchema
})
