import React from 'react'
import * as S from './styles'

type PurchaseStepsProps = {
  step: number
}

const PurchaseSteps = ({ step }: PurchaseStepsProps) => {
  return (
    <S.Container>
      <S.Line />

      <S.Step>
        <S.Circle isActive={step >= 1} />
        <S.Label>Cart</S.Label>
      </S.Step>
      <S.Step>
        <S.Circle isActive={step >= 2} />
        <S.Label>Payment options</S.Label>
      </S.Step>
      <S.Step>
        <S.Circle isActive={step >= 3} />
        <S.Label>Receipt</S.Label>
      </S.Step>
    </S.Container>
  )
}

export default PurchaseSteps
