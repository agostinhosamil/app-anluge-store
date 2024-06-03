import { z } from 'zod'

export const ProductTypeSchema = z.enum(['PHYSICAL', 'DIGITAL'])
