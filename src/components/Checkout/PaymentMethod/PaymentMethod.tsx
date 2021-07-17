import React from 'react'
import * as Hooks from 'hooks'
import * as S from './styles'
import bankIcon from 'assets/icons/green-bank-icon.png'

const PaymentMethod = () => {
  const { selectedPayment } = Hooks.usePaymentContext()

  return (
    <S.Container>
      <S.Title>Payment Method</S.Title>
      <S.Content>
        <S.Icon src={bankIcon} alt="payment method icon" />
        <S.SubTitle>{selectedPayment?.title || ''}</S.SubTitle>
      </S.Content>
    </S.Container>
  )
}

export default PaymentMethod
