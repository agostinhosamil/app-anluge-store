import { z } from 'zod'
import { MediaWhereUniqueInputObjectSchema } from './objects/MediaWhereUniqueInput.schema'

export const MediaFindUniqueSchema = z.object({
  where: MediaWhereUniqueInputObjectSchema
})
