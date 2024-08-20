import { Favorite } from '@prisma/client'
import React, { Fragment, isValidElement, useState } from 'react'

import { useAuthenticationContext } from '@components/AuthenticationWrapper'
import { addUserFavorites, removeUserFavorites } from '@utils/models/user'
import { FavoriteWithProductId } from 'Types/Favorite'
import { ProductProps } from 'Types/Product'
import { useToast } from 'ui@components/use-toast'

type FavoriteButtonProps = {
  product: ProductProps
}

type FavoriteButtonComponent = React.FunctionComponent<
  React.PropsWithChildren & FavoriteButtonProps
>

export const FavoriteButton: FavoriteButtonComponent = ({
  product,
  ...props
}) => {
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

  const children =
    props.children instanceof Array ? props.children : [props.children]

  return (
    <Fragment>
      {children.map(child =>
        !isValidElement<FavoriteButtonProps>(child)
          ? child
          : {
              ...child,
              props: {
                ...child.props,
                loading,
                disabled: loading,
                active: productAlreadyInWishList,
                onClick: (event: React.BaseSyntheticEvent) => {
                  event.preventDefault()

                  if (
                    'onClick' in child.props &&
                    typeof child.props.onClick === 'function'
                  ) {
                    child.props.onClick(event)
                  }

                  buttonClickHandler()
                }
              }
            }
      )}
    </Fragment>
  )
}
