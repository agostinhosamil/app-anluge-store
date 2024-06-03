'use client'

import { NewsFeed } from 'store@components/NewsFeed'
import { PageContainer } from 'store@components/styles'

export default function Home() {
  return (
    <PageContainer>
      <NewsFeed />
    </PageContainer>
  )
}
