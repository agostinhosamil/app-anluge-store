import { z } from 'zod'
import { MediaWhereUniqueInputObjectSchema } from './objects/MediaWhereUniqueInput.schema'
import { MediaCreateInputObjectSchema } from './objects/MediaCreateInput.schema'
import { MediaUncheckedCreateInputObjectSchema } from './objects/MediaUncheckedCreateInput.schema'
import { MediaUpdateInputObjectSchema } from './objects/MediaUpdateInput.schema'
import { MediaUncheckedUpdateInputObjectSchema } from './objects/MediaUncheckedUpdateInput.schema'

export const MediaUpsertSchema = z.object({
  where: MediaWhereUniqueInputObjectSchema,
  create: z.union([
    MediaCreateInputObjectSchema,
    MediaUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    MediaUpdateInputObjectSchema,
    MediaUncheckedUpdateInputObjectSchema
  ])
})
