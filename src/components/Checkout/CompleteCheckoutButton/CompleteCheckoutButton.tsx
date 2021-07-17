import React from 'react'
import * as Hooks from 'hooks'
import * as S from './styles'

const CompleteCheckoutButton = () => {
  const { cart } = Hooks.useCartContext()
  const { proceedPayment } = Hooks.usePayWithMyBank()

  const handleClick = () => {
    proceedPayment({
      amount: cart?.[0]?.purchaseDetails?.totalCost || 0,
      currency: cart?.[0]?.product?.currency || '',
    })
  }

  return <S.Container onClick={handleClick}>Continue</S.Container>
}

export default CompleteCheckoutButton
