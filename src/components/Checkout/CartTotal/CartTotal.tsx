import React from 'react'
import * as UTIL from 'utils'
import * as S from './styles'

type CartTotalProps = {
  cart: UTIL.Types.CartItem[]
}

const CartTotal = ({ cart }: CartTotalProps) => {
  return (
    <S.Container>
      <S.Title>Cart total</S.Title>
      <S.SubTitle>{cart?.[0]?.product?.description}</S.SubTitle>
      <S.Summary
        dangerouslySetInnerHTML={{
          __html: cart?.[0]?.purchaseSummary,
        }}
      />
    </S.Container>
  )
}

export default CartTotal
