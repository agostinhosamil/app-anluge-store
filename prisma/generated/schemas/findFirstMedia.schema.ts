import { z } from 'zod'
import { MediaOrderByWithRelationInputObjectSchema } from './objects/MediaOrderByWithRelationInput.schema'
import { MediaWhereInputObjectSchema } from './objects/MediaWhereInput.schema'
import { MediaWhereUniqueInputObjectSchema } from './objects/MediaWhereUniqueInput.schema'
import { MediaScalarFieldEnumSchema } from './enums/MediaScalarFieldEnum.schema'

export const MediaFindFirstSchema = z.object({
  orderBy: z
    .union([
      MediaOrderByWithRelationInputObjectSchema,
      MediaOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: MediaWhereInputObjectSchema.optional(),
  cursor: MediaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MediaScalarFieldEnumSchema).optional()
})
