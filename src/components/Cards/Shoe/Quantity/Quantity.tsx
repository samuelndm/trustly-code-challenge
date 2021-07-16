import React from 'react'
import * as UTIL from 'utils'
import * as C from 'components'
import * as S from './styles'

type QuantityProps = {
  updateQuantity: (quantity: number) => void
}

const quantities = UTIL.Common.createArrayOfGivenNumber(
  UTIL.Constants.MAX_AMOUNT_SHOES_TO_BUY
)

const Quantity = ({ updateQuantity }: QuantityProps) => {
  return (
    <C.UI.Select
      label="Quantity"
      options={quantities}
      onChange={updateQuantity}
      defaultValue={quantities[0]}
      containerStyle={{ ...S.containerStyle }}
      labelStyle={{ ...S.labelStyle }}
    />
  )
}

export default Quantity
