import { NextResponse } from 'next/server'
import { z } from 'zod'

import { Prisma } from '@prisma/client'
import { getRequestBody } from '@utils/server/getRequestBody'
import { NextApiHandler } from 'Types/next'
import { prisma } from '~/services/prisma'
import { findUserByEmailOrCreate } from '~/utils/user'

export const GET: NextApiHandler = async () => {
  const subscriptions = await prisma.subscription.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          username: true
        }
      }
    }
  })

  return NextResponse.json(subscriptions)
}

const PostRequestDataObjectSchema = z.object({
  newsletter: z
    .object({
      email: z
        .string()
        .email()
        .transform(email => email.toLowerCase())
        .refine(async email => {
          const subscription = await prisma.subscription.findFirst({
            where: {
              user: {
                email
              }
            },

            select: {
              id: true
            }
          })

          return !subscription
        })
        .transform(email => [email])
        .nullish(),
      emails: z
        .array(
          z
            .string()
            .email()
            .transform(email => email.toLowerCase())
            .refine(async email => {
              const subscription = await prisma.subscription.findFirst({
                where: {
                  user: {
                    email
                  }
                },

                select: {
                  id: true
                }
              })

              return !subscription
            })
        )
        .nullish()
    })
    .refine(newsletter =>
      Boolean(
        newsletter.email || (newsletter.emails && newsletter.emails.length >= 1)
      )
    )
})

type PostRequestDataObject = z.infer<typeof PostRequestDataObjectSchema>

export const POST: NextApiHandler = async request => {
  const requestBody = await getRequestBody<PostRequestDataObject>(request)

  const validatedRequestBody =
    await PostRequestDataObjectSchema.safeParseAsync(requestBody)

  if (validatedRequestBody.error) {
    console.log('validatedRequestBody.error => ', validatedRequestBody.error)

    return NextResponse.json(
      {
        error: true,
        success: false,
        message: 'Invalid request input'
      },
      {
        status: 400,
        statusText: 'Invalid Request Input'
      }
    )
  }

  const { newsletter } = validatedRequestBody.data

  const emails = [...(newsletter.email ?? []), ...(newsletter.emails ?? [])]

  const data = await Promise.all(
    emails.map(async (email): Promise<Prisma.SubscriptionCreateManyInput> => {
      const user = await findUserByEmailOrCreate(email)

      return {
        context: 'NEWSLETTER',
        userId: user.id
      }
    })
  )

  const subscription = await prisma.subscription.createMany({
    data
  })

  return NextResponse.json(subscription)
}

const DeleteRequestDataObjectSchema = z.object({
  newsletter: z.object({
    emails: z.array(z.string().email()).min(1)
  })
})

type DeleteRequestDataObject = z.infer<typeof DeleteRequestDataObjectSchema>

export const DELETE: NextApiHandler = async request => {
  const requestBody = await getRequestBody<DeleteRequestDataObject>(request)

  const validatedRequestBody =
    DeleteRequestDataObjectSchema.safeParse(requestBody)

  if (validatedRequestBody.error) {
    return NextResponse.json(
      {
        error: true,
        success: false,
        message: 'Invalid request input'
      },
      {
        status: 400,
        statusText: 'Invalid Request Input'
      }
    )
  }

  const { newsletter } = validatedRequestBody.data

  try {
    await prisma.subscription.deleteMany({
      where: {
        user: {
          email: {
            in: newsletter.emails
          }
        }
      }
    })

    return NextResponse.json({
      error: false,
      success: true,
      message: 'Subscription/s successfully deleted'
    })
  } catch (err) {
    return NextResponse.json(
      {
        error: true,
        success: false,
        message: 'Sorry... something went wrong'
      },
      {
        status: 400
      }
    )
  }
}
