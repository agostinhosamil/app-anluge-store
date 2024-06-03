import { z } from 'zod'
import { MediaUpdateManyMutationInputObjectSchema } from './objects/MediaUpdateManyMutationInput.schema'
import { MediaWhereInputObjectSchema } from './objects/MediaWhereInput.schema'

export const MediaUpdateManySchema = z.object({
  data: MediaUpdateManyMutationInputObjectSchema,
  where: MediaWhereInputObjectSchema.optional()
})
