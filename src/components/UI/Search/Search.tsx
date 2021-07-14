import React, { useState } from 'react'
import * as S from './styles'
import * as C from 'components'

type SearchProps = {
  placeholder?: string
  isLoading?: boolean
  onChange: (keyword: string) => void
  style: React.CSSProperties
}

const Search = ({ placeholder, isLoading, onChange, style }: SearchProps) => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onChange(keyword)
  }

  return (
    <S.Form style={style} onSubmit={handleSubmit}>
      <S.Input
        type="search"
        aria-label={`${placeholder || 'search'} input`}
        placeholder={placeholder || 'Search'}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <S.Button type="submit" aria-label="search button" onClick={handleSubmit}>
        {isLoading ? (
          <C.UI.Spinner size={20} />
        ) : (
          <S.Icon className="fas fa-search" />
        )}
      </S.Button>
    </S.Form>
  )
}

export default Search
