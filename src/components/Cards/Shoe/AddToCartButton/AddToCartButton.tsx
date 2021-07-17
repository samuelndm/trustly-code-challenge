import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Hooks from 'hooks'
import * as UTIL from 'utils'
import * as S from './styles'

type AddToCartButtonProps = {
  shoe: UTIL.Types.Shoe
  purchaseDetails: UTIL.Types.ShoePurchaseDetails
}

const AddToCartButton = ({ shoe, purchaseDetails }: AddToCartButtonProps) => {
  const history = useHistory()
  const { addItemToCart } = Hooks.useCartContext()

  const handleClick = () => {
    if (UTIL.Validations.Shoe.isPurchaseDetailsValid(purchaseDetails, shoe)) {
      const cartItem = {
        purchaseDetails: {
          ...purchaseDetails,
          totalCost: purchaseDetails?.quantity * Number.parseFloat(shoe?.price),
        },
        purchaseSummary: UTIL.Summaries.getShoeSummary(purchaseDetails),
        product: shoe,
      }

      addItemToCart(cartItem)
      history.push('/checkout')
    }
  }

  return <S.Container onClick={handleClick}>Add to cart</S.Container>
}

export default AddToCartButton
