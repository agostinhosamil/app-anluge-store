import { z } from 'zod'
import { MediaWhereUniqueInputObjectSchema } from './objects/MediaWhereUniqueInput.schema'

export const MediaDeleteOneSchema = z.object({
  where: MediaWhereUniqueInputObjectSchema
})
