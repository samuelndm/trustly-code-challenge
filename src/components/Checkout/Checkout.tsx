import React from 'react'
import * as UTIL from 'utils'
import * as S from './styles'
import placeholder from 'assets/images/placeholder.png'
import CartTotal from './CartTotal/CartTotal'
import DeliveryDetails from './DeliveryDetails/DeliveryDetails'
import TotalCost from './TotalCost/TotalCost'
import Payments from './Payments/Payments'
import CompleteCheckoutButton from './CompleteCheckoutButton/CompleteCheckoutButton'

type CheckoutProps = {
  cart: UTIL.Types.CartItem[]
}

const Checkout = ({ cart }: CheckoutProps) => {
  return (
    <S.Container>
      <S.ImageContainer
        imageURL={cart?.[0]?.product?.maxresURL || placeholder}
      />
      <S.Info>
        <CartTotal cart={cart} />
        <DeliveryDetails />
        <TotalCost cart={cart} />

        <Payments />

        <CompleteCheckoutButton />
      </S.Info>
    </S.Container>
  )
}

export default Checkout
