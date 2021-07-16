import React from 'react'
import * as Hooks from 'hooks'
import * as S from './styles'
import noAvatarImg from 'assets/images/no-avatar.png'

const Menu = () => {
  const { user } = Hooks.useUserContext()

  return <S.Container avatar={user?.avatar || noAvatarImg}></S.Container>
}

export default Menu
