import React, { useState } from 'react'
import * as UTIL from 'utils'
import * as S from './styles'
import Thumbnail from './Thumbnail/Thumbnail'
import Quantity from './Quantity/Quantity'
import Sizes from './Sizes/Sizes'
import Price from './Price/Price'
import AddToCartButton from './AddToCartButton/AddToCartButton'

type ShoesStoreProps = {
  shoe: UTIL.Types.Shoe
}

const Shoe = ({ shoe }: ShoesStoreProps) => {
  const [purchaseDetails] = useState<UTIL.Types.ShoePurchaseDetails>({
    id: shoe?.id,
    quantity: 0,
    size: 0,
    color: shoe?.color,
  })

  const updateSize = (newSize: number) => {
    UTIL.Common.updateStateWithoutReRender(purchaseDetails, 'size', newSize)
  }

  const updateQuantity = (newQuantity: number) => {
    UTIL.Common.updateStateWithoutReRender(
      purchaseDetails,
      'quantity',
      newQuantity
    )
  }

  return (
    <>
      <S.Container>
        <Thumbnail
          thumbnailURL={shoe?.thumbnailURL}
          fullImageURL={shoe?.maxresURL}
        />
        <S.Info>
          <S.Description>{shoe?.description}</S.Description>
          <S.Values>
            <Sizes sizes={shoe?.sizes} updateSize={updateSize} />
            <Quantity updateQuantity={updateQuantity} />
          </S.Values>

          <Price shoe={shoe} />
          <AddToCartButton shoe={shoe} purchaseDetails={purchaseDetails} />
        </S.Info>
      </S.Container>
    </>
  )
}

export default Shoe
