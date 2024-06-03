import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { UserTokenOrderByRelationAggregateInputObjectSchema } from './UserTokenOrderByRelationAggregateInput.schema'
import { RoleOrderByWithRelationInputObjectSchema } from './RoleOrderByWithRelationInput.schema'
import { RateOrderByRelationAggregateInputObjectSchema } from './RateOrderByRelationAggregateInput.schema'
import { FavoriteOrderByRelationAggregateInputObjectSchema } from './FavoriteOrderByRelationAggregateInput.schema'
import { CartOrderByWithRelationInputObjectSchema } from './CartOrderByWithRelationInput.schema'
import { FaqOrderByRelationAggregateInputObjectSchema } from './FaqOrderByRelationAggregateInput.schema'
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema'
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    username: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    emailVerified: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    roleId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    Token: z
      .lazy(() => UserTokenOrderByRelationAggregateInputObjectSchema)
      .optional(),
    role: z.lazy(() => RoleOrderByWithRelationInputObjectSchema).optional(),
    rates: z
      .lazy(() => RateOrderByRelationAggregateInputObjectSchema)
      .optional(),
    favorites: z
      .lazy(() => FavoriteOrderByRelationAggregateInputObjectSchema)
      .optional(),
    cart: z.lazy(() => CartOrderByWithRelationInputObjectSchema).optional(),
    Faq: z.lazy(() => FaqOrderByRelationAggregateInputObjectSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional()
  })
  .strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
