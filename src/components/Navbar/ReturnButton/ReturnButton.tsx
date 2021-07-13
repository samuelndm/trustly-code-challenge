import React from 'react'
import arrowIcon from 'assets/icons/left-arrow.png'
import * as S from './styles'

const ReturnButton = () => {
  return (
    <S.Container>
      <S.ArrowIcon src={arrowIcon} alt="image of back button" />
      <S.Title>Back</S.Title>
    </S.Container>
  )
}

export default ReturnButton
