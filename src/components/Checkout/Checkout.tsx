import React from 'react'
import * as UTIL from 'utils'
import * as S from './styles'
import placeholder from 'assets/images/placeholder.png'
import CartTotal from './CartTotal/CartTotal'
import DeliveryDetails from './DeliveryDetails/DeliveryDetails'
import TotalCost from './TotalCost/TotalCost'
import Payments from './Payments/Payments'
import PaymentMethod from './PaymentMethod/PaymentMethod'
import CompleteCheckoutButton from './CompleteCheckoutButton/CompleteCheckoutButton'
import PlaceOrderButton from './PlaceOrderButton/PlaceOrderButton'

type CheckoutProps = {
  cart: UTIL.Types.CartItem[]
  mainTitle: string
  hasDeliveryDetails: boolean
  hasPayments: boolean
  hasCheckoutButton: boolean
}

const Checkout = ({
  cart,
  mainTitle,
  hasDeliveryDetails,
  hasPayments,
  hasCheckoutButton,
}: CheckoutProps) => {
  return (
    <S.Container>
      <S.ImageContainer
        imageURL={cart?.[0]?.product?.maxresURL || placeholder}
      />
      <S.Info>
        <CartTotal mainTitle={mainTitle} cart={cart} />

        {hasDeliveryDetails ? <DeliveryDetails /> : <PaymentMethod />}

        <TotalCost cart={cart} hasPayments={hasPayments} />

        {hasPayments && <Payments />}

        {hasCheckoutButton ? <CompleteCheckoutButton /> : <PlaceOrderButton />}
      </S.Info>
    </S.Container>
  )
}

export default Checkout
