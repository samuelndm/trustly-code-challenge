import React from 'react'
import ReturnButton from './ReturnButton/ReturnButton'
import Title from './Title/Title'
import Menu from './Menu/Menu'
import * as S from './styles'

const Navbar = () => {
  return (
    <S.Container>
      <S.Content>
        <ReturnButton />
        <Title />
        <Menu />
      </S.Content>
    </S.Container>
  )
}

export default Navbar
