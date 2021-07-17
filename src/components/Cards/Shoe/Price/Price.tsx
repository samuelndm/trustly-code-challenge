import React, { useState } from 'react'
import * as UTIL from 'utils'
import * as S from './styles'

type PriceProps = {
  shoe: UTIL.Types.Shoe
}

const Price = ({ shoe }: PriceProps) => {
  const [formatCurrencyObj] = useState({
    value: Number.parseFloat(shoe?.price),
    languageCode: UTIL.Enums.LanguageCodes[UTIL.Common.getBrowserLanguage()],
    currencyCode: UTIL.Enums.CurrencyCodes[shoe?.currency],
    maximumFractionDigits: 0,
  })

  return (
    <S.Container>{UTIL.Common.formatCurrency(formatCurrencyObj)}</S.Container>
  )
}

export default Price
