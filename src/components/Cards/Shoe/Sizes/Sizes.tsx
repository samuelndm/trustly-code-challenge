import React from 'react'
import * as C from 'components'
import * as S from './styles'

type SizesProps = {
  sizes: number[]
  updateSize: (size: number) => void
}

const Sizes = ({ sizes, updateSize }: SizesProps) => {
  return (
    <C.UI.Select
      label="Size"
      options={sizes}
      onChange={updateSize}
      defaultValue={sizes[0]}
      containerStyle={{ ...S.containerStyle }}
      labelStyle={{ ...S.labelStyle }}
    />
  )
}

export default Sizes
