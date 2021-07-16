import React, { useState } from 'react'
import * as Hooks from 'hooks'
import * as UTIL from 'utils'
import * as S from './styles'
import Thumbnail from './Thumbnail/Thumbnail'
import Quantity from './Quantity/Quantity'
import Sizes from './Sizes/Sizes'

type ShoesStoreProps = {
  shoe: UTIL.Types.Shoe
}

const Shoe = ({ shoe }: ShoesStoreProps) => {
  const { addItemToCart } = Hooks.useCartContext()
  const [purchaseDetails] = useState<UTIL.Types.ShoePurchaseDetails>({
    size: 0,
    quantity: 0,
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

  const handleClick = () => {
    if (UTIL.Validations.Shoe.isPurchaseDetailsValid(purchaseDetails, shoe)) {
      addItemToCart({
        purchaseDetails,
        product: shoe,
      })
    }
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

          <S.Price>
            {UTIL.Common.formatCurrency(
              Number.parseFloat(shoe?.price),
              UTIL.Enums.LanguageCodes[UTIL.Common.getBrowserLanguage()],
              UTIL.Enums.CurrencyCodes[shoe?.currency]
            )}
          </S.Price>
          <S.Button onClick={handleClick}>Add to cart</S.Button>
        </S.Info>
      </S.Container>
    </>
  )
}

export default Shoe
