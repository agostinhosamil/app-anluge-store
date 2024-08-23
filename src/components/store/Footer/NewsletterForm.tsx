import { useAuthenticationContext } from '~/components/AuthenticationWrapper'
import { NewsletterFormContainer } from './styles'

export const NewsletterForm = () => {
  const { auth: { user } = {} } = useAuthenticationContext()

  return (
    <NewsletterFormContainer>
      <h1>Receba as nossas promoções em primeira mão</h1>
      <p>
        Seja o primeiro a saber dos nossos produtos em promoção. Inscreva-se na
        nossa newsletter.
      </p>
      <form method="post" action="/api/newsletter/subscribe">
        <div>
          <input
            type="text"
            placeholder="Insira o seu endereço de email"
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
