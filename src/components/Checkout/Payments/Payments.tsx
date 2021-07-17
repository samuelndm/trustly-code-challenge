import React from 'react'
import * as Hooks from 'hooks'
import * as UTIL from 'utils'
import * as S from './styles'
import Payment from './Payment/Payment'

const Payments = () => {
  const { payments } = Hooks.usePaymentContext()

  return (
    <S.Container>
      <S.Title>Select your payment method</S.Title>
      <S.Payments>
        {payments?.map((payment: UTIL.Types.Payment) => (
          <Payment payment={payment} key={payment?.id} />
        ))}
      </S.Payments>
    </S.Container>
  )
}

export default Payments
