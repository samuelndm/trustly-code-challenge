import React, { useState } from 'react'
import * as Hooks from 'hooks'
import * as UTIL from 'utils'
import * as S from './styles'

type PaymentProps = {
  payment: UTIL.Types.Payment
}

const Payment = ({ payment }: PaymentProps) => {
  const { selectedPayment, updateSelectedPayment } = Hooks.usePaymentContext()

  const [formatCurrencyObj] = useState({
    value: payment?.discount?.value,
    languageCode: UTIL.Enums.LanguageCodes[UTIL.Common.getBrowserLanguage()],
    currencyCode: UTIL.Enums.CurrencyCodes[payment?.discount?.currency],
    maximumFractionDigits: 0,
  })

  const handleClick = () => {
    updateSelectedPayment(payment)
  }

  return (
    <S.Container
      isSelected={selectedPayment?.id === payment?.id}
      onClick={handleClick}
    >
      <S.Title>{payment?.title}</S.Title>
      <S.Banner src={payment?.banner || ''} />

      {!!payment?.discount?.value && (
        <S.Discount>
          SAVE {UTIL.Common.formatCurrency(formatCurrencyObj)}
        </S.Discount>
      )}
    </S.Container>
  )
}

export default Payment
