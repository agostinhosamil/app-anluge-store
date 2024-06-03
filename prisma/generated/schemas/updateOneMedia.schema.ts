import { z } from 'zod'
import { MediaUpdateInputObjectSchema } from './objects/MediaUpdateInput.schema'
import { MediaUncheckedUpdateInputObjectSchema } from './objects/MediaUncheckedUpdateInput.schema'
import { MediaWhereUniqueInputObjectSchema } from './objects/MediaWhereUniqueInput.schema'

export const MediaUpdateOneSchema = z.object({
  data: z.union([
    MediaUpdateInputObjectSchema,
    MediaUncheckedUpdateInputObjectSchema
  ]),
  where: MediaWhereUniqueInputObjectSchema
})
