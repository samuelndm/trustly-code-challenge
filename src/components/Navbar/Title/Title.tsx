import React from 'react'
import * as Hooks from 'hooks'
import * as S from './styles'

const Title = () => {
  const { meta } = Hooks.useRoutesContext()

  return <S.Container>{meta?.routeTitle}</S.Container>
}

export default Title
