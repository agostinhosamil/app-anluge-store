import { z } from 'zod'
import { MediaWhereInputObjectSchema } from './objects/MediaWhereInput.schema'

export const MediaDeleteManySchema = z.object({
  where: MediaWhereInputObjectSchema.optional()
})
