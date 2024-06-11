import { Prisma } from '@prisma/client'

export type PostProps = Prisma.PostGetPayload<{
  include: {
    author: true
    medias: true
    tags: true
  }
}>
