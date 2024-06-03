import { z } from 'zod'
import { MediaCreateManyInputObjectSchema } from './objects/MediaCreateManyInput.schema'

export const MediaCreateManySchema = z.object({
  data: z.union([
    MediaCreateManyInputObjectSchema,
    z.array(MediaCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
})
