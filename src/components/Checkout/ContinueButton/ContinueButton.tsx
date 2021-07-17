import React from 'react'
import * as S from './styles'

const ContinueButton = () => {
  const handleClick = () => {
    console.log('clicked')
  }

  return <S.Container onClick={handleClick}>Continue</S.Container>
}

export default ContinueButton
