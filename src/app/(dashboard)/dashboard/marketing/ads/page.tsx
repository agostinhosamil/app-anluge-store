import { prisma } from '~/services/prisma'

import { PageContent } from './PageContent'

export default async function MarketingAdsPage() {
  const advertisingList = await prisma.advertise.findMany({
    include: {
      post: true
    }
  })

  return <PageContent advertisingList={advertisingList} />
}
