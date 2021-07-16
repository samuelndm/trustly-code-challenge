import React, { useState } from 'react'
import * as UTIL from 'utils'
import * as C from 'components'
import * as S from './styles'
import placeholder from 'assets/images/placeholder.png'

type ThumbnailProps = {
  thumbnailURL?: string
  fullImageURL?: string
}

const Thumbnail = ({ thumbnailURL, fullImageURL }: ThumbnailProps) => {
  const [showThumbnail, setShowThumbnail] = useState<boolean | null>(false)

  return (
    <>
      <S.Thumbnail
        src={thumbnailURL || placeholder}
        alt="shoes's thumbnail"
        onClick={() => setShowThumbnail(true)}
      />

      <C.UI.Modal
        isModalOpen={showThumbnail}
        closeModal={setShowThumbnail}
        size={UTIL.Enums.ModalSizes.md}
      >
        <S.ImageFullResolution
          src={fullImageURL || placeholder}
          alt="shoes's image with full resolution"
          onClick={() => setShowThumbnail(true)}
          loading="lazy"
        />
      </C.UI.Modal>
    </>
  )
}

export default Thumbnail
