import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Hooks from 'hooks'
import * as UTIL from 'utils'
import * as S from './styles'
import arrowIcon from 'assets/icons/left-arrow.png'

const ReturnButton = () => {
  const history = useHistory()
  const { meta } = Hooks.useRoutesContext()

  const handleClick = () => {
    if (meta?.previousRoute) {
      history.push(meta.previousRoute)
    } else {
      history.goBack()
    }
  }

  if (meta?.routeTitle === UTIL.Constants.ROUTES_TITLES.SNEAKERS) return null

  return (
    <S.Container onClick={handleClick}>
      <S.ArrowIcon src={arrowIcon} alt="image of back button" />
      <S.Title>Back</S.Title>
    </S.Container>
  )
}

export default ReturnButton
