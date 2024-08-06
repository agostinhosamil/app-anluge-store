import { generateRandomId } from '~/utils'

export const BotDataEngineSearchBox = () => {
  const searchBoxKey = generateRandomId()
  const searchBoxData = {
    url: 'https://www.mercadolivre.com.br/',
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    potentialAction: {
      target:
        'http://www.mercadolivre.com.br/jm/search?as_word={search_term_string}&searchbox=google',
      '@type': 'SearchAction',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      key={searchBoxKey}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(searchBoxData)
      }}
    />
  )
}
