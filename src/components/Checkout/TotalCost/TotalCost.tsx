import React, { useState } from 'react'
import * as UTIL from 'utils'
import * as S from './styles'

type TotalCostProps = {
  cart: UTIL.Types.CartItem[]
  hasPayments: boolean
}

const TotalCost = ({ cart, hasPayments }: TotalCostProps) => {
  const [formatCurrencyObj] = useState({
    value: cart?.[0]?.purchaseDetails?.totalCost || 0,
    languageCode: UTIL.Enums.LanguageCodes[UTIL.Common.getBrowserLanguage()],
    currencyCode: UTIL.Enums.CurrencyCodes[cart?.[0]?.product?.currency],
    maximumFractionDigits: 0,
  })

  return (
    <S.Container hasPayments={!!hasPayments}>
      <S.Content>
        <S.Info>
          <S.SubTitle>Total cost</S.SubTitle>
          <S.Summary>Delivery included</S.Summary>
        </S.Info>

        <S.Value hasPayments={!!hasPayments}>
          {UTIL.Common.formatCurrency(formatCurrencyObj)}
        </S.Value>
      </S.Content>
    </S.Container>
  )
}

export default TotalCost
