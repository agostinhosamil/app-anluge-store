import { z } from 'zod'

export const MediaTypeSchema = z.enum(['IMAGE', 'VIDEO', 'AUDIO'])
