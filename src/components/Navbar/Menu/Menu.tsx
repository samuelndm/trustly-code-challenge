import React from 'react'
import { useUserContext } from 'hooks'
import noAvatarImg from 'assets/images/no-avatar.png'
import * as S from './styles'

const Menu = () => {
  const { user } = useUserContext()

  console.log('user', user)
  return <S.Container avatar={user?.avatar || noAvatarImg}></S.Container>
}

export default Menu
