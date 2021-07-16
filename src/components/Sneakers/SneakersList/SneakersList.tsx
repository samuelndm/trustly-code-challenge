import React from 'react'
import * as UTIL from 'utils'
import * as C from 'components'
import * as S from './styles'

type SneakersListProps = {
  sneakers: UTIL.Types.Shoe[]
}

const SneakersList = ({ sneakers }: SneakersListProps) => {
  return (
    <S.Container>
      <S.FlexContainer>
        {sneakers?.map((sneaker) => (
          <S.FlexItem
            lg={4}
            md={5}
            sm={12}
            xs={12}
            margin="1.5rem"
            key={sneaker?.id}
          >
            <C.Card.Shoe shoe={sneaker} />
          </S.FlexItem>
        ))}
      </S.FlexContainer>
    </S.Container>
  )
}

export default SneakersList
