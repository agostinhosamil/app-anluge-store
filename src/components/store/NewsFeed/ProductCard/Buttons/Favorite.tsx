import { Favorite } from '@prisma/client'
import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { FaHeart, FaHeartCrack } from 'react-icons/fa6'

import { useAuthenticationContext } from '@components/AuthenticationWrapper'
import { FavoriteWithProductId } from 'Types/Favorite'
import { ProductProps } from 'Types/Product'
import { useToast } from 'ui@components/use-toast'
import { addUserFavorites, removeUserFavorites } from '~/utils/models/user'

type FavoriteButtonProps = {
  product: ProductProps
}

type FavoriteButtonComponent = React.FunctionComponent<FavoriteButtonProps>

export const FavoriteButton: FavoriteButtonComponent = ({ product }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { toast } = useToast()
  const { auth, authenticated, requestSignIn, updateUser } =
    useAuthenticationContext()

  const getAuthenticatedUserFavorites = (): Array<FavoriteWithProductId> => {
    const favorites: Array<FavoriteWithProductId> = []

    if (
      auth.user &&
      'favorites' in auth.user &&
      auth.user.favorites instanceof Array
    ) {
      favorites.push(...auth.user.favorites)
    }

    return favorites
  }

  const productAlreadyInWishList = Boolean(
    getAuthenticatedUserFavorites().some(
      (favorite: Favorite) => favorite.productId === product.id
    )
  )

  const buttonClickHandler = async () => {
    setLoading(!loading)

    if (!authenticated()) {
      const signInResponse = await requestSignIn()

      if (!signInResponse) {
        toast({
          description: 'Não foi possível adicionar produto a lista de desejos'
        })

        return setLoading(false)
      }
    }

    const buttonActionHandler = productAlreadyInWishList
      ? removeUserFavorites
      : addUserFavorites

    await buttonActionHandler({
      products: [
        {
          id: product.id
        }
      ]
    })

    toast({
      description: `Produto ${productAlreadyInWishList ? 'removido da' : 'adicionado a'} lista de desejos`
    })

    setLoading(false)

    const currentFavoritesList = getAuthenticatedUserFavorites()

    const updatedFavoritesList = productAlreadyInWishList
      ? currentFavoritesList.filter(
          favorite => favorite.productId !== product.id
        )
      : [
          ...currentFavoritesList,
          {
            id: -1,
            productId: product.id,
            userId: String(auth.user?.id),
            product: {
              id: product.id
            }
          }
        ]

    updateUser({
      favorites: updatedFavoritesList
    })
  }

  const IconElement = !productAlreadyInWishList ? FaHeart : FaHeartCrack

  return (
    <button
      type="button"
      role="button"
      disabled={loading}
      className={productAlreadyInWishList ? 'color-red' : undefined}
      onClick={buttonClickHandler}
    >
      <i>{(loading && <Spinner size="sm" />) || <IconElement />}</i>
    </button>
  )
}
