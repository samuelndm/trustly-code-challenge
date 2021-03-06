import React from 'react'
import * as Hooks from 'hooks'
import * as C from 'components'
import * as S from './styles'

const CheckoutPage = () => {
  const { cart } = Hooks.useCartContext()

  return (
    <S.Container>
      <S.Content>
        <C.PurchaseSteps step={2} />
        <C.Checkout
          cart={cart}
          mainTitle="Cart total"
          hasDeliveryDetails={true}
          hasPayments={true}
          hasCheckoutButton={true}
        />
      </S.Content>
    </S.Container>
  )
}

export default CheckoutPage
