import { useAuthenticationContext } from '~/components/AuthenticationWrapper'
import { NewsletterFormContainer } from './styles'

export const NewsletterForm = () => {
  const {
    auth: { user }
  } = useAuthenticationContext()

  return (
    <NewsletterFormContainer>
      <h1>Receba as nossa promoções em primeira mão</h1>
      <p>
        Gostaria de ser um dos primeiros a saber dos produtos em promoção?
        Então, Inscreva-se na nossa newsletter.
      </p>
      <form method="post" action="/api/newsletter/subscribe">
        <div>
          <input
            type="text"
            placeholder="Seu melhor endereço de email"
            name="newsletter[email]"
            id="newsletter-user-email"
            autoCapitalize="off"
            autoComplete="off"
            spellCheck="false"
            defaultValue={user?.email}
          />
          <button type="submit" role="button">
            Inscrever-se
          </button>
        </div>
      </form>
    </NewsletterFormContainer>
  )
}
