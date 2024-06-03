import { z } from 'zod'
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionListRelationFilter> = z
  .object({
    every: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
    some: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
    none: z.lazy(() => PermissionWhereInputObjectSchema).optional()
  })
  .strict()

export const PermissionListRelationFilterObjectSchema = Schema
