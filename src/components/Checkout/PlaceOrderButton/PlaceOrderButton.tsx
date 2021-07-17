import React from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './styles'

const CompleteCheckoutButton = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/store')
  }

  return <S.Container onClick={handleClick}>Place order</S.Container>
}

export default CompleteCheckoutButton
