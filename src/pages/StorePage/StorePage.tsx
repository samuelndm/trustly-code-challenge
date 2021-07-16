import React, { useEffect, useState } from 'react'
import * as UTIL from 'utils'
import * as API from 'services/middleware'
import * as C from 'components'
import * as S from './styles'

const StorePage = () => {
  const [sneakers, setSneakers] = useState<UTIL.Types.Shoe[]>([])
  const [filteredSneakers, setFilteredSneakers] = useState<UTIL.Types.Shoe[]>(
    []
  )
  const [searched, setSearched] = useState('')

  const loadSneakers = async () => {
    const response = await API.getSneakers()
    setSneakers(response)
  }

  const handleFilterSneakers = (
    sneakers: UTIL.Types.Shoe[],
    searched: string
  ) => {
    const newSneakers = UTIL.Common.FilterArrayByProperty(
      sneakers,
      'description',
      searched
    )

    setFilteredSneakers(newSneakers)
  }

  useEffect(() => {
    handleFilterSneakers(sneakers, searched)
  }, [sneakers, searched])

  useEffect(() => {
    loadSneakers()
  }, [])

  return (
    <S.Container>
      <S.Content>
        <C.UI.Search
          placeholder="Search for your sneaker"
          onChange={setSearched}
        />
        <C.SneakersList sneakers={filteredSneakers} />
      </S.Content>
    </S.Container>
  )
}

export default StorePage
