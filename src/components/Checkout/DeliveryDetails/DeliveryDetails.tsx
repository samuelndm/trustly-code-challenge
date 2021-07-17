import React from 'react'
import * as Hooks from 'hooks'
import * as UTIL from 'utils'
import * as S from './styles'

const DeliveryDetails = () => {
  const { user } = Hooks.useUserContext()

  return (
    <S.Container>
      <S.Title>Delivery details</S.Title>
      <S.Summary
        dangerouslySetInnerHTML={{
          __html: UTIL.Summaries.getAddressSummary(user.mainAddress),
        }}
      />
    </S.Container>
  )
}

export default DeliveryDetails
