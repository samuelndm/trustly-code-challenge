import React from 'react'
import * as Hooks from 'hooks'
import * as C from 'components'
import * as S from './styles'

const ReceiptPage = () => {
  const { cart } = Hooks.useCartContext()

  return (
    <S.Container>
      <S.Content>
        <C.PurchaseSteps step={3} />
        <C.Checkout
          cart={cart}
          mainTitle="Order summary"
          hasDeliveryDetails={false}
          hasPayments={false}
          hasCheckoutButton={false}
        />
      </S.Content>
    </S.Container>
  )
}

export default ReceiptPage
