import { z } from 'zod'
import { MediaCreateInputObjectSchema } from './objects/MediaCreateInput.schema'
import { MediaUncheckedCreateInputObjectSchema } from './objects/MediaUncheckedCreateInput.schema'

export const MediaCreateOneSchema = z.object({
  data: z.union([
    MediaCreateInputObjectSchema,
    MediaUncheckedCreateInputObjectSchema
  ])
})
